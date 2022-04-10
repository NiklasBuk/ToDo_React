import './search-panel.css'



const SearchPanel = ({onChange}) => {

   return (
      <input 
         className = "search-panel" 
         placeholder = 'Type to search...'
         onChange={onChange}
      />
   )
}

export default SearchPanel