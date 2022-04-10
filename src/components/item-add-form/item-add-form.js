import { useState } from 'react'

import './item-add-form.css'



const ItemAddForm = ({onItemAdded}) => {

   const [label, setLabel] = useState('')

   const onLabelChange = (e) => {
      setLabel(e.target.value)
   }

   const onSubmit = (e) => {
      e.preventDefault()
      onItemAdded(label)
      setLabel('')
   }

   return (

      <form className = 'add-form'
            onSubmit = {onSubmit}>
         <input 
            className = 'form-control'
            placeholder = 'Type your new task' 
            onChange = {onLabelChange}
            value = {label}
            />
         <button
            className = 'btn add-btn'>
               Add
         </button>
      </form>
   )
}

export default ItemAddForm