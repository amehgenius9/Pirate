import React, { useState } from 'react';
import './SearchBar.Style.css'

const SearchBar = ({onSearch, className}) => {
  const [query, setQuery] = useState("");

  const handleInputChange = ({target: {value}}) => {
    setQuery(value);
    onSearch(value)
    
  }
  return (
    <div>
      <input 
      className={`search ${className}`}
      type='text'
      placeholder='Search Here'
      value={query}
      onChange={handleInputChange}
      />
    </div>
  )
}

export default SearchBar
