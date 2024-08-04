"use client";
import { signIn, useSession } from "next-auth/react";
import { SecondaryButton } from "./Button";
import { useRouter } from "next/navigation";

export const Hero = () => {
	const session = useSession();
	const router = useRouter();
	return (
		<div>
			<div className="text-5xl font-medium">
				<span>The Indian Cryptocurrency</span>
				<span className="text-blue-500 pl-2">Revolution</span>
			</div>
			<div className="flex justify-center pt-4 text-2xl text-slate-500">
				Create a frictionless wallet with just a Google Account.
			</div>
			<div className="pt-4 flex justify-center">
				{session.data?.user ? (
					<SecondaryButton
						onClick={() => {
							router.push("/dashboard");
						}}
						children={"Go to Dashboard"}
						prefix={""}
					/>
				) : (
					<SecondaryButton
						onClick={() => {
							signIn("google");
						}}
						children={"Sign Up with Google"}
						prefix={""}
					/>
				)}
			</div>
		</div>
	);
};
