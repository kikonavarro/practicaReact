const DeleteConfirm = ({ onConfirm, onCancel }) => {
	return (
		<div>
			<span className="alert alert-warning">
				¿Seguro que quieres borrarlo?
			</span>
			<button
				className="btn btn-primary"
				value="false"
				type="button"
				onClick={onCancel}
			>
				No
			</button>
			<button
				className="btn btn-danger"
				value="true"
				type="button"
				onClick={onConfirm}
			>
				Delete
			</button>
		</div>
	);
};

export default DeleteConfirm;
