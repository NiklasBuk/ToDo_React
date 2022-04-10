import React from "react"

import './loader.css'



function Loader() {
   return (
      <div className='loader-container'>
         <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>
   )
}

export default Loader