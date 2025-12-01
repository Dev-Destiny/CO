import Button from "../../components/General/Button";
import Header from "../../components/General/Header";
import ContinueWith from "../../components/General/ContinueWith";
import InputBox from "../../components/General/InputBox";
import useAuthProvider from "../../hooks/AuthProvider";

function SignInForm() {

	const {handleLogin, loginFormData, setLoginFormData} = useAuthProvider()
	return (
		<div className="lg:col-start-2 row-start-1">
			<form
				action=''
				onSubmit={handleLogin}
				className='flex flex-col gap-5 border-1 border-border rounded-xl p-5'
			>
				<Header
					title='Welcome back'
					text='Sign in to continue your learning journey'
				/>
				<div className='flex flex-col gap-5'>
					<InputBox
						label='Email address'
						type='email'
						onInput={(e) => setLoginFormData({...loginFormData, email: e.currentTarget.value})}
						value={loginFormData.email}
						placeholder='Enter your email'						
					/>
					<InputBox
						label='Password '
						placeholder='Enter your password'
						type='password'
						icon={{ name: "EyeOff", is: true }}
						value={loginFormData.password}
						onInput={(e) => setLoginFormData({...loginFormData, password: e.currentTarget.value})}
					/>
				</div>

				<div className='flex items-center gap-2'>
					<input type='checkbox' id='remember-me' />
					<label htmlFor='remember me' className='text-[14px]'>
						Remember me
					</label>
				</div>

				<Button variant='primary' size='full' >Sign In</Button>

				<div className='flex justify-center relative items-center my-5 '>
					<div className='bg-surface w-full h-[1px] absolute z-[-1]'></div>
					<p className='bg-bg text-gray-500 text-[12px] px-2'>
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
