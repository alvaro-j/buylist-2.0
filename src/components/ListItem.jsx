import React from "react";

const ListItem = ({ item, id, checkComplete }) => {
	return (
		<li>
			<label htmlFor={id} className={item.complete ? "active" : ""}>
				<input type="checkbox" id={id} checked={item.complete} onChange={() => checkComplete(id)} />
				{item.name}
			</label>
			<button className="btn-yellow" disabled={item.complete}>Edit</button>
		</li>
	);
};

export default ListItem;
