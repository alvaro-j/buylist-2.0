import React from "react";
import Footer from "./components/Footer";
import FormInput from "./components/FormInput";
import List from "./components/List";
import { DataProvider } from "./components/DataProvider";

const App = () => {
	return (
		<DataProvider>
			<div className="main">
				<h1>
					buy<span>list</span>
				</h1>
				<FormInput />
				<List />
				<Footer />
			</div>
		</DataProvider>
	);
};

export default App;
