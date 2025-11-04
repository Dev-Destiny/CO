import Navbar from "../Comp/Navbar";
import Hero from "../Comp/Hero/Hero";
import CoursesSect from "../Comp/Courses/CoursesSect";
import FeaturesSect from "../Comp/Features/FeaturesSect";
import Path from "../Comp/Path/Path";
import TestimonialSect from "../Comp/TestimonialSect/TestimonialSect";
import CTA from "../Comp/CTA-Sect/CTA";
import Footer from "../Comp/Footer/Footer";

function Home() {
	return (
		<div className=''>
			<Navbar />
			<Hero />
			<CoursesSect/>
			<FeaturesSect />
			<Path/>
			<TestimonialSect/>
			<CTA/>
			<Footer/>
		</div>
	);
}

export default Home;
