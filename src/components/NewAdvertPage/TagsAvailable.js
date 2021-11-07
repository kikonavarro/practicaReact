
const TagsAvailable = ({ tags, onChange, checked }) => {
	const handleChangeTags = (event) => {
		onChange(event);
	};

	return (
		<div>
			{tags.map((tag) => (
				<div className="form-check" key={tag}>
					<label className="form-check-label"> {tag}
						<input
							className="form-check-input"
							type="checkbox"
							name={tag}					
							onChange={handleChangeTags}
							checked={checked.includes(tag)}
							value={tag}
						/>
					</label>
				</div>
			))}
		</div>
	);
};

export default TagsAvailable;