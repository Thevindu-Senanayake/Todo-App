import React from "react";
import {
	Button,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from "@mui/material";
import { doc, deleteDoc } from "firebase/firestore";
import db from "./firebase";

import "./Todo.css";

const Todo = ({ todo }) => {
	return (
		<List className="todo_list">
			<ListItemAvatar />
			<ListItem>
				<ListItemText primary={todo.todo} secondary="dealine" />
			</ListItem>
			<Button
				onClick={(e) => {
					deleteDoc(doc(db, "todos", todo.id));
				}}
			>
				Delete
			</Button>
		</List>
	);
};

export default Todo;
