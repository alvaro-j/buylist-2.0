import React from "react";

const ListItem = ({item, id}) => {
	return (
		<li>
			<label htmlFor={id}>
				<input type="checkbox" id={id} />
				{item.name}
			</label>
			<button className="btn-yellow">Edit</button>
		</li>
	);
};

export default ListItem;
