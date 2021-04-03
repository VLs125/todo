import React from 'react';

const ItemStatusFilter = (props: any) => {
    const buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'completed', label: 'Done'},
    ]

    const {filter, onFilterChange} = props;

    const Button = buttons.map(({name, label}) => {

        const isActive = filter === name;
        const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
        return (
            <button key={name} type="button"
                    className={`btn ${clazz}`}
                    onClick={() => onFilterChange(name)}>{label}
            </button>
        )
    });

    return (
        <div className="btn-group">
            {Button}
        </div>
    )
};


export default ItemStatusFilter