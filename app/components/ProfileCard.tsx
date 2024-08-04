"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "./Button";
import { useEffect, useState } from "react";
import { useTokens } from "../api/hooks/useTokens";

export const ProfileCard = ({ publicKey }: { publicKey: string }) => {
	const session = useSession();
	const router = useRouter();

	console.log(session);
	if (session.status === "loading") {
		//TODO: replace with a skeleton
		return <div>Loading...</div>;
	}

	if (!session.data?.user) {
		router.push("/");
		return null;
	}

	return (
		<div className="pt-8 flex justify-center">
			<div className="max-w-4xl bg-white rounded shadow w-full p-12">
				<Greeting
					image={session.data?.user?.image ?? ""}
					name={session.data?.user?.name ?? ""}
				/>
				<Assets publicKey={publicKey} />
				{/* {JSON.stringify(session.data.user)} */}
			</div>
		</div>
	);
};

function Assets({ publicKey }: { publicKey: string }) {
	const [copied, setCopied] = useState(false);
	const { tokenBalances, loading } = useTokens(publicKey);

	useEffect(() => {
		if (copied) {
			let timeout = setTimeout(() => {
				setCopied(false);
			}, 3000);
			return () => {
				clearTimeout(timeout);
			};
		}
	}, [copied]);

	if (loading) {
		return "Loading....";
	}

	return (
		<div className="text-slate-500 mt-4">
			Account assets
			<br />
			<div className="flex justify-between pt-2">
				<div className="flex">
					<div className="text-6xl font-bold text-black">
						${tokenBalances?.totalBalance.toFixed(2)}
					</div>
					<div className="font-slate-500 font-bold text-4xl flex flex-col justify-end pl-2">
						USD
					</div>
				</div>
				<div>
					<PrimaryButton
						children={copied ? "Copied" : "Your Wallet Address"}
						onClick={() => {
							navigator.clipboard.writeText(publicKey);
							setCopied(true);
						}}
					/>
				</div>
			</div>
			<div>{JSON.stringify(tokenBalances?.tokens)}</div>
		</div>
	);
}

function Greeting({ image, name }: { image: string; name: string }) {
	return (
		<div className="flex">
			<img src={image} className="rounded-full w-13 h-13 mr-4" />
			<div className="text-2xl font-semibold flex flex-col justify-center">
				Welcome back, {name}
			</div>
		</div>
	);
}
