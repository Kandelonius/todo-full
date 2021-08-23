import React from 'react';
import styled from 'styled-components'
//<Todo /> is a component that takes in the todo data and displays the task to the screen.
const Todo = props => {
    return (
        <div style={props.item.endured ? { textDecoration: 'line-through' } : null}
            onClick={() => props.handleToggleTask(props.item.id)}>
            <p>{props.item.task}</p>
        </div>
    );
}

export default Todo;