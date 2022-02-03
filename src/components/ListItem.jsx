import React from "react";

const ListItem = ({ item, id, checkComplete }) => {
	const [edit, setEdit] = React.useState(false); 
	const handleEdit = () => {};
	return (
		<li>
			<label htmlFor={id} className={item.complete ? "active" : ""}>
				<input type="checkbox" id={id} checked={item.complete} onChange={() => checkComplete(id)} />
				{item.name}
			</label>
			<button className="btn-yellow" disabled={item.complete} onClick={handleEdit}>
				Edit
			</button>
		</li>
	);
};

export default ListItem;
