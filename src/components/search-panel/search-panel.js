import React from 'react'
import ItemStatusFilter from '../item-status-filter/item-status-filter'
import './search-panel.css'

const SearchPanel=()=>{

    const searchText =  'Type here to search'
    const searchStyle = {
      fontSize:'20px'
    }
      return   (
        <div className="search-bar_wrapper">
        <input className="form-control search-input"
        style = {searchStyle} 
        placeholder={searchText}/>
        </div>

      
      )}

export default SearchPanel