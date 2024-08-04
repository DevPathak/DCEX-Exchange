import { useState } from "react";
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
		<div>
			<SwapInputRow
				onSelect={(asset) => {
					setBaseAsset(asset);
				}}
				selectedToken={baseAsset}
			/>
			<SwapInputRow
				onSelect={(asset) => {
					setQuoteAsset(asset);
				}}
				selectedToken={quoteAsset}
			/>
		</div>
	);
}

function SwapInputRow({
	onSelect,
	selectedToken,
}: {
	onSelect: (asset: TokenDetails) => void;
	selectedToken: TokenDetails;
}) {
	return (
		<div className="border flex justify-between">
			<AssetSelector selectedToken={selectedToken} />
		</div>
	);
}

function AssetSelector({ selectedToken }: { selectedToken: TokenDetails }) {
	return (
		<div>
			<select
				id="countries"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			>
				<option selected>
					<img src={selectedToken.image} className="w-10" />{" "}
					{selectedToken.name}
				</option>
				<option value="US">United States</option>
				<option value="CA">Canada</option>
				<option value="FR">France</option>
				<option value="DE">Germany</option>
			</select>
		</div>
	);
}
