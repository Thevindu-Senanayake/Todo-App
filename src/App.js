import { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import { FormControl, Input, InputLabel } from "@mui/material";

import db from "./firebase";
import {
	query,
	collection,
	onSnapshot,
	addDoc,
	serverTimestamp,
	orderBy,
} from "firebase/firestore";

import Todo from "./Todo";

import "./App.css";

function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");

	useEffect(() => {
		const data = query(collection(db, "todos"), orderBy("timestamp", "desc"));
		onSnapshot(data, (querySnapshot) => {
			setTodos(
				querySnapshot.docs.map((doc) => ({
					id: doc.id,
					todo: doc.data().todo,
				}))
			);
		});
	}, []);

	const addTodo = (e) => {
		e.preventDefault();
		addDoc(collection(db, "todos"), {
			todo: input,
			timestamp: serverTimestamp(),
		});
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
