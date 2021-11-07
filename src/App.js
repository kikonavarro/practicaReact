import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import React, { useState } from "react";
import AdvertsPage from "./components/AdvertsPage/AdvertsPage";
import NewAdvertPage from "./components/NewAdvertPage/NewAdvertPage";
import AdvertPage from "./components/AdvertPage/AdvertPage";
import LoginPage from "./components/auth/LoginPage";
import { logout } from "./components/auth/service";
import { AuthContextProvider } from "./components/auth/context";
import PrivateRoute from "./components/auth/PrivateRoute";
import Advert from "./components/AdvertsPage/Advert";

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
					<Switch>
						<PrivateRoute path="/advert/new" component={NewAdvertPage} />
						<PrivateRoute path="/adverts/:id">
						{(routerProps) => <AdvertPage {...routerProps} />}
						</PrivateRoute>
						<Route exact path="/login" component={LoginPage} />
						<PrivateRoute path="/adverts" component={AdvertsPage} />
						<Route exact path="/">
							<Redirect to="/adverts" />
						</Route>
					</Switch>
				</div>
			</AuthContextProvider>
		</Router>
	);
}

export default App;
