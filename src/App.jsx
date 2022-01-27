import React from "react";

const App = () => {
	return (
		<div>
			<h1>Buylist</h1>
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
          <button>Edit</button>
				</li>
			</ul>
		</div>
	);
};

export default App;
