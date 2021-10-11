import React from "react";
import SfButton from "../UI/button/SfButton";
import styles from "./todolist.module.css";

function Todolist({ todo, number }) {
    return (
        <div className={styles.todo}>
            <h2 className={styles.todo__title}>
                {number}. {todo.title}
            </h2>
            <p className={styles.todo__description}>{todo.description}</p>
            <div className={styles.todo__btns}>
                <SfButton btnStyle={'sfbutton-del'}>Delete</SfButton>
            </div>
        </div>
    );
}

export default Todolist;
