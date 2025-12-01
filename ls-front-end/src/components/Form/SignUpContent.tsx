import Check from "../../components/General/Check";
import Stats from "../../components/General/Stats";
import TestimonialCard from "../../components/TestimonialSect/TestimonialCard";
import WhyDevsChooseCo from "./WhyDevsChooseCo";

const SignUpContent = () => {
	return (
		<div className='flex flex-col gap-10 pb-20 row-start-1'>
			<h1 className='text-3xl'>Why developers choose CO</h1>
			<div className=' flex flex-col gap-5'>
				<WhyDevsChooseCo
					icon='Code'
					head='Interactive Coding'
					text='Learn by doing with hands-on coding exercises and real-time feedback'
				/>
				<WhyDevsChooseCo
					icon='Zap'
					head='Instant Progress'
					text='See your skills improve with our adaptive learning system'
				/>
				<WhyDevsChooseCo
					icon='Users'
					head='Community Support'
					text='Connect with fellow learners and get help when you need it'
				/>
				<WhyDevsChooseCo
					icon='Award'
					head='Earn Certificates'
					text='Complete courses and earn certificates to showcase your skills'
				/>
			</div>
			<div className='bg-surface p-5 rounded-xl border-1 border-border'>
				<p className='font-semibold mb-5 text-center'>
					Join thousands of other successful learners
				</p>
				<div className='grid grid-cols-2 gap-y-5'>
					<Stats quant='50k+' desc='Active Learners' />
					<Stats quant='100+' desc='Interactive Lessons' />
					<Stats quant='9.5%' desc='Completion Rate' />
					<Stats quant='4.8' desc='Average Rating' />
				</div>
			</div>
			<div className='text-[14px] flex flex-col gap-3'>
				<Check
					text='Free to start, upgrade anytime'
					color='text-gray-700'
					width='w-fit'
				/>
				<Check
					text='No credit card required'
					color='text-gray-700'
					width='w-fit'
				/>
				<Check
					text='Cancel anytime'
					color='text-gray-700'
					width='w-fit'
				/>
			</div>
			<TestimonialCard
				stars={5}
				message='"CO transformed how I learn programming. The interactive approach made complex concepts click instantly. I landed my dream job as a software engineer just 6 months after starting!"'
				img='me.jpg'
				name='John Doe'
				position='Software Engineer at Meta'
			/>
		</div>
	);
};

export default SignUpContent;
