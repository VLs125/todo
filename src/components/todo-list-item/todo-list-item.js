import React, { Component } from 'react';
import './todo-list-item.css'


export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState(({done})=>{
            return {
                done: !done
            }
        })
    }
    
    onMarkImportant= () =>{
            this.setState((state)=>{
                return {
                    important: !state.important
                }
            })
        }






    render() {
        const { label,onDeleted } = this.props;

        const { done, important } = this.state

        let classNames = 'todo-list-item';
        let buttonClasses ='btn btn-outline-secondary btn-sm float-right'
        let importantButtonClasses ='btn btn-outline-sucess btn-sm float-right'
        if (done) {
            classNames += ' done'
        }
        if (important) {
            classNames += ' important'
            buttonClasses = 'btn btn-outline-success btn-sm float-right'
            
        }

        return (
            <span className={classNames}>
                <span className="todo-list-item-label"
                    onClick={this.onLabelClick}>
                    {label}
                </span> 
                <div className="btn-group">
                    <button type="button"
                        className={buttonClasses}
                        onClick={this.onMarkImportant}>
                        <i className="fa fa-exclamation" />
                    </button>

                    <button type="button"
                    onClick={onDeleted}
                        className="btn btn-outline-danger btn-sm float-right">
                        <i className="fa fa-trash-o" />
                    </button>
                </div>


            </span>
        )
    }
}