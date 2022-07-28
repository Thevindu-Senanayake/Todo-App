import { useState } from "react";
import "./App.css";

function App() {
	const [todos, setTodos] = useState(["hehe", "shanoo"]);
	const [input, setInput] = useState("");

	const addTodo = (e) => {
		e.preventDefault();
		setTodos([...todos, input]);
		setInput("");
	};

	return (
		<div className="App">
			<h1 className="hedder">Hello</h1>
			<form>
				<input value={input} onChange={(e) => setInput(e.target.value)} />
				<button onClick={addTodo}>Add Todo</button>
			</form>

			<ul>
				{todos.map((todo) => (
					<li>{todo}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
