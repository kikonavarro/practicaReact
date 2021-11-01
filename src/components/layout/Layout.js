import Header from "./Header";

const Layout = ({children, title, ...props}) => {
	return (
		<div>
			<Header {...props}/>
			<main>
				<h2>{title}</h2>
				<section>{children} </section>
			</main>
			<footer></footer>
		</div>
	);
};

export default Layout;
