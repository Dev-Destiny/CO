interface Props {
	text: String;
}

const SubText = ({ text }: Props) => {
	return <p className='text-[#2b2b2b]'>{text}</p>;
};

export default SubText;
