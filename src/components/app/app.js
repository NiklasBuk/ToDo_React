import React, { useState, useEffect } from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ToDoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'
import ItemAddForm from '../item-add-form'
import Loader from '../loader/loader'

import './app.css'

function App () {

   const [itemId, setItemId] = useState(0)
   const [filter, setFilter] = useState('')
   const [loading, setLoading] = useState(true)
   const [todoData, setTodoData] = useState([])
   // const [todoData, setTodoData] = useState([
   //    createTodoItem('Drink Coffee'),
   //    createTodoItem('Make Awesome App'),
   //    createTodoItem('Have a Lunch'),
   // ])

   // useEffect(() => {
   //    fetch('./todos.json')
   //       .then(response => response.json())
   //       .then(todoData => { 
   //          setTimeout(() => {
   //             setTodoData(todoData)
   //             setLoading(false)
   //          }, 1500)
   //       })
   // }, [])

   function createTodoItem(label) {
      return {
         label,
         important: false,
         done: false,
         id: () => setItemId(itemId + 1)
      }
   }

   function addItem (label) {
      const newItem = createTodoItem(label)
      setTodoData(todoData.concat(newItem))
   }

   function deleteItem(id) {
      setTodoData(todoData.filter(todo => todo.id !== id))
   }

   function onToggleDone(id) {
      setTodoData(
         todoData.map(todo => {
            if (todo.id === id) {
               todo.done = !todo.done
            }  
            return todo
         })
      )
   }

   function onToggleImportant(id) {
      setTodoData(
         todoData.map(todo => {
            if (todo.id === id) {
               todo.important = !todo.important
            }  
            return todo
         })
      )
   }

   function searchHandler(event) {
      setFilter(event.target.value.toLowerCase())
   }

   function searchFilter(filter) {
      return filter
         ? todoData.filter(i => i.label.toLowerCase().includes(filter))
         : todoData
   } 

   function onAllFilter() {
      const allBtn = document.querySelector('.btn-all')
      allBtn.click(setTodoData(todoData))
   }

   function onActiveFilter() {
      const activeBtn = document.querySelector('.btn-doing')
      activeBtn.classList.toggle('btn-active')
      activeBtn.click(setTodoData(todoData.filter(i => i.done === false)))
   }

   function onDoneFilter() {
      const doneBtn = document.querySelector('.btn-done')
      doneBtn.click(setTodoData(todoData.filter(i => i.done === true)))
   }

   // function onImportantFilter() {
   //    const importantBtn = document.querySelector('.btn-important')

   // }

   const filteredItems = searchFilter(filter)

   const doneCount = todoData.filter((el) => el.done).length
   const todoCount = todoData.length - doneCount

   return (
      <div className = 'wrapper'>
         <div className = 'container'>
            <AppHeader toDo = { todoCount } done = { doneCount }/>
            <div className = 'search-filter'>
               <SearchPanel onChange={searchHandler}/>
               <ItemStatusFilter 
                  onAllFilter = {onAllFilter}
                  onActiveFilter = {onActiveFilter}
                  onDoneFilter = {onDoneFilter}
               />
            </div>
            {loading && <Loader />}
            {todoData.length 
            ? <ToDoList 
               todos = {filteredItems}
               onDeleted = { deleteItem } 
               onToggleImportant = { onToggleImportant }
               onToggleDone = { onToggleDone } 
            />
            : (loading 
               ? null 
               : <p className = 'notodo'>No todos!</p>)
            }
            <ItemAddForm onItemAdded = { addItem } />
         </div>
      </div>
   )
}

export default App