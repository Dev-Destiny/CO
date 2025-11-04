import SignUpForm from "../components/SignUpForm";
import Button from "../../Comp/General/Button";
import Logo from "../../Comp/General/Logo";
import SignUpContent from "../components/SignUpContent";
import Footer from "../../Comp/Footer/Footer";
import { Link } from "react-router";

const SignUp = () => {
	return (
		<div>
			<div className='z-20 px-10 py-2 mb-[2rem] border-b-1 border-b-gray-300 fixed top-0 left-0 right-0 backdrop-blur-[20px] bg-[rgba(255,255,255,0.7)]'>
				<div className='flex justify-between max-w-[1000px] mx-auto'>
					<div className='flex font-bold items-center gap-1'>
						<Logo />
						CO.
					</div>

					<div className='flex items-center gap-2'>
						<p className='text-[12px] text-gray-500'>
							Already have an account?
						</p>
						<Link to={"/signin"}>
							<Button type='ghost'>Sign In</Button>
						</Link>
					</div>
				</div>
			</div>

			<div className='grid lg:grid-cols-2 grid-cols-1 pt-20 px-10 max-w-[1000px] mx-auto gap-10'>
				<SignUpForm />
				<SignUpContent />
			</div>

			<Footer />
		</div>
	);
};

export default SignUp;
