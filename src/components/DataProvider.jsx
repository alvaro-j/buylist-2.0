import React from "react";

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
	const [items, setItems] = React.useState([]);

	React.useEffect(() => {
		localStorage.setItem("itemLocal", JSON.stringify(items))
	}, [items]);

	return <DataContext.Provider value={[items, setItems]}>{children}</DataContext.Provider>;
};
