import prisma from "@/app/db";
import { authConfig } from "@/app/lib/auth";
import { connection } from "@/app/lib/constants";
import { Keypair, VersionedTransaction } from "@solana/web3.js";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const data: {
		quoteResponse: any;
	} = await req.json();

	const session = await getServerSession(authConfig);
	if (!session?.user) {
		return NextResponse.json(
			{
				message: "You are not logged in",
			},
			{
				status: 401,
			}
		);
	}

	const solWallet = await prisma.solWallet.findFirst({
		where: {
			userId: session.user.uid,
		},
	});

	if (!solWallet) {
		return NextResponse.json(
			{
				message: "Couldnt find associated solana wallet",
			},
			{
				status: 401,
			}
		);
	}

	const { swapTransaction } = await (
		await fetch("https://quote-api.jup.ag/v6/swap", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				// quoteResponse from /quote api
				quoteResponse: data.quoteResponse,
				// user public key to be used for the swap
				userPublicKey: solWallet.publicKey,
				// auto wrap and unwrap SOL. default is true
				wrapAndUnwrapSol: true,
				// feeAccount is optional. Use if you want to charge a fee.  feeBps must have been passed in /quote API.
				// feeAccount: "fee_account_public_key"
			}),
		})
	).json();

	const swapTransactionBuf = Buffer.from(swapTransaction, "base64");
	var transaction = VersionedTransaction.deserialize(swapTransactionBuf);
	console.log("transaction", transaction);
	const privateKey = getPrivateKey(solWallet.privateKey);
	console.log("privatekey", privateKey);
	transaction.sign([privateKey]);

	// get the latest block hash
	const latestBlockHash = await connection.getLatestBlockhash();

	// Execute the transaction
	const rawTransaction = transaction.serialize();
	const txid = await connection.sendRawTransaction(rawTransaction, {
		skipPreflight: true,
		maxRetries: 2,
	});
	await connection.confirmTransaction({
		blockhash: latestBlockHash.blockhash,
		lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
		signature: txid,
	});

	return NextResponse.json({
		txid,
	});
	console.log(`https://solscan.io/tx/${txid}`);
}

function getPrivateKey(privateKey: string) {
	const arr = privateKey.split(",").map((x) => Number(x));
	const privateKeyUintArr = Uint8Array.from(arr);
	const keyPair = Keypair.fromSecretKey(privateKeyUintArr);
	return keyPair;
}
