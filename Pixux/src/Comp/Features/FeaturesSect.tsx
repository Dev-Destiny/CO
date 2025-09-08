import Header from "../General/Header";
import Stats from "../General/Stats";
import FeatureCard from "./FeatureCard";

const FeaturesSect = () => {
	return (
		<div className='bg-blue-50 py-30 px-5'>
			<Header
				title='Why Choose Us?'
				text="We've reimagined programming education to be more engaging, effective, and career-focused."
			/>
			<div className='grid grid-cols-1 gap-10 sm:grid-cols-3 max-w-[1000px] mx-auto grid-container'>
				<FeatureCard
					icon='Brain'
					head='Interactive Learning'
					text='Learn by doing with hands-on coding exercises and real-world projects that simulate industry challenges'
				/>
				<FeatureCard
					icon='Trophy'
					head='Career Focused'
					text="Build a portfolio of projects and gain skills that employers are actively seeking in today's market"
				/>
				<FeatureCard
					icon='Users'
					head='Expert Instructors'
					text='Learn from industry professionals working at top tech companies like Google, Microsoft, and Apple'
				/>
				<FeatureCard
					icon='Zap'
					head='Adaptive Learning'
					text='Our AI-powered platform adapts to your learning pace and provides personalized recommendations'
				/>
				<FeatureCard
					icon='Code'
					head='Real Code Environment'
					text='Write and test code in our integrated development environment - no setup required.'
				/>
				<FeatureCard
					icon='MessageCircle'
					head='Community Support'
					text='Join a vibrant community of learners and get help from peers and mentors whenever you need it.'
				/>
			</div>

			<div className="bg-white flex flex-col items-center w-fit p-10 rounded-2xl mx-auto mt-20">
				<Header
					title='Join the future of Programming Education'
					text='Experience learning that adapts to you, not the other way around. Start your journey with our most popular course for free.'
				/>
				<div className="grid grid-cols-1 gap-5 w-full sm:grid-cols-3">
					<div className="bg-blue-50 py-5 rounded-xl">
						<Stats quant="30 days" desc="Free trial Period"/>
					</div>
					<div className="bg-blue-50 py-5 rounded-xl">
						<Stats quant="24/7" desc="Customer Support"/>
					</div>
					<div className="bg-blue-50 py-5 rounded-xl">
						<Stats quant="100%" desc="Money-back Guarantee"/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturesSect;
