import { Stars } from 'lucide-react'

interface Props {
    text: string
	background: string;
	color: string;
}

const Pop = ({ text, background, color }:Props) => {
	return (
		<div className={` flex items-center gap-2 ${color} ${background} py-2 px-5 rounded-3xl w-fit`}>
			<Stars size={20} />
			<p className='text-[12px]'>{ text }</p>
		</div>
	);
};

export default Pop;
