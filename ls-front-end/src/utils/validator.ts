const validatePassword = (password: string) => {
	const minLength = 8;
	const hasUpperCase = /[A-Z]/.test(password);
	const hasLowerCase = /[a-z]/.test(password);
	const hasNumber = /[0-9]/.test(password);
	const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

	if (
		password.length >= minLength &&
		hasUpperCase &&
		hasLowerCase &&
		hasNumber &&
		hasSpecialChar
	) {
		return "";
	} else {
		return "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
	}
};


function validateEmail(email: string): string {
  if (!email) return "Email is required";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return "Email is invalid";

  return "";
}


function validateConfirmPassword(password: string, confirmPassword: string) {
  if (password !== confirmPassword) return "Passwords do not match";
  return "";
}

function validateFirstName(firstName: string) {
  if (!firstName.trim()) return "First name is required";
  return "";
}

function validateLastName(lastName: string) {
  if (!lastName.trim()) return "Last name is required";
  return "";
}

function validateUsername(username: string) {
  if (!username.trim()) return "Username is required";
  return "";
}

function validateRole(role: string) {
  if (!role.trim()) return "Role is required";
  return "";
}

function validatePhoneNumber(phoneNumber: string) {
  if (!phoneNumber.trim()) return "Phone number is required";
  if (!/^\d{10}$/.test(phoneNumber)) return "Phone number is invalid";
  return "";
}

function validateAgreeToTerms(agreeToTerms: boolean) {
  if (!agreeToTerms) return "You must agree to the terms and conditions";
  return "";
}

export {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateFirstName,
  validateLastName,
  validateUsername,
  validateAgreeToTerms,
  validateRole,
  validatePhoneNumber,
};
