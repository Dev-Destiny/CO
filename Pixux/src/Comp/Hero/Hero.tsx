import Button from "../General/Button";
import HeroImg from "./HeroImg";
import HeroText from "./HeroText";

const Hero = () => {
	const title = "We offer courses on Everything Programming!";
	const subtext =
		"From front-end development to building APIs and custom scripts, we've got you covered.";
	const img = "code.svg";
	return (
		<section className=' flex px-10 gap-10 items-center mb-[3rem]'>
			<div className=' flex-1 h-fit'>
				<HeroText head={title} text={subtext} />
				<div className='flex gap-5 mt-10'>
					<Button type={"type1"} text={"Sign Up"} />
					<Button type={"type2"} text={"Explore"} />
				</div>
			</div>
			<div className='sm:flex-1'>
				<HeroImg src={img} />
			</div>
		</section>
	);
};

export default Hero;
