import React from "react";

import { DataContext } from "./DataProvider";

const Footer = () => {
	const value = React.useContext(DataContext)
	console.log(value);
	return (
		<div className="row">
			<label htmlFor="all">
				<input type="checkbox" name="all" id="all" />
				ALL
			</label>
			<p>You have {value[0].length} items to buy</p>
			<button id="delete">Delete</button>
		</div>
	);
};

export default Footer;
