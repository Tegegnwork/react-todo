  import React from 'react';

const List = [ 

     { objectID: 1,
       title: "Complete assignment"
    
    },

      { objectID: 2,
        title: "work out"

    },

       { objectID: 3,
         title: "shopping"

    }
];

function App() {
    return (
    
  <div>
      <h1>Todo List</h1>
  
      <ul>
      {List.map(function (item){
        return <li key = {item.objectID}>{item.title}</li>
      })}
      </ul>

   </div> 
      );
}

export default App;
