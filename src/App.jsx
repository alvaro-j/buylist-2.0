import React from "react";

const App = () => {
	return (
		<div className="main">
			<h1>buy<span>list</span></h1>
			<form autoComplete="off">
				<input type="text" name="todos" id="todos" required placeholder="What needs to be done today Adonis?"></input>
				<button type="submit">Add</button>
			</form>

			<ul>
				<li>
					<label htmlFor="">
						<input type="checkbox" id="" />
						Chicken breast
					</label>
					<button className="btn-yellow">Edit</button>
				</li>
				<li>
					<label htmlFor="">
						<input type="checkbox" id="" />
						Coconut oil
					</label>
					<button className="btn-yellow">Edit</button>
				</li>
				<li>
					<label htmlFor="">
						<input type="checkbox" id="" />
						Protein powder
					</label>
					<button className="btn-yellow">Edit</button>
				</li>
			</ul>
			<div className="row">
				<label htmlFor="all">
					<input type="checkbox" name="all" id="all" />
					ALL
				</label>
				<p>You have 0 itens to buy</p>
				<button id="delete">Delete</button>
			</div>
		</div>
	);
};

export default App;
