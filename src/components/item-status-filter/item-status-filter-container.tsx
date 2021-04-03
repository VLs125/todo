import ItemStatusFilter from "./item-status-filter";
import {useTypedSelector} from "../../ hooks/useTypedSelector";
import {useActions} from "../../ hooks/useActions";


const ItemStatusFilterContainer: React.FC = () => {
    const {filter} = useTypedSelector(state => state.todos);
    const {setFilter} = useActions();
    console.log(filter)


    return (
        <ItemStatusFilter filter={filter}
                            onFilterChange={setFilter}/>
    )

}

export default ItemStatusFilterContainer