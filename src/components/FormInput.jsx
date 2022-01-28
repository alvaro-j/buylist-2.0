import React from "react";
import { DataContext } from "./DataProvider";

const FormInput = () => {
	const [items, setItems] = React.useContext(DataContext);
	const [itemName, setItemName] = React.useState("");

	const addItem = (e) => {
		e.preventDefault();
		setItems([...items, {name: itemName, complete: false }])
		setItemName("");
	};
	return (
		<form autoComplete="off" onSubmit={addItem}>
			<input type="text" name="items" id="items" required placeholder="Which items would you like to buy?" value={itemName} onChange={(e) => setItemName(e.target.value.toLocaleLowerCase())}></input>
			<button type="submit">Add</button>
		</form>
	);
};

export default FormInput;
