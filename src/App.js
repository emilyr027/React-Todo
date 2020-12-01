import React from 'react';
import ToDoForm from './components/TodoForm'
import ToDoList from './components/TodoList';
import './components/Todo.css';
import styled from 'styled-components';


const StyledDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color:#ffd0b6;
    margin:5% auto;
    padding:10px;
    width:65%;
`

const DivInDiv = styled.div`
    width:75%;
`

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoTotal: [], 
    }
  }

  addTask = (itemName) => {
    debugger
    const newItem = {
      name: itemName,
      id: new Date(), 
      completed: false, 
      toggleTask: () => {},
    }

    this.setState({
      toDoTotal: [...this.state.toDoTotal, newItem]
    })
  }

  clearFinished = (item) => {
    this.setState({
      toDoTotal: this.state.toDoTotal.filter((item) => {
        return item.completed === false
      })
    })
  }

  toggleTask = (clickedItemID) => {
    debugger
    this.setState({
      toDoTotal: this.state.toDoTotal.map((item) => {
        if (item.id === clickedItemID) {
          return {
            ...item,
            completed: !item.completed,
          }
        } else {
          return item;
        }
      })
    })
  }

  render() {
    return (
    
      <StyledDiv>
        <DivInDiv>
        <h1>Emily's To Do List</h1>
        <ToDoForm addTask={this.addTask}/>
        <ToDoList tasks={this.state.toDoTotal} toggleTask={this.toggleTask} clearFinished={this.clearFinished}/>
        </DivInDiv>
      </StyledDiv>
    );
  }
}

export default App;

