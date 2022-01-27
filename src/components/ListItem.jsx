import React from "react";

const ListItem = () => {
	return (
		<li>
			<label htmlFor="">
				<input type="checkbox" id="" />
				Chicken breast
			</label>
			<button className="btn-yellow">Edit</button>
		</li>
	);
};

export default ListItem;
