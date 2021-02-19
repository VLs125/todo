import React from 'react'
import AppHeader from '../app-header/app-header'
import ItemStatusFilter from '../item-status-filter/item-status-filter'
import SearchPanel from '../search-panel/search-panel'
import TodoList from '../todo-list/todo-list'

const App =()=>{
    const todoData = [
      {label:'First task',important:false, id:1},
      {label:'Second task',important:true,id:2},
      {label:'Third task',important:true, id:3}
    ]
    return( <div className="todo-app">
        <AppHeader todo={1} done={3}/>
        <div className="top-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
        </div>
        <TodoList
        onDeleted={(id)=> console.log(id)}
         todos = {todoData}/>
      </div>
      )}

      export default App