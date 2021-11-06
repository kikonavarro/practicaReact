import React from "react";
import { Link } from "react-router-dom";
const URI = process.env.REACT_APP_API_BASE_URL;

const Advert = ({ id, createddAt, name, sale, price, tags, photo }) => {
	return (
		<article>
            
			<div>
				<p>{name}</p>
				<p>{sale ? "Venta" : "Compra"}</p>
				<p>{price}</p>
				<p>{tags}</p>
				<p>
					{photo && <img src={`${URI}${photo}`} alt="no hay foto" />}
				</p>
			</div>
		</article>
	);
};

export default Advert;
