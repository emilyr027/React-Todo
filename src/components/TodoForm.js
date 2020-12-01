import React from 'react';
import styled from 'styled-components';


const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 7px;
    color:rgba(29, 36, 42, 0.9);
    width:100%;
`

class ToDoForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            item: '', 
        }
    }

    handleChanges = event => {
        this.setState({
            item: event.target.value,
        })
        console.log(this.state);
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.addTask(this.state.item);
    }

    render() {
        return (
            <>
                <StyledForm onSubmit={this.submitHandler}>
                <input
                name='item'
                type='text'
                value={this.state.item}
                placeholder='What do you need to do?'
                onChange={this.handleChanges}
                />
                <button>Add</button>
                </StyledForm>
            </>
        )
    }
}

export default ToDoForm





























// import React from 'react';

// class ToDoForm extends React.Component {
//     constructor (props) {
//        super(props);
//         this.state = {
//             item:'',
//         }
//     }

//     handleChanges = e => {
//         this.setState({
//             item: e.target.value,
//         })
//         console.log(this.state);
//     }

//     submitHandler = e => {
//         e.preventDefault();
//         this.props.addTask(this.state.item);
//     }

//     render() {
//         return (
//             <form onSubmit={this.submitHandler}>
//                 <input
//                 name='task'
//                 type='text'
//                 value={this.state.task}
//                 placeholder='Add a to-do to your list'
//                 onChange={this.handleChanges}
//                 />

//                 <button onClick={this.props.handleSubmit}>Add Task</button>

//                 <button onClick={this.props.handleComplete}>Clear Completed</button>

//             </form>
//         )
//     }
// }

// export default ToDoForm