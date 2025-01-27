
   
   import React, { useEffect, useState } from "react";
    import TodoList from "./TodoList";
    import AddTodoForm from "./AddTodoForm";
        function useSemiPersistentState (){
        const [todoList, setTodoList] = useState
        (JSON.parse (localStorage.getItem ('savedTodoList')) || []);
        
        
  useEffect(() => {
    localStorage.setItem ('savedTodoList',JSON.stringify(todoList))},[todoList]);
   return [todoList,setTodoList];
}
function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  
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
      
      <hr />
      <TodoList onRemoveTodo={removeTodo} todoList = {todoList} />
    </>
  );

}

export default App;
