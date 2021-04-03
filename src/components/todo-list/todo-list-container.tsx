import {useTypedSelector} from "../../ hooks/useTypedSelector";
import {useActions} from "../../ hooks/useActions";
import {useEffect} from "react";
import React  from "react";
import TodoList from "./todo-list";

const TodoListContainer:React.FC = ()=>{
    const {todos, page, error, limit, loading,filter,term} = useTypedSelector(state => state.todos);

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

     const searchItem = (items:any, term:any) => {
   if (term === 0) {
     return items;
   }
   return items.filter((item:any) => {
     return item.title
       .toLowerCase()
       .indexOf(term.toLowerCase()) > -1;
   })
 }




    useEffect(() => {
        fetchTodos(page, limit);
    }, [page]);

    const visibleItems = filterItem(searchItem(todos,term), filter)

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