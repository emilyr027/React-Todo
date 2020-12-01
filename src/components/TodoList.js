// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';
import styled from 'styled-components';

const StyledButton = styled.button`
    display:block;
    background-color:#f7797d;
    color:#fff;
    font-size:.9rem;
    border:0;
    border-radius:5px;
    width:50%;
    padding: 0 10px;
    cursor:pointer;
    box-sizing:border-box;
    margin-top:2%;
    margin:5px;
`

const ToDoList = (props) => {

        return (
            <div>
                {props.tasks.map((item) => (
                    <ToDo
                    key={item.id}
                    item={item}
                    toggleTask={props.toggleTask}
                    />
                ))}
                <StyledButton onClick={props.clearFinished}>
                    Clear Finished Tasks
                </StyledButton>
            </div>
        )
}

export default ToDoList



















// import React from 'react';
// import ToDo from './Todo';

// const ToDoList = (props) => {
//     return(
//         <div>
//         {props.task.map(task => (
//             <ToDo
//             key={task.id}
//             task={task}
//             toggleTask={props.toggleTask}
//             />
//         ))}
//         </div>

//     )
// }

// export default ToDoList