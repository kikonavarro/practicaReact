import client, {
	removeAuthorizationHeader,
	setAuthorizationHeader,
} from "../../api/client";
import storage from "../../utils/storage";

export const login = (credentials, checkedValue) => {
	return client
		.post("/api/auth/login", credentials)
		.then(({ accessToken }) => {
			setAuthorizationHeader(accessToken);
			storage.set("auth", accessToken, checkedValue);
		});
};

export const logout = () =>
	Promise.resolve().then(() => {
		removeAuthorizationHeader();
		storage.remove("auth");
	});
