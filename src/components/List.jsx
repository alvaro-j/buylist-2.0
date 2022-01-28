import React from "react";
import ListItem from "./ListItem";

import { DataContext } from "./DataProvider";

const List = () => {
	const [items, setItems] = React.useContext(DataContext);
	console.log(items);
	return (
		<ul>
			{items.map((item, index) => (
				<ListItem key={index} item={item} id={index} />
			))}
		</ul>
	);
};

export default List;
