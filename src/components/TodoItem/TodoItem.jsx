import React from "react";
import SfButton from "../UI/Button/SfButton";

import styles from "./todoitem.module.css"

const TodoItem = ({ deleteTodo, todo, number }) => {
    
    return (
        <div className={styles.todoitem}>
            <h2 className={styles.todoitem__title}>
                {number}. {todo.title}
            </h2>
            <p className={styles.todoitem__description}>{todo.description}</p>
            <div className={styles.todoitem__btns}>
                <SfButton
                    onClick={() => deleteTodo(todo)}
                    btnStyle={'del'}
                >
                    Delete
                </SfButton>
            </div>
        </div>
    );
};

export default TodoItem;
