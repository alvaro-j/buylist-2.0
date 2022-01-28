import React from "react";
import ListItem from "./ListItem";

import { DataContext } from "./DataProvider";

const List = () => {
	const [itens, setItems] = React.useContext(DataContext);
	console.log(itens);
	return (
		<ul>
			{itens.map((item, index) => (
				<ListItem key={index} item={item} id={index} />
			))}
		</ul>
	);
};

export default List;
