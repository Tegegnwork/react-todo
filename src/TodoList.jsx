import React from "react";
const todoList = [
  { id: 1, title: "Complete assignment" },

  { id: 2, title: "work out" },

  { id: 3, title: "shopping" },
];

function TodoList() {
  return (
    <ul>
      {todoList.map(function (item) {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
}
export default TodoList;
