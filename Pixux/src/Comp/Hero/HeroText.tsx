import SubText from "../General/SubText"

interface Props {
    head: String,
    text: String
}

const HeroText = ({ text, head }: Props) => {
  return (
		<div>
			<h1 className='poppins-semibold text-[#050327] lg:text-[2.6rem] md:text-[1.6rem] text-[2rem] mb-2  '>{head}</h1>
			<SubText text={text} />
		</div>
  );
}

export default HeroText
