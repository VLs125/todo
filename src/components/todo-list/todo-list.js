import React from 'react'
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css'

const TodoList = (props) => {
 const   { todos,error,loading} = props;



  const elements = todos.map((item) => {
    const {id,title} = item;
    const {onDeleted} = props;

    return (
        <li key ={id} className="list-group-item">
          <TodoListItem title={title}
                        onDeleted={onDeleted}
                        id={id}/>
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


// const TodoList = ({ todos,onDeleted,onToggleDone,onToggleImportant }) => {
//
//
//
//   const elements = todos.map((item) => {
//     const {id, ...itemProps} = item;
//     return (
//       <li key ={item.id} className="list-group-item">
//         <TodoListItem {...itemProps}
//         onDeleted={()=>onDeleted(id)}
//         onToggleImportant={()=>onToggleImportant(id)}
//         onToggleDone={()=>onToggleDone(id)}/>
//       </li>
//     )
//   })
//   return (
//     <ul className="list-group todo-list">
//       {elements}
//     </ul>
//   )
// }
//
// export default TodoList
