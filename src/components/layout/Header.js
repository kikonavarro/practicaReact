import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../auth/context";

const Header = () => {
	const { isLogged, handleLogout } = useContext(AuthContext);
	return (
		<header>
			<Link to="/">
				<div> LOGO </div>
			</Link>
			<nav>
				<NavLink to="/advert/new"> NEW ADVERT</NavLink>
				{isLogged ? (
					<button onClick={handleLogout}> log out</button>
				) : (
					<button> log in</button>
				)}
			</nav>
		</header>
	);
};

export default Header;
