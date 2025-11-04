import "react";

type Props = {
	children: React.ReactNode;
	type: string;
	size?: string;
	stroke?: boolean
}

const Button = ({ children, type, size, stroke }: Props) => {

	const bgColor = type === "primary" ? "bg-blue-600" : "transparent";
	const textColor = type === "primary" ? "text-white" : "text-black";
	const hoverBg = type === "primary" ? "hover:bg-blue-800" : "hover:bg-gray-300";
	const width = size === "full" ? "w-full" : "w-fit"
	const border = stroke === true ? "border-1 border-gray-300" : ""

	return (
		<div>
			<button
				className={`${width} ${hoverBg} ${border} transition-all duration-500 cursor-pointer px-5 py-2 rounded-[8px] text-[0.8rem] ${bgColor} ${textColor}`}
			>
				{children}
			</button>
		</div>
	);
};

export default Button;
