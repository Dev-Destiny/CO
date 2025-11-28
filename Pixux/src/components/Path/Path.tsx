import { pathSectSteps } from "../../lib/constants";
import Header from "../General/Header";
import Steps from "./Steps";

const Path = () => {
	return (
		<div className='pt-20 pad mb-20'>
			<Header
				title='How CO Works'
				text='Our proven 4-step learning methodology gets you from beginner to job-ready developer.'
			/>
			<div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-10 max-w-[1000px] mx-auto mt-20'>
				{pathSectSteps.map((step, index) => (
					<Steps
						key={index}
						title={step.title}
						step={step.step}
						icon={step.icon}
						color={step.color}
						iconColor={step.iconColor}
						bar={step.bar}
						text={step.text}
					/>
				))}
			</div>

			<div className='mt-20 lg:p-20 p-10 rounded-2xl bg-blue-50 w-fit mx-auto'>
				<Header
					title='Ready to Start Your Journey?'
					text='Join thousands of successful developers who started their careers with CO. Begin with our free Python course today.'
				/>
				<div className='flex mx-auto w-full justify-center items-center'>
					<div className='flex w-25 mr-3  g-blue-90 items-center'>
						<div className='ball p-3.5 rounded-full border-2 left-[] relative border-white bg-blue-400'></div>
						<div className='ball p-3.5 rounded-full border-2 left-[-10px] relative border-white bg-green-400'></div>
						<div className='ball p-3.5 rounded-full border-2 left-[-20px] relative border-white bg-purple-400'></div>
						<div className='ball p-3.5 rounded-full border-2 left-[-30px] relative border-white bg-red-400'></div>
						<div className='text-white relative left-[-60px] text-[12px]'>
							+10k
						</div>
					</div>
					<div className='text-gray-500 text-[12px]'>
						learners started this week
					</div>
				</div>
			</div>
		</div>
	);
};

export default Path;
