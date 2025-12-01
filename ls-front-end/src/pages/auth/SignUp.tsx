import SignUpForm from "../../components/Form/SignUpForm";
import Button from "../../components/General/Button";
import Logo from "../../components/General/Logo";
import SignUpContent from "../../components/Form/SignUpContent";
import Footer from "../../components/Footer";
import { Link } from "react-router";

const SignUp = () => {
	return (
		<div>
			<div className='z-20 pad py-5 mb-[2rem] sticky top-0 left-0 right-0'>
				<div className='flex justify-between container mx-auto'>
					<div className='flex font-bold items-center gap-1'>
						<Logo />
					</div>

					<div className='flex items-center gap-2'>
						<p className='text-[12px] text-gray-500'>
							Already have an account?
						</p>
						<Link to={"/auth"}>
							<Button variant='ghost'>Sign In</Button>
						</Link>
					</div>
				</div>
			</div>

			<div className='grid lg:grid-cols-2 grid-cols-1 pad container mx-auto gap-10'>
				<SignUpForm />
				<SignUpContent />
			</div>

			<Footer />
		</div>
	);
};

export default SignUp;
