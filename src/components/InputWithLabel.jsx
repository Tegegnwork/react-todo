import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types";
function InputWithLabel (props){
  const inputRef = useRef();
  useEffect (() => {
    inputRef.current.focus
  });
  return (
    <>
        <label htmlFor = 'todoTitle'>{props.children}</label>
       <input value = {props.todoTitle} 
    onChange = {props.handleTitleChange} 
    id='todoTitle' 
    type='text' 
    name='title' 
    ref={inputRef}/>
    </>
  )
}
InputWithLabel.propTypes = {
  children: PropTypes.node.isRequired,
  todoTitle: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
};
export default InputWithLabel;