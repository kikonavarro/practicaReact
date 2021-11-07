
const TagsAvailable = ({ tags, onChange, checked }) => {
	const handleChangeTags = (event) => {
		onChange(event);
	};

	return (
		<div >
			{tags.map((tag) => (
				<div key={tag}>
					<label> {tag}
						<input
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