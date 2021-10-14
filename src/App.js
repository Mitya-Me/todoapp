import React, { useState } from 'react';

import SfSelect from './components/UI/Select/SfSelect'
import SfInput from './components/UI/Input/SfInput'
import Error from './components/Error/Error';
import Todolist from './components/TodoList/Todolist'
import TodoForm from './components/TodoForm/TodoForm'

import data from './data/data'

import './styles/App.css';

function App() {
    // const [todos, setTodos] = useState([
    //     { id: 1, title: 'Buy bacteria', description: 'Buy two jars of bacteria to restore normal intestinal microflora' },
    //     { id: 2, title: 'Pass vitamins to mom', description: 'Hand over the received vitamins to the customer' },
    //     { id: 3, title: 'See a doctor on Tuesday', description: 'Go to the doctors office, report the test results, discuss the further course of treatment.' },
    //     { id: 4, title: 'Buy olive oil', description: 'Olive oil will supply the right amount of vitamins to my body.' },
    // ])

    const [todos, setTodos] = useState(data)

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const getSort = (eventValue) => {
        setSelectedSort(eventValue);
        // [...todos].map(el => el.title = 'test title') WWHY?!
        setTodos([...todos].sort((a, b) => a[eventValue] > b[eventValue] ? 1 : -1))
    }

    const getQuery = (eventValue) => {
        setSearchQuery(eventValue);
        let arr = [];
        if (eventValue.length >= 3) {
            todos.forEach(todo => {
                if (todo.title.toLowerCase().includes(eventValue.toLowerCase())) {
                    arr.push(todo)
                    setTodos(arr)
                }
            })
        } else if (eventValue.length >= 0) {
            setTodos(data)
        }
    }


    const createTodo = (newTodo) => setTodos([...todos, newTodo])

    const deleteTodo = (delTodo) => {
        setTodos(todos.filter(todo => todo.id !== delTodo.id))
    }



    return (
        <div className='app'>
            <div className='header'>
                <TodoForm createTodo={createTodo} />
                <SfInput
                    onChange={e => getQuery(e.target.value)}
                    value={searchQuery}
                    placeholder='Search...'
                    type='text'
                />
                <SfSelect
                    onChange={getSort}
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
                        : <Error />
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
