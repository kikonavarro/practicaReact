import FormField from "../common/FormField";
import TagsAvailable from "../NewAdvertPage/TagsAvailable";
import { getAdvertsTags } from "../service";

import React from "react";

const FilterForm = ({ onSubmit }) => {
	const [tagsAvailable, setTagsAvailable] = React.useState([]);
	React.useEffect(() => {
		getAdvertsTags().then(setTagsAvailable);
	}, []);

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

	const [filterAdvert, setFilterAdvert] = React.useState({
		name: "",
		sale: false,
		buy: false,
		maxPrice: 0,
		minPrice: 0,
	});

	const handleChange = (event) => {
		setFilterAdvert((oldFilterAdvert) => ({
			...oldFilterAdvert,
			[event.target.name]:
				event.target.type === "checkbox"
					? event.target.checked
					: event.target.value,
		}));
	};

	const handleSubmit = (event) => {
		console.log(event);
		event.preventDefault();
		onSubmit(filterAdvert, tags);
	};

	return (
		<form onSubmit={handleSubmit}>
			<FormField
				name="advertName"
				type="text"
				label="name"
				value={filterAdvert.name}
				onChange={handleChange}
				autofocus={true}
			/>
			<FormField
				name="minPrice"
				type="number"
				label="min-price"
				min="0"
				value={filterAdvert.minPrice}
				onChange={handleChange}
				autofocus={false}
			/>

			<FormField
				name="maxPrice"
				label="max-price"
				type="number"
				min="0"
				value={filterAdvert.maxPrice}
				onChange={handleChange}
				autofocus={false}
			/>
			<TagsAvailable
				onChange={handleChangeTags}
				name="tags"
				tags={tagsAvailable}
				checked={tags}
			/>

			<input
				type="checkbox"
				name="sale"
				label="Sale"
				checked={filterAdvert.sale}
				onChange={handleChange}
			/>

			<input
				type="checkbox"
				name="buy"
				label="Buy"
				checked={filterAdvert.buy}
				onChange={handleChange}
			/>

			<button className="btn btn-primary" type="submit">
				Search
			</button>
		</form>
	);
};

export default FilterForm;
