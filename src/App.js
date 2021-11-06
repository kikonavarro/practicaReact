import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import React, { useState } from "react";
import AdvertsPage from "./components/AdvertsPage/AdvertsPage";
import NewAdvertPage from "./components/NewAdvertPage/NewAdvertPage";
import AdvertPage from "./components/AdvertPage/AdvertPage";
import LoginPage from "./components/auth/LoginPage";
import { logout } from "./components/auth/service";
import { AuthContextProvider } from "./components/auth/context";
import PrivateRoute from "./components/auth/PrivateRoute";

function App({ isInitiallyLogged }) {
	const [isLogged, setIsLogged] = useState(isInitiallyLogged);
	const handleLogin = () => {
		setIsLogged(true);
	};

	const handleLogout = () => {
		logout().then(() => setIsLogged(false));
	};
	return (
		<Router>
			<AuthContextProvider
				value={{ isLogged, handleLogout, handleLogin }}
			>
				<div>
					<Route exact path="/advert/new" component={NewAdvertPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/adverts" component={AdvertsPage} />
					<Route exact path="/">
						<Redirect to="/adverts" />
					</Route>
					<Route path="/adverts/:advertId" component={AdvertPage} />
				</div>
			</AuthContextProvider>
		</Router>
	);
}

export default App;
