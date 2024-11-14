  import React from 'react';

const todoList = [ 

     { id: 1,
       title: "Complete assignment"
    
    },

      { id: 2,
        title: "work out"

    },

       { id: 3,
         title: "shopping"

    }
];

function App() {
    return (
    
  <div>
      <h1>Todo List</h1>
  
      <ul>
      {todoList.map(function (item){
        return <li key = {item.objectID}>{item.title}</li>
      })}
      </ul>

   </div> 
      );
}

export default App;
