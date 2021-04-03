import axios from "axios"
import {Dispatch} from "redux"
import {TodoAction, TodoActionTypes} from "../../types/todo"
import {Todos} from '../../types/todo';

export const fetchTodos = (page = 1, limit = 10) => {

    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS});

            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })

            dispatch({
                type: TodoActionTypes.FETCH_TODOS_SUCCES,
                payload: response.data
            });

        } catch (e) {

            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Error'
            })

        }
    }
}

export function deleteTodo(id: number): TodoAction {
    return {type: TodoActionTypes.TODO_DELETE_ITEM, payload: id}
}

export function addTodo(todo: string): TodoAction {
    return {
        type: TodoActionTypes.TODO_ADD_ITEM, payload: todo
    }
}
export function setImportant(id: number): TodoAction {
    return {type: TodoActionTypes.SET_IMPORTANT, payload: id}
}

export function setCompleted(id: number): TodoAction {
    return {type: TodoActionTypes.SET_COMPLETED, payload: id}
}

export function setFilter(filter: string): TodoAction {
    return {type: TodoActionTypes.SET_FILTER, payload: filter}
}

export function setSearchTerm(term: string): TodoAction {
    return {type: TodoActionTypes.SET_SEARCH_TERM, payload: term}
}

export function setTodoPage(page: number): TodoAction {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}
