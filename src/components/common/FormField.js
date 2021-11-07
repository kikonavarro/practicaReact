import { useState, useEffect, useRef } from "react/cjs/react.development";

function FormField({ className, label, autofocus, ...props }) {
	const [focus, setFocus] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		// set focus
		if (autofocus) {
			ref.current.focus();
		}
	}, [autofocus]);

	return (
		<div>
			<label className="form-label">
				<span>{label}</span>
				<input
					className="form-control"
					autoComplete="off"
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					ref={ref}
					{...props}
				></input>
			</label>
		</div>
	);
}

export default FormField;
