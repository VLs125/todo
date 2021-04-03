import React from 'react'
import './app.css'
import TodoListContainer from "../todo-list/todo-list-container";
import ItemStatusFilterContainer from "../item-status-filter/item-status-filter-container";
import SearchPanelContainer from "../search-panel/search-panel-container";
import AddElementsFormContainer from "../add-elements-form/add-elements-form-container";
import AppHeaderContainer from "../app-header/app-header-container";


const App: React.FunctionComponent = () => {

    return (
        <div className="todo-app">
            <AppHeaderContainer/>
            <div className="top-panel d-flex">
                <SearchPanelContainer/>
                <ItemStatusFilterContainer/>
            </div>
            <TodoListContainer/>
            <AddElementsFormContainer/>
        </div>


    )
}
export default App

