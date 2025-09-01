import Header from "../General/Header";
import Card from "./Card";

const Feature = () => {
	return (
		<div className='bg-[#e1eefa] pt-20 pb-40 w-full'>
			<Header text='Features' />
			<div className='flex px-10 gap-10 mt-10 flex-wrap'>
				<Card
					head='Gamified Learning'
					icon="Swords"
					text='Get peak results with your own personal AI coach to provide explanations and guidance.'
				/>
				<Card
					icon="Brain"
					head='AI Guidance'
					text='Get peak results with your own personal AI coach to provide explanations and guidance.'
				/>
				<Card
					icon="Dumbbell"
					head='Practical Exercises'
					text='Get peak results with your own personal AI coach to provide explanations and guidance.'
				/>
			</div>
		</div>
	);
};

export default Feature;
