import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { getLatestAdverts } from "../service";
import Advert from "./Advert";


const AdvertsPage = ({history, ...props }) => {
	const [adverts, setAdverts] = useState([]);

	useEffect(() => {
		getLatestAdverts().then(adverts => setAdverts(adverts));
	}, []);

	return (
		<Layout title="probando">
			<div>
				<ul>
					{adverts.map(({id, ...advert}) => (
						<li key={id}>
						<Link to={`/adverts/${id}`}>
						  <Advert {...advert} />
						</Link>
					  </li>
					))}
				</ul>
			</div>
		</Layout>
	);
};

export default AdvertsPage;
