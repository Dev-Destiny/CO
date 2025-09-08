import Header from "../General/Header";
import TestimonialCard from "./TestimonialCard";

const TestimonialSect = () => {
	return (
		<div className='bg-gray-50 py-20 px-5'>
			<Header
				title='What Our Students Say'
				text="Join thousands of developers who've transformed their careers with CO's interactive learning platform."
			/>
			<div className='grid grid-cols-1 gap-5 max-w-[1000px] mx-auto md:grid-cols-3 lg:grid-cols-3'>
				<TestimonialCard
					course="Completed: JavaScript Mastery"
					stars={5}
					img='me.jpg'
					name='Sarah Chen'
					message='"The problem-solving approach is brilliant. Instead of just watching videos, I was actually building things from day one."'
					position='Software Engineer at Google'
				/>
				<TestimonialCard
					course="Completed: Advanced Python Development"
					stars={5}
					img='spiral.jpg'
					name='Marcus Johnson'
					position='Full-stack Developer at Microsoft'
					message='"COs interactive approach helped me land my dream job at Google. The hands-on projects were exactly what I needed to build confidence."'
				/>
				<TestimonialCard
					course="Completed: RESTful API Design"
					stars={5}
					img='html.png'
					message='"COs API course taught me industry best practices. The interactive exercises prepared me for real-world challenges at Stripe."'
					name='Priya Patel'
					position='API Developer at Stripe'
				/>
			</div>
		</div>
	);
};

export default TestimonialSect;
