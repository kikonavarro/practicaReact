import React from "react";
import { Redirect, Route } from "react-router";
import { useAuthContext } from "./context";

const PrivateRoute = (props) => {
	const { isLogged } = useAuthContext();
	return isLogged ? (
		<Route {...props} />
	) : (
		<Route>
			{({ location }) => (
				<Redirect
					to={{ pathname: "/login", state: { from: location } }}
				/>
			)}
		</Route>
	);
};

export default PrivateRoute;
