// import { Play } from "lucide-react";
import Button from "../General/Button";
// import Stats from "../General/Stats";
// import Pop from "../General/Pop";

function Hero() {
	// const title = "Master Programming with ";
	const subtext =
		"Learn to code through hands-on problem solving. Build real projects, master algorithms, and advance your career with our expert-designed courses.";
	// const colored = "Interactive Learning";

	return (
		<section className='pad pb-60 mb-[3rem]'>
			<div className='items-center flex flex-col text-center gap-5'>
				<h1 className='font-mono text-8xl mb-[2rem] text-left lg:text-center md:text-center'>
					<span>Learn.</span>
					<span className='text-secondary'> Build.</span>{" "}
					<span className='text-accent'>Grow.</span>
				</h1>
				<p className='text-text-muted max-w-[70vh]'>{subtext}</p>
				<div className='flex gap-4'>
					<Button variant='special' size='lg' className='mt-10'>
						Start Learning Free
					</Button>
					<Button variant='secondary' size='lg' className='mt-10'>
						Explore Courses
					</Button>
				</div>
			</div>
		</section>
	);
}

export default Hero;
