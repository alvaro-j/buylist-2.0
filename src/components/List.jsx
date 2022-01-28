import React from "react";
import ListItem from "./ListItem";

import { DataContext } from "./DataProvider";

const List = () => {
	const [items, setItems] = React.useContext(DataContext);

	const switchComplete = (id) => {
		const newItems = [...items];
		newItems.forEach((item, index) => {
			if (index === id) {
				item.complete = !item.complete;
			}
			setItems(newItems);
		});
	};
	return (
		<ul>
			{items.map((item, index) => (
				<ListItem key={index} item={item} id={index} checkComplete={switchComplete} />
			))}
		</ul>
	);
};

export default List;
