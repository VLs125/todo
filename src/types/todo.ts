export interface TodoState {
    todos:Todos[];
    loading:boolean;
    error:null | string;
    page: number;
    limit : number;
    term: string,
    filter: string,

}

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCES='FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE='SET_TODO_PAGE',
    SET_FILTER = 'SET_FILTER',
    SET_COMPLETED = 'SET_COMPLETED',
    SET_SEARCH_TERM = 'SET_SEARCH_TERM',
    SET_IMPORTANT='SET_IMPORTANT',
    TODO_DELETE_ITEM='TODO_DELETE_ITEM',
    TODO_ADD_ITEM ='TODO_ADD_ITEM'
}

interface TodoSetFilter {
    type:TodoActionTypes.SET_FILTER;
    payload:string,
}
interface TodoSetImportant {
    type:TodoActionTypes.SET_IMPORTANT;
    payload:number,
}
interface TodoSetSearchTerm {
    type:TodoActionTypes.SET_SEARCH_TERM;
    payload:string,
}
interface TodoSetCompleted {
    type:TodoActionTypes.SET_COMPLETED;
    payload:number;

}
type Todos = {
    userId:number,
    id:number,
    title:string,
    completed:boolean,
    important:boolean,
}

interface FetchTodoAction {
    type:TodoActionTypes.FETCH_TODOS;
}
interface FetchTodoActionSucces {
    type:TodoActionTypes.FETCH_TODOS_SUCCES;
    payload:[]
}
interface FetchTodoActionError {
    type:TodoActionTypes.FETCH_TODOS_ERROR;
    payload:null | string
}
interface SetTodoPage {
    type:TodoActionTypes.SET_TODO_PAGE;
    payload:number;

}
interface TodoDeleteItem {
    type:TodoActionTypes.TODO_DELETE_ITEM;
    payload:number;

}

interface TodoAddItem {
    type:TodoActionTypes.TODO_ADD_ITEM;
    payload:any[];

}

export type TodoAction =
    FetchTodoAction
    | FetchTodoActionError
    | FetchTodoActionSucces
    | SetTodoPage
    | TodoSetFilter
    | TodoSetSearchTerm
    | TodoDeleteItem
    | TodoAddItem
    | TodoSetImportant
    | TodoSetCompleted