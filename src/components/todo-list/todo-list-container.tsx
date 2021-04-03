import {useTypedSelector} from "../../ hooks/useTypedSelector";
import {useActions} from "../../ hooks/useActions";
import {useEffect} from "react";
import React  from "react";
import TodoList from "./todo-list";

const TodoListContainer:React.FC = ()=>{
    const {todos, page, error, limit, loading,filter} = useTypedSelector(state => state.todos);

    const {fetchTodos, deleteTodo, setImportant, setCompleted} = useActions();

    const filterItem = (todos:any[], filter:string) => {
        switch (filter) {
            case 'all':
                return todos;
            case 'active':
                return todos.filter((item: { completed: any; }) => !item.completed)
            case 'completed':
                return todos.filter((item: { completed: any; }) => item.completed);
            default:
                return todos;

        }
    }




    useEffect(() => {
        fetchTodos(page, limit);
    }, [page]);
    const visibleItems = filterItem(todos, filter)

    return(
        <TodoList todos={visibleItems}
                  error={error}
                  loading={loading}
                  deleteTodo={deleteTodo}
                  setImportant={setImportant}
                  setCompleted={setCompleted}/>
    )
}

export default TodoListContainer