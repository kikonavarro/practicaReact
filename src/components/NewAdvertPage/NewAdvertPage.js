import React from "react";
import Layout from "../layout/Layout";
import { useState } from "react";
import { useHistory } from "react-router";
import { createAdvert } from "../service";
import { getAdvertsTags } from "../service";
import FormField from "../common/FormField";
import TagsAvailable from "./TagsAvailable";

function NewAdvertPage() {
	const history = useHistory();
	const [add, setAdd] = useState({ name: "", sale: false, price: 0 });
	//const [createdAdvertId, setCreatedAdvertId] = useState("");
	const [error, setError] = useState(null);
	//const { content } = value;
	const [tagsAvailable, setTagsAvailable] = React.useState([]);

	React.useEffect(() => {
		getAdvertsTags().then(setTagsAvailable);
	}, []);

	const handleChange = (event) => {
		const value = event.target.value;
		setAdd({
			...add,
			[event.target.name]: value,
		});
	};

	const [fileInput, setFileInput] = React.useState("");

	const handleChangeImage = (event) => {
		if (event.target.files[0]) {
			setFileInput(event.target.files[0]);
		} else {
			setFileInput([]);
		}
	};

	const [tags, setTags] = React.useState([]);

	const handleChangeTags = (event) => {
		if (event.target.checked) {
			setTags((oldTags) => [...oldTags, event.target.value]);
		} else {
			setTags((oldTags) =>
				oldTags.filter((tag) => tag !== event.target.value)
			);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			//const createdAdvert = await createAdvert(value);
			let newAdvert = new FormData();
			newAdvert.append("name", add.name);
			newAdvert.append("sale", add.sale);
			newAdvert.append("price", add.price);
			newAdvert.append("tags", tags);
			if (fileInput) {
				newAdvert.append("photo", fileInput);
			}

			createAdvert(newAdvert).then(history.push("/adverts"));
		} catch (error) {
			console.log(error);
			if (error.status === 401) {
				return history.push("/login");
			}
			setError(error());
		}
	};

	return (
		<Layout title="Nuevo Anuncio">
			<form onSubmit={handleSubmit}>
				<FormField
					name="name"
					type="text"
					label="name"
					value={add.name}
					onChange={handleChange}
					autofocus={true}
				/>

				<select
					name="sale"
					vale={add.sale}
					onChange={handleChange}
					type="boolean"
				>
					<option name="sale" value="1">
						Vendo
					</option>
					<option name="sale" value="0">
						Compro
					</option>
				</select>
				<FormField
					name="price"
					type="number"
					min="0"
					label="price"
					value={add.price}
					onChange={handleChange}
					autofocus={false}
				/>
				<FormField
					name="fileInput"
					type="file"
					onChange={handleChangeImage}
				/>

				<TagsAvailable
					type="checkbox"
					onChange={handleChangeTags}
					name="tags"
					tags={tagsAvailable}
					checked={tags}
					label={tags}
				/>

				<button
					className="btn btn-primary"
					type="submit"
					disabled={!add.name || !add.price || tags.length === 0}
				>
					Crear nuevo Anuncio
				</button>
			</form>
		</Layout>
	);
}

export default NewAdvertPage;
