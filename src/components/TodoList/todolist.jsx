import React from "react";
import SfButton from "../UI/Button/SfButton";
import styles from "./todolist.module.css";

function Todolist({ todo, number, deleteTodo }) {
    //TODO: create date in todo 

    return (
        <div className={styles.todo}>
            <h2 className={styles.todo__title}>
                {number}. {todo.title}
            </h2>
            <p className={styles.todo__description}>{todo.description}</p>
            <div className={styles.todo__btns}>
                <SfButton
                    onClick={() => deleteTodo(todo)}
                    btnStyle={'sfbutton-del'}>
                    Delete
                </SfButton>
            </div>
        </div>
    );
}

export default Todolist;
