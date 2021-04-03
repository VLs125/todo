import React, {useEffect} from 'react'
import AddElementsForm from '../add-elements-form/add-elements-form'
import AppHeader from '../app-header/app-header'
import ItemStatusFilter from '../item-status-filter/item-status-filter'
import SearchPanel from '../search-panel/search-panel'
import TodoList from '../todo-list/todo-list'
import './app.css'
import {useTypedSelector} from "../../ hooks/useTypedSelector";
import {useActions} from "../../ hooks/useActions";

const App: React.FunctionComponent = () => {
    const {todos, page, error, limit, loading, term, filter} = useTypedSelector(state => state.todos);

    const {fetchTodos, setTodoPage, deleteTodo, setImportant, setCompleted} = useActions();

    useEffect(() => {
        fetchTodos(page, limit);
    }, [page]);

    const maxId = todos.length - 1;

    return (<div className="todo-app">
            <AppHeader todo={2} complete={3}/>
            <div className="top-panel d-flex">
                <SearchPanel onSearchChange={'onSearchChange'}/>

                <ItemStatusFilter filter={filter}
                                  onFilterChange={'onFilterChange'}/>
            </div>

            <TodoList
                loading={loading}
                error={error}
                todos={todos}
                onDeleted={deleteTodo}
                setImportant={setImportant}
                setCompleted={setCompleted}/>
            <AddElementsForm addItem={'addItem'} />

        </div>




    )
}
// @ts-ignore
export default App

//
//  const createTodoItem= (label) => {
//
//    return {
//      label,
//      important: false,
//      completed: false,
//      id: this.maxId++
//
//    }
//
//  }

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
//       return items.filter((item) => !item.completed)
//     case 'completed':
//       return items.filter((item) => item.completed);
//     default:
//       return items;
//
//   }
// }


// const { todoData, term, filter } = this.state
// const visibleItems = this.filter(this.searchItem(todoData, term), filter)
// const doneCount = todoData
//   .filter((el) => el.completed).length;

//  const onToggleDone = (id) => {
//    this.setState(({ todoData }) => {
//      return {
//        todoData: this.toggleProperty(todoData, id, "completed")
//      }
//    })
//
//  }

//    const todoCount = todoData.length - doneCount
//  if (loading) {
//    return <h1>Loading...</h1>
//  };
//
//  if (error) {
//    return <h1>Error...</h1>;
//  }
//
//    return (<div className="todo-app">
//      <AppHeader todo={todoCount} completed={doneCount} />
//      <div className="top-panel d-flex">
//        <SearchPanel onSearchChange={onSearchChange} />
//        <ItemStatusFilter filter={filter}
//          onFilterChange={onFilterChange} />
//      </div>
//      <TodoList
//        onToggleDone={onToggleDone}
//        onToggleImportant={onToggleImportant}
//        onDeleted={deleteItem}
//        todos={visibleItems} />
//      <AddElementsForm addItem={addItem} />
//    </div>
//    )
// }