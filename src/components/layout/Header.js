
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContextProvider } from "../auth/contex";

const Header = () => {
    const {isLogged, handleLogout} = useContext(AuthContextProvider)
	return (
		<header>
            <Link to="/">
			    <div> LOGO </div>
			</Link>
            <nav>
                <NavLink to="/adverts/new"> NEW ADVERT

                </NavLink>
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
