import { testimonials } from "../../lib/constants"; 
import Header from "../General/Header";
import TestimonialCard from "./TestimonialCard";

const TestimonialSect = () => {
	return (
		<div className='bg-gray-50 py-20 pad'>
			<Header
				title='What Our Students Say'
				text="Join thousands of developers who've transformed their careers with CO's interactive learning platform."
			/>
			<div className='grid grid-cols-1 gap-5 max-w-[1000px] mx-auto md:grid-cols-3 lg:grid-cols-3'>
				{testimonials.map((testimonial, index) => (
					<TestimonialCard
						key={index}
						course={testimonial.course}
						stars={testimonial.stars}
						img={testimonial.img}
						name={testimonial.name}
						message={testimonial.message}
						position={testimonial.position}
					/>
				))}
			</div>
		</div>
	);
};

export default TestimonialSect;
