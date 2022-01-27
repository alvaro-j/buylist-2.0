import React from "react";

const FormInput = () => {
	return (
		<form autoComplete="off">
			<input type="text" name="todos" id="todos" required placeholder="What needs to be done today Adonis?"></input>
			<button type="submit">Add</button>
		</form>
	);
};

export default FormInput;
