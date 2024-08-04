import { Session } from "next-auth";
import prisma from "../db";
import { Keypair } from "@solana/web3.js";
import GoogleProvider from "next-auth/providers/google";

export interface session extends Session {
	user: {
		email: string;
		name: string;
		image: string;
		uid: string;
	};
}

export const authConfig = {
	secret: process.env.NEXTAUTH_SECRET || "secr3t",
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
		}),
	],
	callbacks: {
		session: ({ session, token }: any): session => {
			const newSession: session = session as session;
			if (newSession.user && token.uid) {
				newSession.user.uid = token.uid ?? "";
			}
			return newSession!;
		},

		async jwt({ token, account, profile }: any) {
			const user = await prisma.user.findFirst({
				where: {
					sub: account?.providerAccountId ?? "",
				},
			});
			if (user) {
				token.uid = user.id;
			}
			return token;
		},

		async signIn({ user, account, profile, email, credentials }: any) {
			console.log({ user, account, profile, email, credentials });
			if (account?.provider === "google") {
				const email = user.email;
				if (!email) {
					return false;
				}
				const userDB = await prisma.user.findFirst({
					where: {
						username: email,
					},
				});
				if (userDB) {
					return true;
				}

				const keypair = Keypair.generate();
				const publicKey = keypair.publicKey.toBase58();
				const privateKey = keypair.secretKey;
				console.log(publicKey);
				console.log(privateKey);

				await prisma.user.create({
					data: {
						username: email,
						name: user.name,
						profilePicture: user.image,
						provider: "Google",
						sub: account.providerAccountId,
						solWallet: {
							create: {
								publicKey: publicKey,
								privateKey: privateKey.toString(),
							},
						},
						InrWallet: {
							create: {
								balance: 0,
							},
						},
					},
				});
				return true;
			}
			return false;
		},
	},
};
