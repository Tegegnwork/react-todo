import React, { useEffect, useRef } from "react"
function InputWithLabel (props){
  const inputRef = useRef();
  console.log(inputRef.current);
  useEffect (() => {
    inputRef.current.focus
  });
  return (
    <>
        <label htmlFor = 'todoTitle '>{props.children}</label>
       <input value = {props.todoTitle} 
    onChange = {props.handleTitleChange} 
    id='todoTitle' 
    type='text' 
    name='title' 
    ref={inputRef}/>
    </>
  )
}
export default InputWithLabel;