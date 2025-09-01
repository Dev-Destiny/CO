interface Props {
	text: String;
}

const SubText = ({ text }: Props) => {
	return (
		<div>
			<p className="text-[#2b2b2b]" >{text}</p>
		</div>
	);
};

export default SubText;
