import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { getLatestAdverts } from "../service";
import Advert from "./Advert";
import FilterForm from "./FilterForm";
import { initialFilter, filterAdverts } from "./filters";

const AdvertsPage = ({ history, ...props }) => {
	const [adverts, setAdverts] = useState([]);
	const [filters, setFilters] = React.useState(initialFilter);
	const [tags, setTags] = React.useState([]);


	useEffect(() => {
		getLatestAdverts().then((adverts) => setAdverts(adverts));
	}, []);
const filteredAdverts = filterAdverts(adverts, filters, tags);

const handleSubmit = (filterAdvert, tags) => {
	setFilters(filterAdvert);
	setTags(tags);
};

	return (
		<Layout title="probando">
			<FilterForm onSubmit={handleSubmit} />
			<div>
				<ul>
					{adverts.map(({ id, ...advert }) => (
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
