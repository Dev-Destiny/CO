import React from "react";
import * as LucideIcons from "lucide-react";

interface Props {
	icon: keyof typeof LucideIcons;
	head: string;
	text: string;
	type?: string;
}

const WhyDevsChooseCo = ({ icon, head, text, type }: Props) => {
	const IconConponent = LucideIcons[icon] as React.FC<
		React.SVGProps<SVGSVGElement>
	>;

	return (
		<div>
			{type == "card" ? (
				<div className='flex gap-2 bg-blue-50 rounded-xl border-gray-200 border-1 p-3 h-full'>
					<IconConponent className='text-blue-500 w-20' />
					<div>
						<p className='font-semibold text-[14px] mb-1'>{head}</p>
						<p className='text-gray-500 text-[12px]'>{text}</p>
					</div>
				</div>
			) : (
				<div className='flex gap-2'>
					<IconConponent className='text-blue-500' />
					<div>
						<p className='font-semibold text-[]'>{head}</p>
						<p className='text-gray-500 text-[14px]'>{text}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default WhyDevsChooseCo;
