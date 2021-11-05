import { useState } from "react";
import FormField from "../common/FormField";
import { AuthContextConsumer } from "./contex";

import { login } from "./service";

const LoginPage = ({ onLogin, history, location }) => {
	//const [username, setUsername] = useState("");

	// const handelChangeUsername = (event) => {setUsername(event.target.value)};
	const [value, setValue] = useState({ email: "", password: "" });
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [checked, setChecked] = useState(false)

	const resetError = () => setError(null);

	const handleChange = event => {
		setValue(prevState => ({
		  ...prevState,
		  [event.target.name]: event.target.value,
		}));
	  };

	const handelSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		resetError();

		try {
			await login(value);
			setIsLoading(false);
			onLogin();
			const { from } = location.state || { from: { pathname: '/' } };
      		history.replace(from);	
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	const handelChecked = () => {
		
	}

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
				<label><input type="checkbox"  value="first_checkbox"/> Recordar Contraseña</label><br/>
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

const ConnectedLoginPage = props => (
    <AuthContextConsumer>
        {auth => <LoginPage onLogin={auth.handleLogin} {...props}/>}
    </AuthContextConsumer>
        
)

export default ConnectedLoginPage


