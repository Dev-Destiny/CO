import { features } from "../../lib/constants";
import Header from "../General/Header";
import Stats from "../General/Stats";
// import FeatureCard from "./FeatureCard";

const FeaturesSect = () => {
	
	return (
		<div className='bg-blue-50 py-30 pad'>
			<Header
				title='Why Choose Us?'
				text="We've reimagined programming education to be more engaging, effective, and career-focused."
			/>
			<div className='grid grid-cols-1 gap-10 sm:grid-cols-3 max-w-[1000px] mx-auto grid-container'>
				{
					features.map((feature, index) => (
						// <FeatureCard
						// 	key={index}
						// 	icon={feature.icon}
						// 	head={feature.head}
						// 	text={feature.text}
						// />

						<div className='bg-white p-7  rounded-2xl group hover:shadow-[0_10px_10px_rgba(150,150,150,0.2)] duration-300' key={index}>
							<div className='flex flex-col gap-2'>
								{<div className='w-fit p-3 bg-blue-100 rounded-xl group-hover:bg-blue-600 group-active:bg-blue-600 duration-300'>
									<feature.icon className='text-blue-600 group-hover:text-white group-active:text-white duration-300'/>
								</div>}
								<h2 className='text-[1.3rem] font-semibold'>{ feature.head }</h2>
								<p className='text-gray-500'>{ feature.text }</p>
							</div>	
						</div>
					))
				}
				
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
