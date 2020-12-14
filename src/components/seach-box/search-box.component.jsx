import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({ placeholder, handleChange }) => (
  <input 
    className='search'
    type='search' 
    placeholder={placeholder}
    onChange={handleChange}
    // {/* () => console.log(this.state)  we can pass this in the setState as second argument, to take action after the state is set*/} 
  />
)