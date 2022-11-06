import React from "react";
import Button from "../../UI/Button/Button";
import classes from './CartItem.module.css'


const CartItem=(props)=>{
    const removeHandler=()=>{
        console.log('remove Handler')
    }
    return(
        <div>
         <li className={classes.li}>
            <div >
            <img src={props.img} className={classes.imgs}></img>
            
            </div>
            <div> <h3>{props.title}</h3></div>
            <div> <h3>{`$${props.price}`}</h3></div>
            <div >
            <input type="text" className={classes.input}></input>
            </div>
           
           
           
            
            <Button name='remove' onClick={removeHandler} className={classes.btn} ></Button>
         </li>
        </div>
    )
}
export default CartItem