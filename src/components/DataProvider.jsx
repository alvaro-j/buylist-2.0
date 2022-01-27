import React from "react";

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
	const [todos, setTodos] = React.useState([
		{ name: "chicken breast", complete: false },
		{ name: "coconut oil", complete: false },
		{ name: "brown rice", complete: true },
	]);

	return <DataContext.Provider value={[todos, setTodos]}>{children}</DataContext.Provider>;
};
