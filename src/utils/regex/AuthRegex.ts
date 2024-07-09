export function validatePassword(password: string) {
	const feedback = [];

	if (password.length < 8) {
		feedback.push("Password must be at least 8 characters long.");
	}

	if (!/[A-Z]/.test(password)) {
		feedback.push("Password must contain at least one uppercase letter.");
	}

	if (!/[a-z]/.test(password)) {
		feedback.push("Password must contain at least one lowercase letter.");
	}

	if (!/\d/.test(password)) {
		feedback.push("Password must contain at least one digit.");
	}

	if (!/[@$!%*#?&]/.test(password)) {
		feedback.push("Password must contain at least one special character.");
	}

	return feedback;
}
