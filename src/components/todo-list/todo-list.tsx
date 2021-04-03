import React from 'react'
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css'


const TodoList = (props:any) => {
    const {todos,deleteTodo,setImportant,setCompleted,loading,error} = props

    const elements = todos.map((item:any) => {

    const {id,title,important,completed} = item;

    return (
        <li key ={id} className="list-group-item">
          <TodoListItem title={title}
                        onDeleted={deleteTodo}
                        id={id}
                        important={important}
                        completed={completed}
                        setImportant={setImportant}
                        setCompleted={setCompleted}/>
        </li>
    )
  })
    if (loading) {
        return <h1>Loading...</h1>
    };

    if (error) {
        return <h1>Error...</h1>;
    }
  return (
      <ul className="list-group todo-list">
        {elements}
      </ul>
  )
}

export default TodoList
