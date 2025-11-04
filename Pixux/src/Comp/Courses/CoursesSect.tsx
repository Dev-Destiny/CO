import Button from "../General/Button";
import Header from "../General/Header";
import CourseCard from "./CourseCard";

const CoursesSect = () => {
	return (
		<div className="py-20 px-10">
			<Header
				title='Popular Programming Courses'
				text={
					"Start your coding journey with our most popular courses, designed by industry experts."
				}
			/>

			<div className="max-w-[1000px] flex flex-col lg:flex-row w-fit mx-auto gap-15">
				<CourseCard
					name='Python'
					about='Master Python programming from basics to advanced concepts. Build real-world projects and learn industry best practices'
					img='spiral.jpg'
                    duration="8 weeks"
                    students="40.7k students"
                    ratings="4.9"
                    level="Beginner"
                    price="Free"
				/>
				<CourseCard
					name='Javascript'
					about='Master Python programming from basics to advanced concepts. Build real-world projects and learn industry best practices'
					img='spiral.jpg'
                    duration="10 weeks"
                    students="26.8k students"
                    ratings="4.2"
                    level="Intermediate"
                    price="Free"
				/>
				<CourseCard
					name='RESTful APIs'
					about='Master Python programming from basics to advanced concepts. Build real-world projects and learn industry best practices'
					img='spiral.jpg'
                    duration="12 weeks"
                    students="14.2k students"
                    ratings="3.7"
                    level="Advanced"
                    price="Free"
				/>
			</div>
			<div className="w-fit mx-auto mt-10">
				<Button type="ghost" stroke={true}>View all courses</Button>
			</div>
		</div>
	);
};

export default CoursesSect;
