import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { FormControl, Input, InputLabel } from "@mui/material";
import Todo from "./Todo";
import firebase from "firebase";
// import db from "./firebase";

import "./App.css";

function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");

	// useEffect(() => {
	// 	db.collection("todos")
	// 		.orderBy("timestamp", "desc")
	// 		.onSnapshot((snapshot) => {
	// 			setTodos(snapshot.docs.map((doc) => doc.data().todo));
	// 		});
	// }, []);

	const addTodo = (e) => {
		e.preventDefault();
		setTodos([...todos, input]);
		setInput("");
	};

	return (
		<div className="App">
			<h1 className="hedder">Hello</h1>
			<form>
				<FormControl>
					<InputLabel>Write a Todo</InputLabel>
					<Input
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
				</FormControl>
				<Button
					disabled={!input}
					variant="contained"
					color="primary"
					onClick={addTodo}
					type="submit"
				>
					Add Todo
				</Button>
			</form>

			<ul>
				{todos.map((todo) => (
					<Todo todo={todo} />
				))}
			</ul>
		</div>
	);
}

export default App;
