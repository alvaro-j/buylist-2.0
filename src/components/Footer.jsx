import React from "react";

import { DataContext } from "./DataProvider";

const Footer = () => {
	const [items, setItems] = React.useContext(DataContext);
	const handleDelete = () => {
		setItems([]);
	};
	console.log(items);
	return (
		<div className="row">
			<label htmlFor="all">
				<input type="checkbox" name="all" id="all" />
				ALL
			</label>
			<p>You have {items.length} items to buy</p>
			<button id="delete" onClick={handleDelete}>
				Delete
			</button>
		</div>
	);
};

export default Footer;
