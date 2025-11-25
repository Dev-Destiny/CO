import Button from "../../components/General/Button";
import Header from "../../components/General/Header";
import ContinueWith from "../../components/General/ContinueWith";
import InputBox from "../../components/General/InputBox";
import { useState } from "react";

const SignUpForm = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: ""
	})
	return (
		<div>
			<form action=''>
				<Header
					title='Join CO'
					text='Start your interactive learning journey today'
				/>

				<div className='grid grid-cols-2 gap-x-4 gap-y-5 mb-5'>
					<div>
						<InputBox
							label='First name'
							placeholder='John'
							type='text'
							value={formData.firstName}
							onInput={(e) => setFormData({...formData, firstName: e.currentTarget.value})}
						/>
					</div>
					<div>
						<InputBox
							label='Last name'
							placeholder='Doe'
							type='text'
							value={formData.lastName}
							onInput={(e) => setFormData({...formData, lastName: e.currentTarget.value})}
						/>
					</div>
					<div className='col-span-2'>
						<InputBox
							label='Email'
							placeholder='john@example.com'
							type='email'
							value={formData.email}
							onInput={(e) => setFormData({...formData, email: e.currentTarget.value})}
						/>
					</div>
					<div className='col-span-2'>
						<InputBox
							label='Password'
							placeholder='Create a strong password'
							type='password'
							icon={{ name: "EyeOff", is: true }}
							value={formData.password}
							onInput={(e) => setFormData({...formData, password: e.currentTarget.value})}
						/>
					</div>
					<div className='col-span-2'>
						<InputBox
							label='Confirm Password'
							placeholder='Confirm your password please'
							type='password'
							icon={{ name: "EyeOff", is: true }}
							value={formData.confirmPassword}
							onInput={(e) => setFormData({...formData, confirmPassword: e.currentTarget.value})}
						/>
					</div>
				</div>


        <p className="text-[12px] text-gray-500 w-full mb-10">Must be at least 8 characters with numbers and letters</p>


        <div className="flex items-center gap-2 mb-5">
          <input id="agreeToTC" type="checkbox"/>
          <label htmlFor="agreeToTC">
            I agree to the {" "}
            <button className="underline text-blue-600 hover:text-blue-800">Terms of Service</button> {" "}
            and {" "}
            <button className="underline text-blue-600 hover:text-blue-800">Privacy Police</button>
          </label>
        </div>

        <Button type="primary" size="full">Create Account</Button>

        <div className="flex justify-center relative items-center my-10 ">
          <div className="bg-gray-800 w-full h-[1px] absolute z-[-1]"></div>
          <p className="bg-white text-gray-500 text-[12px] px-2">OR CONTINUE WITH</p>
        </div>

        <div className="mb-10">
          <ContinueWith icon="Github" text="Continue with Github"/>
        </div>

        <p className="text-[12px] text-gray-500 w-full mb-10 text-center">By signing up, you'll get access to our interactive courses and join thousands of learners improving their programming skills.</p>
			</form>
		</div>
	);
};

export default SignUpForm;
