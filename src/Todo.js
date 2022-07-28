import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

import "./Todo.css";

const Todo = ({ todo }) => {
	return (
		<List className="todo_list">
			<ListItem>
				<ListItemText primary={todo} secondary="dealine" />
			</ListItem>
		</List>
	);
};

export default Todo;
