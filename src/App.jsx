import React, { useEffect, useState } from "react"
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { BrowserRouter as Router, Route, NavLink, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import PropTypes from "prop-types";
import './App.css';




   function sortTodosAscending(objectA, ObjectB){
    if (objectA < ObjectB){
      return -1;
    } else if (objectA > ObjectB){
      return 1;
    } else{
      return 0;
    }
   }
   function sortTodosDescending(objectA, ObjectB){
    if (objectA < ObjectB){
      return 1;
    } else if (objectA > ObjectB){
      return -1;
    } else{
      return 0;
    }
   }

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [sortAsc, setSortAsc]    = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  

   useEffect(() => {
      const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: { Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}` },
      };

      const apiUrl = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`;
      console.log(apiUrl);

      try {
        const response = await fetch(apiUrl, options);
        if (!response.ok) {
          const message = `Error: ${response.status}`;
          throw new Error(message);
        }
        const data = await response.json();
        console.log('data:',data);
        const todos = data.records.map((record) => {
          const newTodo = {
          id: record.id,
          title: record.fields.title,
        };
          return newTodo;
        });
      const sortedTodo = todos.sort((objectA, ObjectB) => {
        if(sortAsc) {
          return sortTodosAscending (objectA.title,ObjectB.title);
        } else {
          return sortTodosDescending (objectA.title,ObjectB.title);
        }
      });
      const sortedTodos =sortTodos(todos);
        setTodoList(sortedTodos);
      
      } catch (error) {
        const savedTodoList = JSON.parse(localStorage.getItem('savedTodoList')) || [];
        setTodoList(savedTodoList);
      } 
      finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      console.log(todoList);
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = async (newTodo) => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        },
        body: JSON.stringify({
          fields: {
            title: newTodo.title,
          },
        }),
      };

      const apiUrl = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
      const response = await fetch(apiUrl, options);

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json()
      
     console.log(data);
      setTodoList((prevTodoList) => {
        const updatedTodoList = [...prevTodoList, { id: data.id, title: data.fields.title }];
        updatedTodoList.sort((a, b) => a.title.localeCompare (b.title));
        return updatedTodoList;  
      });
    } catch (error) {
      console.error('Error adding todo to Airtable:', error.message);
    }
  };
  const removeTodo = async (id) => {
  
    try {
      await fetch(`https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        },
      });
      setTodoList(todoList.filter((todo) => todo.id !== id));  
    } catch (error) {
      console.error('Error removing todo: ', error);
      setTodoList(filteredTodo);
    }
    function sortTodos(todos) {
      return todos.sort((objectA,ObjectB) => {
        if(sortAsc){
        return sortTodosAscending(objectA.title,ObjectB.title);
      } else {
        return sortTodosDescending(objectA.title,ObjectB.title);
      } 
    });
  };
   
   const handleSortToggleClick = () => {
        setSortState(prevState => !prevState);
        console.log('Sort toggled:', !sortState);
    };
    
  };
  return (
    <Router>
      <nav>
        <div>
            <NavLink to="/">Home page</NavLink>
          </div>
          <div>
            <NavLink to="/Landing">Landing page</NavLink>
          </div>
        </nav>
    <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <h1>Todo List</h1>
              
              <AddTodoForm onAddTodo={addTodo} />
              
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
              )}
            </>
          }
        />
        <Route path="/new" element={<h1>New Todo List</h1>} />
        <Route path="/home" element={<Home />} />
        <Route path="/Landing" element={<Landing />} />
      </Routes>
    </Router>
  );

  App.propTypes = {
  tods: PropTypes.arrayOf(
  PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  })
  ),isLoading:PropTypes.bool,
error:PropTypes.string

};

  };
export default App;
