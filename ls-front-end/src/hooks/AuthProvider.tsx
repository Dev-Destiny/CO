import { useState } from "react";
import {
	validateAgreeToTerms,
	validateConfirmPassword,
	validateEmail,
	validateFirstName,
	validateLastName,
	validatePassword,
} from "../utils/validator";
import { useToastMessage } from "./ToastMessage";

function useAuthProvider() {
	const { toastError } = useToastMessage();
	const [loginFormData, setLoginFormData] = useState({
		email: "",
		password: "",
	});
	const [signupFormData, setSignupFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		agreeToTerms: false,
	});

	//? For Login Form Validation
	const validateLoginForm = () => {
		const errors = [
			validateEmail(loginFormData.email),
			validatePassword(loginFormData.password),
		];

		for (const error of errors) {
			if (error) {
				return error;
			}
		}
		return false;
	};

	const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const error = validateLoginForm();
		if (error) {
			toastError(error);
			return;
		}

        console.log(loginFormData)
		//! Login Logic Here
	};



    
	//? For Signup Form Validation
	const validateSignupForm = () => {
		const errors = [
			validateFirstName(signupFormData.firstName),
			validateLastName(signupFormData.lastName),
			validateEmail(signupFormData.email),
			validatePassword(signupFormData.password),
			validateConfirmPassword(
				signupFormData.password,
				signupFormData.confirmPassword
			),
			validateAgreeToTerms(signupFormData.agreeToTerms), // Assuming there's a field for agreeing to terms
		];

		for (const error of errors) {
			if (error) {
				return error;
			}
		}
		return false;
	};

	const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const error = validateSignupForm();

		if (error) {
			toastError(error);
			return;
		}

        //! Signup Logic Here
	};



	return {
		loginFormData,
		setLoginFormData,
		signupFormData,
		setSignupFormData,
		handleLogin,
        handleSignup
	};
}

export default useAuthProvider;
