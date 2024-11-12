import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
