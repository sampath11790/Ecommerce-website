import React from "react";
import classes from './Button.module.css'

const Button=(props)=>{
    return(
        <div>
            <button className={`${classes.btn} ${props.className}`} onClick={props.onClick} type={props.type}>{props.name}</button>
        </div>
    )
}

export default Button