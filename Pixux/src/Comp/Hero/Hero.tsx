import { Play } from "lucide-react";
import SubText from "../General/SubText";
import Button from "../General/Button";
import Stats from "../General/Stats";
import Pop from "../General/Pop";

const Hero = () => {
	const title = "Master Programming with ";
	const subtext =
		"Learn to code through hands-on problem solving. Build real projects, master algorithms, and advance your career with our expert-designed courses.";
	const colored = "Interactive Learning";
	// const img = "code.svg";

	return (
		<section className=' px-10 pt-40 pb-60 mb-[3rem] bg-blue-100'>
			<div className='mx-auto flex flex-col gap-5 items-center text-center max-w-[700px]'>
				<Pop text="Interactive Learning Platform" background="bg-blue-200" color="text-blue-500"/>

				<h1 className='poppins-semibold text-[#050327] lg:text-[3rem] md:text-[1.6rem] text-[2rem] '>
					{title} <span className='text-blue-700'>{colored}</span>
				</h1>

				<SubText text={subtext} />

				<div className='flex flex-col gap-5 mt-5 sm:flex-row md:flex-row'>
					<Button type={"primary"} text={"Start Learning Free"} />
					<button className='flex  items-center gap-2 bg-white hover:bg-gray-100 transition-all duration-500 cursor-pointer px-5 py-2 rounded-[8px] text-[0.8rem]'>
						<Play size={15} />
						Watch Demo
					</button>
				</div>

				<div className='flex justify-between w-full'>
					<Stats quant="50k+" desc="Active Learners"/>
					<Stats quant="500+" desc="Interactive Lessons"/>
					<Stats quant="95%" desc="Success Rate"/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
