import Header from "./Header";

const Layout = ({children, title, ...props}) => {
	return (
		<div>
			<Header {...props}/>
			<main>
				<h2>{title}</h2>
				<section>{children} </section>
			</main>
			<footer>Francisco Javier Navarro - Todos los derechos reservadsos</footer>
		</div>
	);
};

export default Layout;
