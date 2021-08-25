import React from 'react';


const menialTasks = [
    {
      task: "Create more tasks",
      id: 505,
      completed: false,
      priority: 3
    }
]

class Todos extends React.Component {
    constructor() {
      super();
      this.state = {
        menialTasks // same as menialTasks:menialTasks
      }
    }

    addItem = itemName => {
        const newTask = {
          task: this.itemName,
          id: Date.now(),
          endured: false,
          priority: this.priority
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
              completed: !item.completed
            };
          } else {
            return item;
          }
        });
        this.setState({
          menialTasks: newTaskList
        })
      };
      clearEndured = e => {
        e.preventDefault();
        let menialTasks = this.state.menialTasks.filter(menialTasks => !menialTasks.completed);
        this.setState({ menialTasks });
       };

    render() {
        return (
            <div>
                <h2>Tasks to complete for master!</h2>
                <TodoForm addItem={this.addItem} />
                <TodoList menialTasks={this.state.menialTasks}
                handleToggleTask={this.toggleTask}
                handleClear={this.clearEndured} />
            </div>
        )
    }
}

export default Todos;