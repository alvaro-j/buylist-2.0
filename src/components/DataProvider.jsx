import React from "react";

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
	const [itens, setItens] = React.useState([
		{ name: "chicken breast", complete: false },
		{ name: "coconut oil", complete: false },
		{ name: "brown rice", complete: true },
		{ name: "sweet potato", complete: true },
	]);

	return <DataContext.Provider value={[itens, setItens]}>{children}</DataContext.Provider>;
};
