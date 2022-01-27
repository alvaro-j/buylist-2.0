import React from "react";

const FormInput = () => {
	return (
		<form autoComplete="off">
			<input type="text" name="todos" id="todos" required placeholder="Which items would you like to buy?"></input>
			<button type="submit">Add</button>
		</form>
	);
};

export default FormInput;
