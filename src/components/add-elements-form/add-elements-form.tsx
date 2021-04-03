
import React from 'react'
import './add-elements-form.css'


 const AddElementsForm =(props: { onSubmit: any; onLabelChange: any; label: string }) => {

    const {onSubmit,onLabelChange,label} = props

        return (
        <div className="form-group" > 
            <form onSubmit={onSubmit}>

                    <label className="label-task" htmlFor="taskInput">input your task</label>
                    <input onChange={onLabelChange} type="text" className="form-control task-input" id="taskInput" aria-describedby="taskHelp" placeholder="What you need to do?"
                    value ={label} />
                    <small id="taskHelp" className="form-text text-muted">"that text can be modified"</small>
                    <button type="submit" className="btn btn-primary mt-3">Save</button>
                    </form>
                </div>
               
         


        )
    }
export default AddElementsForm