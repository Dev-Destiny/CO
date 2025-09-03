import "react";
// import { useState } from "react";
interface Props {
	text: String;
	type: String;
}

const Button = ({ text, type }: Props) => {


	const bgColor = type === "primary" ? "bg-blue-700" : "transparent";
	const textColor = type === "primary" ? "text-white" : "text-black";
	const hoverBg = type === "primary" ? "hover:bg-blue-800" : "hover:bg-gray-300";

	return (
		<div>
			<button
				className={`${hoverBg} transition-all duration-500 cursor-pointer px-5 py-3 rounded-xl text-[0.8rem] ${bgColor} ${textColor}`}
			>
				{text}
			</button>
		</div>
	);
};

export default Button;
