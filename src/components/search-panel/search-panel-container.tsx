import React, {useState} from 'react'
import {useActions} from "../../ hooks/useActions";
import SearchPanel from "./search-panel";

const SearchPanelContainer :React.FC=() =>{

    const [termItem, setTermItem] = useState('');

    const {setSearchTerm} = useActions();

    const onChangeInput = (e:any) => {
        const value = e.target.value
        setTermItem(value);

        setSearchTerm(value);
    }
    return(
        <SearchPanel term={termItem}
                        onChangeInput={onChangeInput}/>
    )

}

// @ts-ignore
export default SearchPanelContainer