import React from 'react';
import './app-header.css';

const AppHeader = ({todo,complete})=>{
    return(
      <div className="app-header d-flex">
        <h1>Simple ToDo</h1>
        <h2>{todo} more to do and {complete} done</h2>
      </div>
      
    )
  }

  export default AppHeader
