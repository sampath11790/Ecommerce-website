import React from "react";
import Button from "../../UI/Button/Button";

import classes from './HomePageItem.module.css'
const HomePageItems=(props)=>{
    return(
        <div>
        <li className={classes.li}>
            <span>{props.date}</span>
            <span>{props.name}</span>
            <span>{props.name}</span>
            <span> <Button name='Buy Ticket' className={classes.bookbtn}></Button></span>
           
        </li>
        </div>
    )
}

export default HomePageItems