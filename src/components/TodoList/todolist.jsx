import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./todolist.module.css";
import Error from "../Error/Error"

function TodoList({ todos, number, deleteTodo }) {
    if (!todos) {
        return <Error />
    }

    return (
        <div className={styles.todolist}>
            {todos.map((todo, index) => 
                <TodoItem deleteTodo={deleteTodo} number={index + 1} todo={todo}/>
            )}
        </div>
    );
}

export default TodoList;
