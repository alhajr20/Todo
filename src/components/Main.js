import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Todos from "./Todos";

function Main() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const handleText = (e) => {
        setText(e.target.value);
    }

    const addTodo = (e) => {
        e.preventDefault();

        setTodos([
            ...todos,
            {text: text, id: Math.floor(Math.random() * 1000)},
        ]);

        setText('');
        console.log(todos);
    };

    return (
        <div>
            <Container fixed>
                <form>
                    <h1>Khalid's Todo List</h1>
                    <input onChange={e => handleText(e)} value={text} name="todo" type="text" placeholder="Enter your todo" />
                    <button onClick={(e) => addTodo(e)}>Add</button>
                </form>

                <div className="result">
                    <Todos todos={todos} />
                </div>
            </Container>
        </div>
    )
}

export default Main
