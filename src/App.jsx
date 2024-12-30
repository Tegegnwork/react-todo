   
   import React, { useEffect, useState } from "react";
    import TodoList from "./TodoList";
    import AddTodoForm from "./AddTodoForm";
        function App() {
   const [todoList, setTodoList] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        new Promise((resolve , reject) => {
          const savedTodoList = JSON.parse(localStorage.getItem ('savedTodoList'));
          setTimeout(() => {
            const object = {
              data: {
                todoList : savedTodoList,
              },
            };
           resolve(object);
          },2000);
        }).then((result) => {
          setTodoList(result.data.todoList);
          setIsLoading(false);
        });
       },[]);
       useEffect(() => {
        if (!isLoading) {
    localStorage.setItem ('savedTodoList',JSON.stringify(todoList))}
  },[todoList, isLoading]); 
    function addTodo  (newTodo)  { 
      setTodoList([...todoList,newTodo]);
  };
  function removeTodo (id){
    const filtertodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(filtertodoList);
  }
   
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo = {addTodo} />
      { isLoading ?
      (<p>Loading...</p>):
      (<TodoList onRemoveTodo={removeTodo} todoList = {todoList} />)}
    </>
  );
}

export default App;
