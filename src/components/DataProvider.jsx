import React from "react";

export const DataContext = React.createContext(); // this simple creates a context

export const DataProvider = ({ children }) => {
	// this is used to hold the information
	const [items, setItems] = React.useState([]);
	React.useEffect(() => {
		const itemLocal = JSON.parse(localStorage.getItem("itemLocal"));
		if (itemLocal) setItems(itemLocal);
	}, []);

	React.useEffect(() => {
		localStorage.setItem("itemLocal", JSON.stringify(items));
	}, [items]);

	return <DataContext.Provider value={[items, setItems]}>{children}</DataContext.Provider>;
	//this 👆 is to pass down the information from the DataProvider to the children(components)
};
