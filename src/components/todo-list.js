import React from 'react'

const TodoList = () =>{
    const items = ['Learn React', 'Build Awesome App','Learn Java']
    .map((element,index)=>{
      return <li key={index}>{element}</li>
    })
    return(
      <ul>
      {items}
    </ul>
    )
  }

  export default TodoList
  