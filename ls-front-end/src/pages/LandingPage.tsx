import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import CoursesSect from "../components/Courses/CoursesSect";
import FeaturesSect from "../components/Features/FeaturesSect";
import Path from "../components/Path/Path";
import TestimonialSect from "../components/TestimonialSect/TestimonialSect";
import CTA from "../components/CTA-Sect/CTA";
import Footer from "../components/Footer";

function LandingPage() {
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

export default LandingPage;
