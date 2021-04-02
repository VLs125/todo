import {TodoAction, TodoActionTypes, TodoState} from "../../types/todo";

const initialState : TodoState = {
    todos:[],
    page:1,
    error:null,
    limit:10,
    loading:false,
    term: '',
    filter: 'active', //active,all,done
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
                    action.payload

                ]
            }
        case TodoActionTypes.TODO_DELETE_ITEM:
            return {
                ...state,
                todos:[
                    ...state.todos.slice(0,action.payload),
                    ...state.todos.slice(action.payload,+1)


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


        default:
            return state

    }
}