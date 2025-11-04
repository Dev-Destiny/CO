import Logo from "../../Comp/General/Logo";
import Button from "../../Comp/General/Button";
import { Link } from "react-router";
import Footer from "../../Comp/Footer/Footer";
import SignInContent from "../components/SignInContent";
import SignInForm from "../components/SignInForm";

function SignIn() {
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
							Don't have an account?
						</p>
						<Link to={"/signup"}>
							<Button type='ghost'>Sign up</Button>
						</Link>
					</div>
				</div>
			</div>

			<div className='grid lg:grid-cols-2 grid-cols-1 pt-20 px-10 max-w-[1000px] mx-auto gap-10 mb-20'>
				<SignInContent />
				<SignInForm />
			</div>

			<Footer />
		</div>
	);
}

export default SignIn;
