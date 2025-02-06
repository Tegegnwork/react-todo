import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import PropTypes from "prop-types";
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
    <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange} >Title:</InputWithLabel> 

      <button type = "submit" > Add Todo</button>
    </form>
  );
}
AddTodoForm.propTypes = {
  onAddTodo:PropTypes.func.isRequired,
};
export default AddTodoForm;
