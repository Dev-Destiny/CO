import Logo from "../../components/General/Logo";
import Button from "../../components/General/Button";
import { Link } from "react-router";
import Footer from "../../components/Footer";
import SignInContent from "../../components/Form/SignInContent";
import SignInForm from "../../components/Form/SignInForm";

function SignIn() {
	return (
		<div>
			<div className='z-20 pad py-5 mb-[2rem] sticky top-0 left-0 right-0'>
				<div className='flex justify-between container mx-auto'>
					<div className='flex font-bold items-center gap-1'>
						<Logo />
					</div>

					<div className='flex items-center gap-2'>
						<p className='text-[12px] text-gray-500'>
							Don't have an account?
						</p>
						<Link to={"/auth/signup"}>
							<Button variant='ghost'>Sign up</Button>
						</Link>
					</div>
				</div>
			</div>

			<div className='grid lg:grid-cols-2 grid-cols-1 pad container mx-auto gap-10 mb-20'>
				<SignInContent />
				<SignInForm />
			</div>

			<Footer />
		</div>
	);
}

export default SignIn;
