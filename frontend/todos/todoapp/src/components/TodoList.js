// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';
//<TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.

const TodoList = props => {
    return (
        <div>
            {props.menialTasks.map(item => (
                <Todo key={item.id}
                item={item}
                handleToggleTask={props.handleToggleTask}
                />
            ))}
            <button onClick={props.handleClear}>Done</button>
        </div>
    );
}

export default TodoList;