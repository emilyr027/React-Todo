import React from 'react';
import './Todo.css';

const ToDo = (props) => {

return (
            <div 
            onClick={() => props.toggleTask(props.item.id)}
            className={`item${props.item.completed ? "-done" : ""}`}
            >
                <p>{props.item.name}</p>
            </div>
        )
}

export default ToDo



