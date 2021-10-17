import React from 'react'
import classes from './sfbutton.module.css'

const SfButton = ({ children, btnStyle, ...props }) => {
    
    btnStyle === 'del'
        ? btnStyle = classes.sfbutton_del
        : btnStyle = classes.sfbutton_add


    return (
        <button {...props}  className={`${classes.sfbutton} ${btnStyle}`}>
            {children}
        </button>
    )
}

export default SfButton
