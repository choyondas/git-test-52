import React from 'react';
import "./Todo.css"
const Todo = (props) => {
    const { id, title, completed } = props.todo;
    return (
        <div className="todo-div">
            <h2 className="id">id : {id}</h2>
            <h3>title: {title}</h3>
        </div>
    );
};

export default Todo;