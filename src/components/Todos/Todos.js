import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])
    return (
        <div>
            <h2>hello from todos</h2>
            {
                todos.map(todo => <Todo
                    todo={todo}
                    key={todo.id}

                ></Todo>)
            }
        </div>
    );
};

export default Todos;