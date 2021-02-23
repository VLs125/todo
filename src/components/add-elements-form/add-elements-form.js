
import React, { Component } from 'react'
import './add-elements-form.css'


export default class AddElementsForm extends Component {

    state = {
        label: ''
    }
    onLabelChange= (e)=>{
        this.setState({
          label: e.target.value

        })
    }
    onSubmit = (e)=>{
        e.preventDefault();
        this.props.addItem(this.state.label)
        
        this.setState({
            label: ''
          });
        
    }
    render() {
        return (
        <div className="form-group" > 
            <form onSubmit={this.onSubmit}>

                    <label className="label-task" htmlFor="taskInput">input your task</label>
                    <input onChange={this.onLabelChange} type="text" className="form-control task-input" id="taskInput" aria-describedby="taskHelp" placeholder="What you need to do?"
                    value ={this.state.label} />
                    <small id="taskHelp" className="form-text text-muted">"that text can be modified"</small>
                    <button type="submit" className="btn btn-primary mt-3">Save</button>
                    </form>
                </div>
               
         


        )
    }
}