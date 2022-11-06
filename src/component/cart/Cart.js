import React from "react";
import  ReactDOM  from "react-dom";
import CartList from "./CartList";
//import classes from './Cart.module.css'


const Cart=(props)=>{
    
    return(
        <React.Fragment>
       
         {ReactDOM.createPortal(<CartList/>,document.getElementById('cart'))}
         {/* {ReactDOM.createPortal(<div className={classes.overlay}></div>,document.getElementById('overlay'))} */}
         </React.Fragment>
    )
}
export default Cart