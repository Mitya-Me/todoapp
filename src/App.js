import React, { useState, useMemo } from 'react';

import TodoList from './components/TodoList/TodoList'
import TodoForm from './components/TodoForm/TodoForm'
import TodoFilter from './components/TodoFilter/TodoFilter'
import ModalWindow from './components/ModalWindow/ModalWindow'
import SfButton from './components/UI/Button/SfButton'

import data from './data/data'

import './styles/App.css';

function App() {
    const [todos, setTodos] = useState(data)
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modalWindowVisible, setModalWindowVisible] = useState(false)

    let sortedTodos = useMemo(() => {
        if (filter.sort) {
            return [...todos].sort((a, b) => a[filter.sort] > b[filter.sort] ? 1 : -1)
        }
        return todos;
    }, [filter.sort, todos])

    const sortedAndSearchedTodos = useMemo(() => {
        return (sortedTodos.filter(todo =>
            todo.title.toLowerCase().includes(filter.query.toLowerCase())))
    }, [filter.query, sortedTodos])

    const createTodo = (newTodo) => {
        setTodos([...todos, newTodo])
        setModalWindowVisible(false)
    }

    const deleteTodo = (delTodo) => {
        setTodos(todos.filter(todo => todo.id !== delTodo.id))
    }

    return (
        <div className='app'>
            <div className='header'>
                <SfButton onClick={() => setModalWindowVisible(!modalWindowVisible)}>
                    ADD TODO
                </SfButton>
                <ModalWindow visible={modalWindowVisible} setVisible={setModalWindowVisible}>
                    <TodoForm createTodo={createTodo} />
                </ModalWindow>
                <TodoFilter filter={filter} setFilter={setFilter} />
                <TodoList deleteTodo={deleteTodo} todos={sortedAndSearchedTodos}
                />
            </div>
        </div>
    );
}

export default App;
