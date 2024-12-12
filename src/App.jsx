   
   // eslint-disable-next-line no-unused-vars
   import React, { useEffect, useState } from "react";
    import TodoList from "./TodoList";
    import AddTodoForm from "./AddTodoForm";
        function useSemiPersistentState (){
        const [todoList, setTodoList] = useState(() => {
        const savedTodoList = localStorage.getItem ('savedTodoList');
            return  savedTodoList ? JSON.parse (savedTodoList) : [];
           });
  useEffect(() => {
    localStorage.setItem ('savedTodoList',JSON.stringify(todoList))},[todoList]);
   return [todoList,setTodoList];
}
function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  
  function addTodo  (newTodo)  { 
      setTodoList([...todoList,newTodo]);
  };
   
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo = {addTodo} />
      
      <hr />
      <TodoList todoList = {todoList} />
    </>
  );
}

export default App;
