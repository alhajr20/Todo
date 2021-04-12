import React from 'react'

function Todos({todos}) {
    console.log(todos.length);
    return (
        <div>
            <ul>
                {todos.map(item => (
                    <li>{item.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default Todos
