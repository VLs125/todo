import AppHeader from "./app-header";
import {useTypedSelector} from "../../ hooks/useTypedSelector";


const AppHeaderContainer :React.FC = ()=>{
    const {todos} = useTypedSelector(state => state.todos);

    const doneCount = todos
  .filter((el) => el.completed).length;


   const todoCount = todos.length - doneCount


    return(
        <AppHeader todo={todoCount}
                   done={doneCount}
        />
    )
}
export default AppHeaderContainer