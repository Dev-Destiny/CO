import React from "react";
import * as LucideIcons from "lucide-react";

export interface StepProps {
	icon: keyof typeof LucideIcons;
	iconColor?: string;
	color: string;
	bar?: boolean;
	step: string;
	title: string;
	text: string;
}

const Steps = ({
	icon,
	bar,
	iconColor,
	color,
	step,
	text,
	title,
}: StepProps) => {
	const IconComponent = LucideIcons[icon] as React.FC<
		React.SVGProps<SVGSVGElement>
	>;

	return (
		<div className='relative flex flex-col items-center text-center gap-3'>
			{bar && (
				<div className=' items-center absolute left-[-20px] w-full top-7 z-[-2] hidden lg:flex md:hidden'>
					<div className='w-full h-[2px] bg-gray-200'></div>
					<div className='p-1 bg-gray-200 rounded-full'></div>
				</div>
			)}

			<div className={`rounded-full w-fit p-5 ${color}`}>
				<IconComponent name='Menu' className={iconColor} />
			</div>
			<p className='text-gray-500 text-[12px]'>{step}</p>
			<h2 className='font-semibold'>{title}</h2>
			<p className='text-gray-500'>{text}</p>
		</div>
	);
};

export default Steps;
