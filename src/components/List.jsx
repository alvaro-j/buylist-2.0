import React from "react";
import ListItem from "./ListItem";

import { DataContext } from "./DataProvider";

const List = () => {
	const [todos, setTodos] = React.useContext(DataContext);
	console.log(todos);
	return (
		<ul>
			<ListItem />
			<ListItem />
			<ListItem />
		</ul>
	);
};

export default List;
