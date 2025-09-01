import * as LucideIcons from 'lucide-react'
import React from 'react'

interface Props {
	icon: keyof typeof LucideIcons;
	head: string;
	text: string;
}


const Card = ({  head, text, icon}: Props) => {
	const IconComponent = LucideIcons[icon] as React.FC<React.SVGProps<SVGSVGElement>>;

	return (
		<div className='border-1 border-[#030232] rounded-2xl p-5 pt-10 flex flex-col items-center flex-[200px]'>
			<IconComponent fontSize={50}/>
			<h2 className='poppins-semibold text-2xl mt-5'>{head}</h2>
			<p className='text-center mt-3 subtext'>{text}</p>
		</div>
	);
};

export default Card;
