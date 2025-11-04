import * as LucideIcons from "lucide-react";
import { useState, type HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLInputElement>{
	label: string;
	icon?: { name: keyof typeof LucideIcons; is: boolean };
	placeholder: string;
	type: string;
}

const InputBox = ({
	label,
	placeholder,
	type,
	icon = { name: "Eye", is: false },
	...rest
}: Props) => {
	const [iconName, setIconName] = useState(icon.name);

	const IconComponent = LucideIcons[iconName] as React.FC<
		React.SVGProps<SVGSVGElement>
	>;

	return (
		<div>
			<p className='mb-1 font-semibold'>{label}</p>

			{type === "password" ? (
				<div className='relative flex items-center'>
					<input
						{...rest}
						type={iconName === "EyeOff" ? "password" : "text"}
						placeholder={placeholder}
						className='px-3 py-2 bg-gray-100 border-1 border-gray-300 rounded-[5px] text-[14px] w-full'
					/>
					<IconComponent
						className='absolute right-5 h-5 text-gray-400 hover:text-black'
						onClick={() =>
							setIconName((prev) =>
								prev == "EyeOff" ? "Eye" : "EyeOff"
							)
						}
					/>
				</div>
			) : (
				<div className='relative flex items-center'>
					<input
						{...rest}
						className='px-3 py-2 bg-gray-100 border-1 border-gray-300 rounded-[5px] text-[14px] w-full'
					/>
				</div>
			)}
		</div>
	);
};

export default InputBox;
