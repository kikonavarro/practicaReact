import React from "react";
import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { getLatestAdverts } from "../service";

const AdvertsPage = () => {
	const [adverts, setAdverts] = useState([]);

	useEffect(() => {
		getLatestAdverts().then(setAdverts);
	}, []);

	return (
		<Layout title="probando">
			<div className="">
				<ul>
					{adverts.map((advert) => (
						<li>{advert}</li>
					))}
				</ul>
			</div>
		</Layout>
	);
};

export default AdvertsPage;
