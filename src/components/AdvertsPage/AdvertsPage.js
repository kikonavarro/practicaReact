import React from "react";
import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { getLatestAdverts } from "../service";
import Advert from "./Advert";
import FilterForm from "./FilterForm";
import { initialFilter, filterAdverts } from "./filters";
import { Link } from "react-router-dom";

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
		<Layout title="Busca tu anuncio en NODEPOP">
			<FilterForm onSubmit={handleSubmit} />
			<div>
				{adverts.length ? (
					<Advert adverts={filteredAdverts} />
				) : (
					<Link to={`/advert/new`}>
						<button className="btn btn-primary">CREA EL PRIMER ANUNCIO</button>
					</Link>
				)}
			</div>
		</Layout>
	);
};

export default AdvertsPage;
