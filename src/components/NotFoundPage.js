import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div>
			<p>"La PÁGINA NO EXISTE"</p>
			<Link to={`/`}>
				<button className="btn btn-primary">Regresar</button>
			</Link>
		</div>
	);
};

export default NotFoundPage;
