import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../auth/context";

const Header = () => {
	const { isLogged, handleLogout } = useContext(AuthContext);
	return (
		<header>
			<nav className="navbar navbar-dark bg-dark">
				<Link to="/">
					<div> NodePop </div>
				</Link>
				<NavLink to="/advert/new"> Nuevo Anuncio</NavLink>
				{isLogged ? (
					<button className="btn btn-primary" onClick={handleLogout}>
						{" "}
						Log out
					</button>
				) : (
					<button> Log in</button>
				)}
			</nav>
		</header>
	);
};

export default Header;
