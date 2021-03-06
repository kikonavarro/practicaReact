import Layout from "../layout/Layout";
import { getAdvert, deleteAdvert } from "../service";
import NotFoundPage from "../NotFoundPage";
import DeleteConfirm from "./DeleteConfirm";
import AdvertUnico from "./AdvertUnico";

import React from "react";
import { useHistory } from "react-router";

const AdvertPage = ({ ...RouterProps }) => {
	const history = useHistory();

	const [advert, setAdvert] = React.useState(null);
	const [error, setError] = React.useState();
	const [showDeleteAdvert, setShowDeleteAdvert] = React.useState(false);

	const { match } = RouterProps;

	React.useEffect(() => {
		getAdvert(match.params.id).then(setAdvert).catch(setError);
	}, [match.params.id]);

	const handleClick = () => {
		setShowDeleteAdvert(true);
	};

	const handleDelete = () => {
		deleteAdvert(advert.id).then(history.push("/adverts"));
	};

	const handelCancel = () => {
		setShowDeleteAdvert(false);
	};

	return error ? (
		<NotFoundPage />
	) : (
		<Layout title="Este es tu anuncio seleccionado" onClick={handleClick}>
			{advert && (
				<div className="">
					<AdvertUnico className=""advert={advert} />
					<button className="btn btn-danger btn-lg" type="button" onClick={handleClick}>
						Delete
					</button>
				</div>
			)}
			{showDeleteAdvert && (
				<DeleteConfirm
					className="delete-confirm"
					onConfirm={handleDelete}
					onCancel={handelCancel}
				></DeleteConfirm>
			)}
		</Layout>
	);
};

export default AdvertPage;
