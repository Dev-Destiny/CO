import Header from "../General/Header";
import Steps from "./Steps";

const Path = () => {
	return (
		<div className='pt-20 px-10 mb-20'>
			<Header
				title='How CO Works'
				text='Our proven 4-step learning methodology gets you from beginner to job-ready developer.'
			/>
			<div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-10 max-w-[1000px] mx-auto mt-20'>
				<Steps
					title='Sign Up & Assess'
					step='STEP 1'
					icon='UserPlus'
					color='bg-orange-200'
					iconColor='text-orange-700'
					bar={false}
					text='Create your account and take our skill assessment to get personalized course recommendations'
				/>
				<Steps
					title='Choose Your Path'
					step='STEP 2'
					icon='BookOpen'
					color='bg-blue-200'
					iconColor='text-blue-700'
					bar={true}
					text='Select from our curated learning paths or individual courses based on your goals and current skill level'
				/>
				<Steps
					title='Learn Interactively'
					step='STEP 3'
					icon='Lightbulb'
					color='bg-green-200'
					iconColor='text-green-700'
					bar={true}
					text='Engage with hands-on coding challenges, build real projects, and receive instant feedback on your progress'
				/>
				<Steps
					title='Get Certified'
					step='STEP 4'
					icon='Award'
					color='bg-purple-200'
					iconColor='text-purple-700'
					bar={true}
					text='Complete assessments, showcase your projects, and earn industry-recognized certificates to boost your career'
				/>
			</div>

			<div className="mt-20 p-20 rounded-2xl bg-blue-50 w-fit mx-auto">
				<Header
					title='Ready to Start Your Journey?'
					text='Join thousands of successful developers who started their careers with CO. Begin with our free Python course today.'
				/>
				<div className="flex mx-auto w-full justify-center items-center">
					<div className="flex w-25 mr-3  g-blue-90 items-center">
						<div className="ball p-3.5 rounded-full border-2 left-[] relative border-white bg-blue-400"></div>
						<div className="ball p-3.5 rounded-full border-2 left-[-10px] relative border-white bg-green-400"></div>
						<div className="ball p-3.5 rounded-full border-2 left-[-20px] relative border-white bg-purple-400"></div>
						<div className="ball p-3.5 rounded-full border-2 left-[-30px] relative border-white bg-red-400"></div>
						<div className="text-white relative left-[-60px] text-[12px]">+10k</div>
					</div>
					<div className="text-gray-500 text-[12px]">learners started this week</div>
				</div>
			</div>
		</div>
	);
};

export default Path;
