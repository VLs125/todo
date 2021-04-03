import React from 'react';
import './todo-list-item.css'


const TodoListItem = (props) => {

    const { title, onDeleted, onToggleDone, onToggleImportant, important, completed } = props;


    let classNames = 'todo-list-item';
    let buttonClasses = 'btn btn-outline-secondary btn-sm float-right'
    if (completed) {
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
                {title}
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

export default TodoListItem