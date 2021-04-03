import React, { useState } from 'react'
import './search-panel.css'

const SearchPanel = (props:any) => {

  const { onChangeInput,term } = props

  const searchText = 'Type here to search'
  const searchStyle = {
    fontSize: '20px'
  }

  return (
    <div className="search-bar_wrapper">
      <input className="form-control search-input"
        style={searchStyle}
        placeholder={searchText}
        value={term}
        onChange={onChangeInput} />
    </div>
  )
}

export default SearchPanel

