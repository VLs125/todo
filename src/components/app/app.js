import React, { Component } from 'react'
import AppHeader from '../app-header/app-header'
import ItemStatusFilter from '../item-status-filter/item-status-filter'
import SearchPanel from '../search-panel/search-panel'
import TodoList from '../todo-list/todo-list'

export default class App extends Component{
    state = {
    todoData : [
      {label:'First task',important:false, id:1},
      {label:'Second task',important:true,id:2},
      {label:'Third task',important:true, id:3}
    ]
  };

  deleteItem = (id) =>{
    this.setState(({todoData})=>{
      const idx = todoData.findIndex((el)=>el.id===id);

      const newArray = [
        ...todoData.slice(0, idx), 
        ...todoData.slice(idx + 1)
      ]

      return {
        todoData : newArray
      }
    })
  }

  render(){
    return( <div className="todo-app">
        <AppHeader todo={1} done={3}/>
        <div className="top-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
        </div>
        <TodoList
        onDeleted={this.deleteItem}
         todos = {this.state.todoData}/>
      </div>
      )}
    }