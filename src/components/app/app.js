import React from 'react'
import AddElementsForm from '../add-elements-form/add-elements-form'
import AppHeader from '../app-header/app-header'
import ItemStatusFilter from '../item-status-filter/item-status-filter'
import SearchPanel from '../search-panel/search-panel'
import TodoList from '../todo-list/todo-list'
import './app.css'
import {useTypedSelector} from "../../ hooks/useTypedSelector";

const App = () => {
  const  {todos,page,error,limit,loading,term,filter } = useTypedSelector(state=>state.todos);
  const maxId = 100;

 //  state = {
 //    todoData: [
 //      this.createTodoItem("first item"),
 //      this.createTodoItem("second item"),
 //      this.createTodoItem("third item")
 //    ],
 //    term: '',
 //    filter: 'active' //active,all,done
 //  };
 //
 //  const createTodoItem= (label) => {
 //
 //    return {
 //      label,
 //      important: false,
 //      done: false,
 //      id: this.maxId++
 //
 //    }
 //
 //  }
 //
 //
 //  const  deleteItem = (id) => {
 //    this.setState(({ todoData }) => {
 //      const idx = todoData.findIndex((el) => el.id === id);
 //
 //      const newArray = [
 //        ...todoData.slice(0, idx),  // create new array without deleted el
 //        ...todoData.slice(idx + 1)
 //      ]
 //
 //      return {
 //        todoData: newArray
 //      }
 //    })
 //  }
 //
 //  const addItem = (label) => {
 //    const newItem = this.createTodoItem(label)
 //
 //    this.setState(({ todoData }) => {
 //
 //      const newArr = [
 //        ...todoData,
 //        newItem
 //      ]
 //      return {
 //        todoData: newArr
 //      }
 //
 //    })
 //
 //  }
 //
 // const toggleProperty = (arr, id, propName) => {
 //
 //    const idx = arr.findIndex((el) => el.id === id);
 //
 //    const oldItem = arr[idx];
 //    const newItem = { ...oldItem, [propName]: !oldItem[propName] }
 //
 //    return [
 //      ...arr.slice(0, idx),
 //      newItem,
 //      ...arr.slice(idx + 1)
 //    ]
 //
 //  }
 //
 //  const onToggleImportant = (id) => {
 //    this.setState(({ todoData }) => {
 //      return {
 //        todoData: this.toggleProperty(todoData, id, "important")
 //      }
 //
 //
 //    })
 //
 //  }
 //  const onToggleDone = (id) => {
 //    this.setState(({ todoData }) => {
 //      return {
 //        todoData: this.toggleProperty(todoData, id, "done")
 //      }
 //    })
 //
 //  }
 //  const searchItem = (items, term) => {
 //    if (term === 0) {
 //      return items;
 //    }
 //    return items.filter((item) => {
 //      return item.label
 //        .toLowerCase()
 //        .indexOf(term.toLowerCase()) > -1;
 //    })
 //  }
 //  const onSearchChange = (term) => {
 //    this.setState({ term });
 //  }
 //  const onFilterChange = (filter) => {
 //    this.setState({ filter });
 //  }
  //
  // const filter = (items, filter) => {
  //   switch (filter) {
  //     case 'all':
  //       return items;
  //     case 'active':
  //       return items.filter((item) => !item.done)
  //     case 'done':
  //       return items.filter((item) => item.done);
  //     default:
  //       return items;
  //
  //   }
  // }


    // const { todoData, term, filter } = this.state
    const visibleItems = this.filter(this.searchItem(todoData, term), filter)
    const doneCount = todoData
      .filter((el) => el.done).length;

    const todoCount = todoData.length - doneCount

    return (<div className="todo-app">
      <AppHeader todo={todoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel onSearchChange={this.onSearchChange} />
        <ItemStatusFilter filter={filter}
          onFilterChange={this.onFilterChange} />
      </div>
      <TodoList
        onToggleDone={this.onToggleDone}
        onToggleImportant={this.onToggleImportant}
        onDeleted={this.deleteItem}
        todos={visibleItems} />
      <AddElementsForm addItem={this.addItem} />
    </div>
    )
 }

 export default App
