import React from'react';

const ItemStatusFilter = () =>{
    return (
        <div className="btn-group">
            <button type="button"
            className="btn btn-outline-secondary">ALL</button>
                        <button type="button"
            className="btn btn-outline-secondary">ACTIVE</button>
                        <button type="button"
            className="btn btn-outline-secondary">DONE</button>

        </div>
    )
}

export default ItemStatusFilter;