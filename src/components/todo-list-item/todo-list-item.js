import React, { Component } from 'react';
import './todo-list-item.css'


export default class TodoListItem extends Component {


    render() {
        const { label,onDeleted,onToggleDone,onToggleImportant,important,done } = this.props;


        let classNames = 'todo-list-item';
        let buttonClasses ='btn btn-outline-secondary btn-sm float-right'
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
                    onClick={onToggleDone}>
                    {label}
                </span> 
                <div className="btn-group">
                    <button type="button"
                        className={buttonClasses}
                        onClick={onToggleImportant}
                        
                        >
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