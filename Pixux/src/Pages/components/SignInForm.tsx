import Button from "../../Comp/General/Button";
import Header from "../../Comp/General/Header";
import ContinueWith from "../../Comp/General/ContinueWith";
import InputBox from "../../Comp/General/InputBox";

function SignInForm() {
	return (
		<div className="lg:col-start-2 row-start-1">
			<form
				action=''
				className='flex flex-col gap-5 border-1 border-gray-300 rounded-xl p-5'
			>
				<Header
					title='Welcome back'
					text='Sign in to continue your learning journey'
				/>
				<div className='flex flex-col gap-5'>
					<InputBox
						label='Email address'
						placeholder='Enter your email'
						type='email'
					/>
					<InputBox
						label='Password '
						placeholder='Enter your password'
						type='password'
						icon={{ name: "EyeOff", is: true }}
					/>
				</div>

				<div className='flex items-center gap-2'>
					<input type='checkbox' id='remember-me' />
					<label htmlFor='remember me' className='text-[14px]'>
						Remember me
					</label>
				</div>

				<Button type='primary' size='full' >Sign In</Button>

				<div className='flex justify-center relative items-center my-5 '>
					<div className='bg-gray-400 w-full h-[1px] absolute z-[-1]'></div>
					<p className='bg-white text-gray-500 text-[12px] px-2'>
						OR CONTINUE WITH
					</p>
				</div>

        <div className="grid grid-cols-2 gap-4">
          <ContinueWith icon="Chrome"/>
          <ContinueWith icon="Github"/>
        </div>
			</form>
		</div>
	);
}

export default SignInForm;
