import { ArrowRight } from "lucide-react";
import Pop from "../General/Pop";
import Check from "../General/Check";

const CTA = () => {
	return (
		<div className='text-white bg-blue-600 py-20 px-10'>
			<div className='max-w-[1000px] mx-auto text-center flex flex-col gap-5 items-center'>
				<Pop
					text='Limited Time: Free Access to Premium Features'
					background='bg-[#ffffff1a]'
					color=''
				/>
				<h1 className='text-[2.5rem] font-bold leading-tight'>
					Start Your Programming Journey Today
				</h1>
				<p className="text-gray-200 max-w-150">
					Join over 50,000 students who've transformed their careers
					with CO. Get instant access to our most popular course for
					free.
				</p>
				<div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3 lg:w-fit md:w-fit w-full'>
					<button className='bg-white py-2 px-3 justify-center rounded-[7px] cursor-pointer font-semibold duration-300 hover:bg-gray-100 text-blue-600 flex items-center gap-2'>
						Start Learning Free
						<ArrowRight size={20} />
					</button>
					<button className='bg-white py-2 px-3 flex justify-center rounded-[7px] cursor-pointer font-semibold duration-300 hover:text-blue-600'>
						Explore all courses
					</button>
				</div>
				<div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-x-10 gap-y-5 mb-20'>
					<Check text="No credit card required"/>
					<Check text="30-day free trial"/>
					<Check text="Cancel Anytime"/>
				</div>
			</div>
		</div>
	);
};

export default CTA;
