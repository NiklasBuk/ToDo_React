import React from 'react'

import './todo-list-item.css'



const ToDoListItem = ( { label, onDeleted, onToggleImportant, onToggleDone, important, done } ) => {

   let classNames = 'todo-list-item'
   
   if (done) {
      classNames += ' done'
   }
   
   if (important) {
      classNames += ' important'
   }
   
   return (
      <div className = 'todo-list-item-full'>
         <button 
            className = 'btn btn-outline-success btn-exclamation'
            onClick = { onToggleImportant }>
            <i 
               className = 'fa fa-exclamation'></i>
         </button>
         
         <div className = { classNames }>
            <span 
               className = 'todo-list-item-label'
               onClick = { onToggleDone }>
                  { label } 
            </span>
         </div>
      
         <button 
            className = 'btn btn-outline-success btn-trash'
            onClick = { onDeleted }>
            <i 
               className = 'fa fa-trash-o'></i>
         </button>
      </div>
   )
}

export default ToDoListItem