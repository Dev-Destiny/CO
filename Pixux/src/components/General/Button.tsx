import "react";
import type { HtmlHTMLAttributes } from "react";

type Props = {
	children: React.ReactNode;
	type: string;
	size?: string;
	stroke?: boolean;
} & HtmlHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, type, size, stroke, ...rest }: Props) => {
	const width = size === "full" ? "w-full" : "w-fit";
	const border = stroke === true ? "border-1 border-gray-300" : "";

	return (
		<div>
			<button
				{...rest}
				className={`${
					type === "primary"
						? "bg-blue-600 text-white hover:bg-blue-800 active:bg-blue-800"
						: "transparent text-black hover:bg-gray-300 active:bg-gray-300"
				} ${width} ${border} transition-all duration-500 cursor-pointer px-5 py-2 rounded-[8px] text-[0.8rem]`}
			>
				{children}
			</button>
		</div>
	);
};

export default Button;
