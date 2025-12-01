import * as LucideIcons from "lucide-react";
import { useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	icon?: { name: keyof typeof LucideIcons; is: boolean };
	type: string;
}

const InputBox = ({
	label,
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
						type={iconName === "EyeOff" ? "password" : "text"}
						className='px-3 py-2 bg-surface border-1 border-border rounded-[5px] text-[14px] w-full'
						{...rest}
					/>
					<IconComponent
						className='absolute right-5 h-5  hover:text-black'
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
						className='px-3 py-2  bg-surface border-1 border-border rounded-[5px] text-[14px] w-full'
						{...rest}
					/>
				</div>
			)}
		</div>
	);
};

export default InputBox;
