import React from 'react';
import './todo-list-item.css'


const TodoListItem = (props: { title: string; onDeleted: any; setCompleted: any; setImportant: any; important: boolean; completed: boolean; id: number; }) => {
    const {title, onDeleted, setCompleted, setImportant, important, completed, id} = props;


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
                  onClick={()=>setCompleted(id)}>
                {title}
            </span>
            <div className="btn-group">
                <button type="button"
                        className={buttonClasses}
                        onClick={() => {
                            setImportant(id)
                        }
                        }>

                    <i className="fa fa-exclamation"/>
                </button>

                <button type="button"
                        onClick={() => {
                            onDeleted(id)
                        }}
                        className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o"/>
                </button>
            </div>

        </span>
    )
}

export default TodoListItem