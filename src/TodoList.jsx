import React from 'react'
const list = [ 

        { objectID: 1,
          title: "Complete assignment"
       
       },
   
         { objectID: 2,
           title: "work out"
   
       },
   
          { objectID: 3,
            title: "shopping"
   
       }
   ]
 
 function TodoList(){

   return (
     
        
      <ul>
         {list.map(function (item){
        return <li key = {item.objectID}>{item.title}</li>
         })}
      </ul>
      
      
      

   )
 }
 export default TodoList