import React from "react";
import TodoListItem from "./TodoListItem";
const todoList = [
  { id: 1, title: "Complete assignment" },

  { id: 2, title: "work out" },

  { id: 3, title: "shopping" },
];

function TodoList() {
  return (
    <ul>
      {todoList.map( todo => {
        return<TodoListItem key={todo.id} todo={todo}/>
      })}
    </ul>
  );
}
export default TodoList;
