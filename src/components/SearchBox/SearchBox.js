import React from 'react';
import './SearchBox.css';

 const SearchBox = ({placeholder, SearchHandler}) => {
  return(
      <div>
         <input 
         className="search"
           type="search" 
           placeholder={placeholder} 
           onChange={SearchHandler} 
          />
      </div>
  )
} 

export default SearchBox;