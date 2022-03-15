import React from "react";

const ListItem = ({ item, id, checkComplete, handleEditItems }) => {
	const [edit, setEdit] = React.useState(false);
	const [editValue, setEditValue] = React.useState(item.name);
	const handleEdit = () => {
		setEdit(true);
	};
	const handleSave = () => {
		setEdit(false);
		if (editValue) {
			handleEditItems(editValue, id);
		} else {
			setEditValue(item.name);
		}
	};

	if (edit) {
		return (
			<li>
				<input
					type="text"
					id="editValue"
					value={editValue}
					name="editValue"
					onChange={(e) => setEditValue(e.target.value.toLocaleLowerCase())}
				/>

				<button className="btn-yellow" onClick={() => handleSave(id)}>
					Save
				</button>
			</li>
		);
	} else {
		return (
			<li>
				<label htmlFor={id} className={item.complete ? "active" : ""}>
					<input
						type="checkbox"
						id={id}
						checked={item.complete}
						onChange={() => checkComplete(id)}
					/>
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
