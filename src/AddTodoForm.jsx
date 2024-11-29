import React, { useState } from "react";

function AddTodoForm({onAddTodo}) {
   const [todoTitle, setTodoTitle] = useState("");
  const handleTitleChange = (event) => {
   const newTodoTitle =event.target.value;
    setTodoTitle(newTodoTitle);
    
  };
   function handleAddTodo (event) {
    event.preventDefault();
  
      const newTodo = {
      title: todoTitle, id: Date.now()
    };
    onAddTodo (newTodo);
    setTodoTitle("");
  
  
  };
  return (
    <form onSubmit = {handleAddTodo} >
      
      <label htmlFor = "todoTitle" >Title:</label>
      <input value = {todoTitle} onChange = {handleTitleChange}  id="todoTitle" type="text" name="title"/>

      <button type = "submit" > Add Todo</button>
    </form>
  );
}
export default AddTodoForm;
