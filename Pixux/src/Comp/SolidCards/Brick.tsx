interface Props {
    text: string,
    img: string
}

function Card({ text, img }:Props) {
    return (
		<div className='cursor-pointer w-[10rem] flex flex-col items-center bg-[#dbecfc] rounded-2xl p-5 hover:shadow-[4px_4px_10px_rgba(20,20,20,0.2),-2px_-2px_10px_rgba(255,255,255,0.8)] duration-500'>
			<div className='flex-3 flex items-center'>
				<img src={img} alt='' />
			</div>
			<p className='font-semibold mt-3 flex-1'>{text}</p>
		</div>
	);
}

export default Card;