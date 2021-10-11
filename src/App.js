import React, { useState } from 'react';

import Todolist from './components/TodoList/todolist';
import TodoForm from './components/TodoForm/TodoForm'

import './styles/App.css';


function App() {
    const [todos, setTodos] = useState([
        { id: 1, title: 'Buy bacteria', description: 'test description text' },
        { id: 2, title: 'Pass vitamins to mom', description: 'test description text' },
        { id: 3, title: 'See a doctor on Tuesday', description: 'test description text' },
        { id: 4, title: 'Buy olive oil', description: 'test description text' },
    ])

    const createTodo = (newTodo) => setTodos([...todos, newTodo])

    const deleteTodo = (delTodo) => {
        setTodos(todos.filter(todo => todo.id !== delTodo.id))
    }

    return (
        <div className='app'>
            <div className='header'>
                <TodoForm createTodo={createTodo} />
                <div className='todolist'>
                    {todos.length !== 0
                        ? todos.map((todo, index) =>
                            <Todolist
                                deleteTodo={deleteTodo}
                                todo={todo}
                                number={index + 1}
                                key={todo.id}
                            />)
                        : <h2 style={{ fontSize: '35px', textAlign: 'center', color: 'red' }}>SLACKER!</h2>
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
