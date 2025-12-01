import { courseCards } from "../../lib/constants";
import Button from "../General/Button";
import Header from "../General/Header";
import CourseCard from "./CourseCard";

const CoursesSect = () => {
	
	return (
		<div className='py-20 pad bg-bg-light'>
			<Header
				title='Popular Programming Courses'
				text={
					"Start your coding journey with our most popular courses, designed by industry experts."
				}
			/>

			<div className='container flex flex-col lg:flex-row w-fit mx-auto gap-15'>
				{courseCards.map((card, index) => (
					<CourseCard
						key={index}
						name={card.name}
						about={card.about}
						img={card.img}
						duration={card.duration}
						students={card.students}
						ratings={card.ratings}
						level={card.level}
						price={card.price}
					/>
				))}
			</div>
			<div className='w-fit mx-auto mt-10'>
				<Button variant='ghost' stroke={true}>
					View all courses
				</Button>
			</div>
		</div>
	);
};

export default CoursesSect;
