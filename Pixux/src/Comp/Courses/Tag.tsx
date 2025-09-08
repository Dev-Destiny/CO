interface Props {
	level: String;
	price: String;
}

const Tag = ({ level, price }: Props) => {
    let levelBg = level === 'Beginner' ? "bg-blue-700": level === "Intermediate" ? "bg-white" : "bg-black"
    let levelText = level === 'Beginner' ? "text-white": level === "Intermediate" ? "text-black" : "text-white"

	return (
		<div className='p-3 absolute w-full left-0 top-0 flex justify-between z-1'>
			<p className={`text-[12px] ${levelBg}  w-fit p-1 px-2 ${levelText} font-bold rounded-xl`}>
				{level}
			</p>
			<p className='text-[12px] bg-black w-fit p-1 px-2 text-white font-bold rounded-xl'>
				{price}
			</p>
		</div>
	);
};

export default Tag;
