import "react";
// import { useState } from "react";
interface Props {
	text: String;
	type: String;
}

const Button = ({ text, type }: Props) => {
	// const [mouseOver, setMouseOver] = useState(true)
	// const handleHover = () => {
	// 	return
	// }

	return (
		<div>
			<button
				className={`cursor-pointer px-10 py-2 rounded-4xl text-white text-[0.8rem] ${type} shadow-[4px_4px_10px_rgba(20,20,20,0.2),-2px_-2px_10px_rgba(255,255,255,0.8)]`}
			>
				{text}
			</button>
		</div>
	);
};

export default Button;
