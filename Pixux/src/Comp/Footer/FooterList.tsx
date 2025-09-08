interface Props {
	head: string;
	linkList: Array<string>;
}

const FooterList = ({ head, linkList }: Props) => {
	return (
		<div>
			<h2 className='text-white mb-5 font-semibold'>{head}</h2>
			<div className="flex flex-col gap-1.5">
				{linkList.map((link, i) => (
					<p key={i} className='text-[14px] text-gray-300 hover:text-white cursor-pointer list- duration-200'>
						{link}
					</p>
				))}
			</div>
		</div>
	);
};

export default FooterList;
