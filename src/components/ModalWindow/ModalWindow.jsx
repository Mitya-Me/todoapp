import React from 'react'
import styles from './modalwindow.module.css'

const ModalWindow = ({ children, visible, setVisible }) => {
    
    visible ? visible = `${styles.modalwindow_active}` : visible = ''

    return (
        <div className={`${styles.modalwindow} ${visible}`} onClick={() => setVisible(false)}>
            <div className={styles.modalwindow__content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalWindow
