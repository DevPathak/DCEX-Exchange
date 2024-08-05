import { ReactNode, useState } from "react";
import { SUPPORTED_TOKENS, TokenDetails } from "../lib/tokens";
import { TokenWithBalance } from "../api/hooks/useTokens";

export function Swap({
	publicKey,
	tokenBalances,
}: {
	publicKey: string;
	tokenBalances: {
		totalBalance: number;
		tokens: TokenWithBalance[];
	} | null;
}) {
	const [baseAsset, setBaseAsset] = useState(SUPPORTED_TOKENS[0]);
	const [quoteAsset, setQuoteAsset] = useState(SUPPORTED_TOKENS[1]);

	return (
		<div className="p-12">
			<div className="text-2xl font-bold pb-4">Swap Tokens</div>
			<SwapInputRow
				onSelect={(asset) => {
					setBaseAsset(asset);
				}}
				selectedToken={baseAsset}
				title={"You Pay:"}
				topBorderEnabled={true}
				bottomBorderEnabled={false}
				subtitle={
					<div className="text-slate-400 pt-1.5 text-sm flex">
						<div className="font-normal pr-1">Current Balance: </div>
						<div className="font-semibold">
							{
								tokenBalances?.tokens.find((x) => x.name === baseAsset.name)
									?.balance
							}{" "}
							{baseAsset.name}
						</div>
					</div>
				}
			/>
			<div className="flex justify-center">
				<div
					onClick={() => {
						let baseAssetTemp = baseAsset;
						setBaseAsset(quoteAsset);
						setQuoteAsset(baseAssetTemp);
					}}
					className="cursor-pointer rounded-full w-10 h-10 border absolute mt-[-20px] bg-white flex justify-center pt-2"
				>
					<SwapIcon />
				</div>
			</div>
			<SwapInputRow
				onSelect={(asset) => {
					setQuoteAsset(asset);
				}}
				selectedToken={quoteAsset}
				title={"You Receive:"}
				topBorderEnabled={false}
				bottomBorderEnabled={true}
			/>
		</div>
	);
}

function SwapInputRow({
	onSelect,
	selectedToken,
	title,
	subtitle,
	topBorderEnabled,
	bottomBorderEnabled,
}: {
	onSelect: (asset: TokenDetails) => void;
	selectedToken: TokenDetails;
	title: string;
	subtitle?: ReactNode;
	topBorderEnabled: boolean;
	bottomBorderEnabled: boolean;
}) {
	return (
		<div
			className={`border flex justify-between p-6 ${
				topBorderEnabled ? "rounded-t-xl" : ""
			} ${bottomBorderEnabled ? "rounded-b-xl" : ""}`}
		>
			<div>
				<div className="text-xs font-semibold mb-1">{title}</div>
				<AssetSelector selectedToken={selectedToken} onSelect={onSelect} />
				{subtitle}
			</div>
		</div>
	);
}

function AssetSelector({
	selectedToken,
	onSelect,
}: {
	selectedToken: TokenDetails;
	onSelect: (asset: TokenDetails) => void;
}) {
	return (
		<div className="w-24">
			<select
				onChange={(e) => {
					// alert(e.target.value);
					const selectedToken = SUPPORTED_TOKENS.find(
						(x) => x.name === e.target.value
					);
					if (selectedToken) {
						onSelect(selectedToken);
						// alert(JSON.stringify(selectedToken));
					}
				}}
				id="countries"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			>
				{/* <option selected>
					<img src={selectedToken.image} className="w-10" />{" "}
					{selectedToken.name}
				</option> */}
				{SUPPORTED_TOKENS.map((token) => (
					<option selected={selectedToken.name === token.name}>
						{token.name}
					</option>
				))}
			</select>
		</div>
	);
}

function SwapIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			className="size-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
			/>
		</svg>
	);
}
