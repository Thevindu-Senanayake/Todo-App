import React, { Fragment } from "react";
import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { doc, deleteDoc } from "firebase/firestore";
import db from "./firebase";

import "./Todo.css";

const Todo = ({ todo }) => {
	return (
		<Fragment>
			<List className="todo_list">
				<ListItemAvatar />
				<ListItem>
					<ListItemText primary={todo.todo} secondary="dealine" />
				</ListItem>
				<DeleteForeverIcon
					onClick={(e) => {
						deleteDoc(doc(db, "todos", todo.id));
					}}
				/>
			</List>
		</Fragment>
	);
};

export default Todo;
