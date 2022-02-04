import React from "react";

import { DataContext } from "./DataProvider";

const Footer = () => {
	const [items, setItems] = React.useContext(DataContext);
	const [checkAll, setCheckAll] = React.useState(false);
	const handleCheckAll = () => {
		const newItems = [...items];
		newItems.forEach((item) => {
			item.complete = !checkAll;
		});
		setItems(newItems);
		setCheckAll(!checkAll);
	};
	const handleDeleteItem = () => {
		const newItems = items.filter((item) => {
			return item.complete === false;
		});
		setItems(newItems);
		setCheckAll(false);
	};
	return (
		<>
			{items.length === 0 ? (
				<h2>You have nothing to buy!</h2>
			) : (
				<div className="row">
					<label htmlFor="all">
						<input type="checkbox" name="all" id="all" onClick={handleCheckAll} checked={checkAll} />
						ALL
					</label>
					<p>You have {items.length} items to buy</p>
					<button id="delete" onClick={handleDeleteItem}>
						Delete
					</button>
				</div>
			)}
		</>
	);
};

export default Footer;
