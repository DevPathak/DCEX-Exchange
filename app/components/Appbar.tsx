"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { PrimaryButton } from "./Button";

export const Appbar = () => {
	const session = useSession();
	return (
		<div className="border-b px-2 py-2 flex justify-between">
			<div className="text-xl font-bold flex flex-col justify-center">DCEX</div>
			<div>
				{session.data?.user ? (
					<PrimaryButton
						children={"Sign Out"}
						onClick={() => {
							signOut();
						}}
					/>
				) : (
					<PrimaryButton
						children={"Sign In"}
						onClick={() => {
							signIn();
						}}
					/>
				)}
			</div>
		</div>
	);
};
