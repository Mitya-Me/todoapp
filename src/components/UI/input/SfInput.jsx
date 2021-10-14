import React from "react";
import classes from "./sfinput.module.css";

const SfInput = (props) => {
    return <input className={classes.sfinput} {...props}></input>;
};

export default SfInput;
