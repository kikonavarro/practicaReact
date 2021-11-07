import React from "react";
import { Link } from "react-router-dom";
const URI = process.env.REACT_APP_API_BASE_URL;

const Advert = ({ adverts }) => {
	return (
		<article>
			{adverts.map((advert) => (
				<div key={advert.id} >
					<Link to={`/advert/${advert.id}`}>
						<div>
							<p>{advert.name}</p>
							<p>{advert.sale ? "Venta" : "Compra"}</p>
							<p>{advert.price}</p>
							<p>{advert.tags}</p>
							<p>
								{advert.photo && (
									<img
										src={`${URI}${advert.photo}`}
										alt="no hay foto"
									/>
								)}
							</p>
						</div>
					</Link>
				</div>
			))}
			;
		</article>
	);
};

export default Advert;
