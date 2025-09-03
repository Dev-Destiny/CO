import { Play, Stars } from "lucide-react";
import SubText from "../General/SubText";
import Button from "../General/Button";

const Hero = () => {
	const title = "Master Programming with ";
	const subtext =
		"Learn to code through hands-on problem solving. Build real projects, master algorithms, and advance your career with our expert-designed courses.";
	const colored = "Interactive Learning";
	// const img = "code.svg";

	return (
		<section className=' px-10 pt-40 pb-60 mb-[3rem] bg-[#e0ebff]'>
			<div className='mx-auto flex flex-col gap-5 items-center text-center max-w-[700px]'>
				<div className=' flex gap-2 text-blue-500 bg-blue-200 py-2 px-5 rounded-3xl w-fit'>
					<Stars size={20} />
					<p>Interactive Learning Platform</p>
				</div>

				<h1 className='poppins-semibold text-[#050327] lg:text-[3rem] md:text-[1.6rem] text-[2rem] '>
					{title} <span className='text-blue-700'>{colored}</span>
				</h1>

				<SubText text={subtext} />

				<div className='flex gap-5 mt-5'>
					<Button type={"primary"} text={"Start Learning Free"} />
					<button className='flex  items-center gap-2 bg-white hover:bg-gray-100 transition-all duration-500 cursor-pointer px-5 py-3 rounded-xl text-[0.8rem]'>
						<Play size={15} />
						Watch Demo
					</button>
				</div>

				<div className='flex justify-between w-full '>
					<div>
						<h2 className='font-bold text-3xl text-blue-700'>
							50K+
						</h2>
						<p className='text-[#2b2b2b] text-[12px]'>
							Active Learners
						</p>
					</div>
					<div>
						<h2 className='font-bold text-3xl text-blue-700'>
							500+
						</h2>
						<p className='text-[#2b2b2b] text-[12px]'>
							Interactive Lessons
						</p>
					</div>
					<div>
						<h2 className='font-bold text-3xl text-blue-700'>
							95%
						</h2>
						<p className='text-[#2b2b2b] text-[12px]'>
							Success Rate
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
