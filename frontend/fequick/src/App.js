
import React from 'react';
import ReactDOM from "react-dom";
import styled from 'styled-components'

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";
// import "../public/img/weatheredPaper.jpg";
//<App /> will hold all the data needed for this project. It will also be the container for your Todo Components.
//All of your application data will be stored here on <App />.
//All of your handler functions should live here on <App />.
const menialTasks = [
  {
    task: "Fetch Firewood",
    id: 505,
    endured: false
  },
  {
    task: "Discipline Underling",
    id: 530,
    endured: false
  },
  {
    task: "Watch Door",
    id: 535,
    endured: false
  },
  {
    task: "Watch Prisoner",
    id: 845,
    endured: false
  },
  {
    task: "Grovel",
    id: 1245,
    endured: false
  },
  {
    task: "Take Lashings",
    id: 1315,
    endured: false
  }
];
const Container = styled.div`
text-align: center;
background-color: green;
border: 2px solid gray;
padding 2%;
  button{
    background-color: gray;
  }
`
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menialTasks // same as menialTasks:menialTasks
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addItem = itemName => {
    const newTask = {
      task: itemName,
      id: Date.now(),
      endured: false
    };
    this.setState({
      menialTasks: [...this.state.menialTasks, newTask]
    });
  };
  toggleTask = (clickedId) => {
    const newTaskList = this.state.menialTasks.map((item) => {
      if (item.id === clickedId) {
        return {
          ...item,
          endured: !item.endured
        };
      } else {
        return item;
      }
    });
    this.setState({
      menialTasks: newTaskList
    })
  };
  clearEndured = evt => {
    // console.log(evt)
    evt.preventDefault();
    let menialTasks = this.state.menialTasks.filter(menialTasks => !menialTasks.endured);
    this.setState({ menialTasks });
   };
  render() {
    return (
      <Container>
        <h2>Tasks to complete for master!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList menialTasks={this.state.menialTasks}
          handleToggleTask={this.toggleTask}
          handleClear={this.clearEndured} />
      </Container>
    );
  }
}

export default App;
