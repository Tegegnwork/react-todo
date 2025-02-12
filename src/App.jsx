
   
   import React, { useEffect, useState } from "react";

    import TodoList from "./components/TodoList";
    import AddTodoForm from "./components/AddTodoForm";
  import{BrowserRouter, Routes, Route} from "react-router-dom";

    import TodoList from "./TodoList";
    import AddTodoForm from "./AddTodoForm";
import{BrowserRouter, Routes, Route} from "react-router-dom";


  const App = () => {
    console.log(import.meta.env)
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
       const fetchData = async() => {
        const options = {
         method: 'GET',
         headers: { Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`},
       };
             
             
             const apiUrl = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
             console.log(apiUrl);
             try {
              const response = await fetch( apiUrl, options);
              if (!response.ok){
                const message = `Error: ${response.status}`;
                throw new Error(message)
              }
              const data = await response.json();
              console.log(data);
              const todos = data.records.map((record) => {
                const newTodo = {
                  id: record.id,
                title: record.fields.title
              
                }
                return newTodo
                  
                   
                
                });
              console.log( todos);
              setTodoList(todos);
              setIsLoading(false);
             } catch(error){
             console.log(error.message);
             setIsLoading(false);
             }
            };
          
       
      useEffect(() => {
        fetchData();
       },[]);
       useEffect(() => {
        if (!isLoading) {
          console.log(todoList)
    localStorage.setItem ('savedTodoList',JSON.stringify(todoList))}
  },[todoList, isLoading]); 
    function addTodo  (newTodo)  { 

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

  };
   
  return (
  <BrowserRouter>
    <Routes>
     <Route path="/" element={ 
      <>
    <h1>Todo List</h1>
      <AddTodoForm onAddTodo = {addTodo} />
      { isLoading ?(
      <p>Loading...</p>):
      (<TodoList onRemoveTodo={removeTodo} todoList = {todoList} />)}
    </>
   }></Route>
   <Route path="/new" element={<h1>New Todo List</h1>}/>
      </Routes>
     </BrowserRouter>

  );


}

export default App;
