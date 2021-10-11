import React, {useState} from 'react'
import SfInput from '../UI/input/SfInput'
import SfButton from '../UI/button/SfButton'

const TodoForm = ({createTodo}) => {
    const [todo, setTodo] = useState({ title: '', description: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = { ...todo, id: Date.now() }
        createTodo(newPost)
        setTodo({title: '', description: ''})
    }


    return (
        <form>
        <SfInput
            onChange={e => setTodo({...todo, title: e.target.value})}
            value={todo.title}
            type='text'
            placeholder='Enter title...'
        />
        <SfInput
            onChange={e => setTodo({...todo, description: e.target.value})}
            value={todo.description}
            type='text'
            placeholder='Enter description...' />
        <SfButton onClick={addNewPost} text='create todo' btnStyle='todo'> Create todo </SfButton>
    </form>
    )
}

export default TodoForm
