import React, { useState } from 'react';

import SfSelect from './components/UI/Select/SfSelect'
import SfInput from './components/UI/Input/SfInput'
import Todolist from './components/TodoList/Todolist'
import TodoForm from './components/TodoForm/TodoForm'

import './styles/App.css';


function App() {
    const [todos, setTodos] = useState([
        { id: 1, title: 'Buy bacteria', description: 'Buy two jars of bacteria to restore normal intestinal microflora' },
        { id: 2, title: 'Pass vitamins to mom', description: 'Hand over the received vitamins to the customer' },
        { id: 3, title: 'See a doctor on Tuesday', description: 'Go to the doctors office, report the test results, discuss the further course of treatment.' },
        { id: 4, title: 'Buy olive oil', description: 'Olive oil will supply the right amount of vitamins to my body.' },
    ])


    const [selectedSort, setSelectedSort] = useState()

    const createTodo = (newTodo) => setTodos([...todos, newTodo])

    const deleteTodo = (delTodo) => {
        setTodos(todos.filter(todo => todo.id !== delTodo.id))
    }

    const sortTodos = (sort) => {
        setSelectedSort(sort);
        setTodos([...todos].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className='app'>
            <div className='header'>
                <TodoForm createTodo={createTodo} />
                <SfInput
                
                    placeholder='Search...'
                    type='text'
                />
                <SfSelect
                    onChange={sortTodos}
                    defValue="sort"
                    options={[
                        { value: 'title', name: 'by title' },
                        { value: 'description', name: 'by description' },
                    ]} />
                <div className='todolist'>
                    {todos.length
                        ? todos.map((todo, index) =>
                            <Todolist
                                deleteTodo={deleteTodo}
                                todo={todo}
                                number={index + 1}
                                key={todo.id}
                            />)
                        : <h2
                            style={{
                                fontSize: '35px',
                                textAlign: 'center',
                                color: 'dodgerblue',
                                padding: '25px',
                                lineHeight: '37px'
                            }}>
                            Конгратулэйшнc, у вас не осталось больше дел.
                        </h2>
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
