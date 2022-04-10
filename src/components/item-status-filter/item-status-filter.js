import './item-status-filter.css'



const ItemStatusFilter = ({ onAllFilter, onActiveFilter, onDoneFilter }) => {
   
   return (
      <div className = 'button-group'>
         <button 
            className = 'btn btn-bdr btn-active btn-all'
            onClick = {onAllFilter}>
            All
         </button>
         <button 
            className = 'btn btn-bdr btn-outline-opts btn-doing'
            onClick = {onActiveFilter}>
            Active
         </button>
         {/* <button 
            className = 'btn btn-bdr btn-outline-opts btn-important'
            onClick = {onImportantFilter}>
            Important
         </button> */}
         <button 
            className = 'btn btn-bdr btn-outline-opts btn-done'
            onClick = {onDoneFilter}>
            Done
         </button>
      </div>
   )
}

export default ItemStatusFilter