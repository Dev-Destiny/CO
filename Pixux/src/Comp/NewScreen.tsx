import Navbar from "./Navbar";
import Hero from "./Hero/Hero";
import Feature from "./Features/FeaturesSect";
import CoursesSect from "./Courses/CoursesSect";
import Path from "./Path/Path";
import TestimonialSect from "./TestimonialSect/TestimonialSect";
import CTA from "./CTA-Sect/CTA";
import Footer from "./Footer/Footer";

function NewScreen() {
	return (
		<div className=''>
			<Navbar />
			<Hero />
			<CoursesSect/>
			<Feature />
			<Path/>
			<TestimonialSect/>
			<CTA/>
			<Footer/>
		</div>
	);
}

export default NewScreen;
