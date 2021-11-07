import React from "react";
import { Link } from "react-router-dom";
const URI = process.env.REACT_APP_API_BASE_URL;

const Advert = ({ adverts }) => {
	return (
		<article className="ad-list row row-cols-md-5 ">
			{adverts.map((advert) => (
				<div key={advert.id} >
					<Link to={`/advert/${advert.id}`}>
						<div className="card mb-3 bg-dark text-white">
							<p className="card-title">{advert.name}</p>
							<p className="card-text">{advert.sale ? "Venta" : "Compra"}</p>
							<p className="card-text">{advert.price}</p>
							<p className="card-text">{advert.tags}</p>
							<p>
								{advert.photo && (
									<img className="card-img"
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
