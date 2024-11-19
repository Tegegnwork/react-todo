import React from "react";
function AddTodoForm({onAddTodo}) {
   function handleAddTodo (event){
    event.preventDefault();
    const todoTitle = event.target.elements.title.value;
    console.log(todoTitle);
    event.target.reset();
    onAddTodo(todoTitle);
  }
  
  return (
    <form onSubmit={handleAddTodo}>
      
      <label htmlFor="todoTitle">Title</label>
      <input id="todoTitle" type="text" name="title"/>

      <button type="submit">Add</button>
    </form>
  );
}
export default AddTodoForm;
