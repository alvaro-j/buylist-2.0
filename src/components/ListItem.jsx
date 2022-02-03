import React from "react";

const ListItem = ({ item, id, checkComplete }) => {
	const [edit, setEdit] = React.useState(false);
	const handleEdit = () => {
		setEdit(true);
	};

	if (edit) {
		return (
			<li>
				<input type="text" id={id} checked={item.complete} onChange={() => checkComplete(id)} />

				<button className="btn-yellow" disabled={item.complete} onClick={handleEdit}>
					Edit
				</button>
			</li>
		);
	} else {
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
	}
};

export default ListItem;
