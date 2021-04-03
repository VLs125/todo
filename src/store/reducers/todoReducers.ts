import {TodoAction, TodoActionTypes, TodoState} from "../../types/todo";

const initialState : TodoState = {
    todos:[] ,
    page:1,
    error:null,
    limit:10,
    loading:false,
    term: '',
    filter: 'active', //active,all,done
}

const findIdx = (state:TodoState,payload:number): number =>{
    const item = state.todos.find(({id})=> id === payload)
    // @ts-ignore
    return state.todos.indexOf(item)
}

export const todoReducer = (state:TodoState = initialState,action:TodoAction):TodoState=>{

    switch (action.type){
        case TodoActionTypes.FETCH_TODOS:
            return{
                ...state,
                loading:true
            }
        case TodoActionTypes.FETCH_TODOS_SUCCES:
            return{
                ...state,
                loading:false,
                todos:action.payload
            }

        case TodoActionTypes.FETCH_TODOS_ERROR:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case TodoActionTypes.SET_TODO_PAGE:
            return{
                ...state,
                loading:false,
                page:action.payload
            }
        case TodoActionTypes.TODO_ADD_ITEM:
            return {
                ...state,
                todos:[
                    ...state.todos,
                ]
            }
        case TodoActionTypes.TODO_DELETE_ITEM:
            const deleteElIdx = findIdx(state,action.payload);

            return {
                ...state,
                todos:[
                    ...state.todos.slice(0, deleteElIdx),
                    ...state.todos.slice(deleteElIdx + 1 )
                ]
            }
        case TodoActionTypes.SET_FILTER:
            return {
                ...state,
                filter:action.payload
            }
        case TodoActionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term:action.payload
            }

        case TodoActionTypes.SET_IMPORTANT:
            const importatedIdx = findIdx(state,action.payload)
            const importadedTodos = state.todos[importatedIdx]
            const returnedImportadedItem = {...importadedTodos,important:!importadedTodos.important}

            return {
                ...state,
                todos:[
                    ...state.todos.slice(0, importatedIdx),
                    returnedImportadedItem,
                    ...state.todos.slice(importatedIdx + 1 )
                ]
            }




        default:
            return state

    }
}