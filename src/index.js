import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { setAuthorizationHeader } from "./api/client";
import storage from "./utils/storage";

const accessToken = storage.get("auth");
setAuthorizationHeader(accessToken);

ReactDOM.render(
	//<React.StrictMode>
		<App isInitiallyLogged={!!accessToken} />,
	//</React.StrictMode>,
	document.getElementById("root")
);
