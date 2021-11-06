import { useState } from "react";
import FormField from "../common/FormField";
import { AuthContextConsumer } from "./context";

import { login } from "./service";

const LoginPage = ({ onLogin, history, location }) => {
	//const [username, setUsername] = useState("");

	// const handelChangeUsername = (event) => {setUsername(event.target.value)};
	const [value, setValue] = useState({ email: "", password: "" });
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [checkedValue, setCheckedValue] = useState(false);

	function toggle(checkedValue) {
		return !checkedValue;
	}

	const handleCheckedValue = (event) => {
		if (event.target.value) {
			localStorage.setItem(
				"auth",
				JSON.stringify(localStorage.getItem("auth"))
			);
		}
		setCheckedValue(toggle(checkedValue));
	};

	const resetError = () => setError(null);

	const handleChange = (event) => {
		setValue((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const handelSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		resetError();

		try {
			await login(value, checkedValue);
			setIsLoading(false);
			onLogin();
			const { from } = location.state || { from: { pathname: "/" } };
			history.replace(from);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	return (
		<div>
			<h1> Log in To NODEPOP</h1>
			<form onSubmit={handelSubmit}>
				<FormField
					type="text"
					name="email"
					label="email"
					value={value.email}
					onChange={handleChange}
				/>
				<FormField
					type="password"
					name="password"
					label="password"
					value={value.password}
					onChange={handleChange}
				/>
				<label>
					<input
						type="checkbox"
						name="checkbox"
						id={0}
						onChange={handleCheckedValue}
						checked={checkedValue}
					/>
					recordar contraseña
				</label>
				<br />
				<button
					type="submit"
					disabled={isLoading || !value.email || !value.password}
				>
					Login
				</button>
			</form>
			{error && <div>{error.message}</div>}
		</div>
	);
};

const ConnectedLoginPage = (props) => (
	<AuthContextConsumer>
		{(auth) => <LoginPage onLogin={auth.handleLogin} {...props} />}
	</AuthContextConsumer>
);

export default ConnectedLoginPage;
