import React from 'react';
//<TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
//Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
//Once a todo is submitted, the Todo List should re-render and show the added todo.
class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            chore: ""
        }
    }
    handleChanges = e => {
        this.setState({
            chore: e.target.value
        })
    }
    submitForm = e => {
        e.preventDefault();
        this.props.addItem(this.state.chore);
        this.setState({
            chore: ""
        });
    };
    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input
                    onChange={this.handleChanges}
                    type="text"
                    name="task"
                    value={this.state.chore}
                />
                <button onClick={this.props.handleClear}>Add</button>
            </form>
        );
    }
}

export default TodoForm;