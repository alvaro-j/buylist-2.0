import React from "react";

import { DataContext } from "./DataProvider";

const Footer = () => {
	const [items, setItems] = React.useContext(DataContext);
	const handleDelete = () => {
		setItems([]);
	};
	const [checkAll, setCheckAll] = React.useState(false);
	const handleCheckAll = () => {
		const newItems = [...items];
		newItems.forEach((item) => {
			item.complete = !checkAll;
		});
		setItems(newItems);
		setCheckAll(!checkAll);
	};
	return (
		<div className="row">
			<label htmlFor="all">
				<input type="checkbox" name="all" id="all" onClick={handleCheckAll} />
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
