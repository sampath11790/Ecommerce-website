import React from "react";
import Button from "../../UI/Button/Button";
import CartItem from "./CartItem";
import classes from './CartList.Module.css'


const CartList=(props)=>{
  
    return(
        <div className={classes.container}>
       <ul className={classes.ui}>  
       <div className={classes.spantd}>
        <h3>Item</h3>
        <h3>price</h3>
        <h3>Qty</h3>
         </div> 
       {props.items.map((item)=>
       <CartItem
       title={item.title}
       key={item.id}
       id={item.id}
       price={item.price}
       img={item.imageUrl}/>)}
       <h1> Total Amount</h1>
       <h1> 78</h1>
        <Button name='Purchase' className={classes.purchbtn}></Button>
       </ul> 
        
       </div>
    )
}
export default CartList