import AddElementsForm from "./add-elements-form";
import React, {useState} from 'react'
import {useActions} from "../../ hooks/useActions";
const AddElementsFormContainer:React.FC = ()=>{
    const {addTodo} = useActions();
    const [label, setLabel] =useState('');
  const onLabelChange= (e: { target: { value: string; }; })=>{
      setLabel(e.target.value)
    }

  const onSubmit = (e: { preventDefault: () => void; })=>{
        e.preventDefault();
        addTodo(label)
      setLabel('')

    }

    return(
        <AddElementsForm onLabelChange={onLabelChange}
                            onSubmit={onSubmit}
                            label={label}/>
    )
}
export default AddElementsFormContainer