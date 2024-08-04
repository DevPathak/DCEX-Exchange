"user client";

export const PrimaryButton = ({
	children,
	onClick,
}: {
	children: React.ReactNode;
	onClick: () => void;
}) => {
	return (
		<button
			type="button"
			className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export const SecondaryButton = ({
	children,
	onClick,
	prefix,
}: {
	children: React.ReactNode;
	onClick: () => void;
	prefix?: React.ReactNode;
}) => {
	return (
		<button
			type="button"
			className="text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-gray-700 dark:border-gray-700 flex"
			onClick={onClick}
		>
			<div>{prefix}</div>
			<div>{children}</div>
		</button>
	);
};
