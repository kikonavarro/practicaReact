const WindowConfirm = ({ onConfirm, onCancel }) => {
	return (
		<div className="windowConfirm">
			<span className="message">
				Are your sure you want to delete this advert
			</span>
			<button
				className="abortedButton"
				value="false"
				type="button"
				onClick={onCancel}
			>
				No
			</button>
			<button
				className="deleteButton"
				value="true"
				type="button"
				onClick={onConfirm}
			>
				Delete
			</button>
		</div>
	);
};

export default WindowConfirm;
