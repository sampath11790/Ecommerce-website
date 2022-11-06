import React,{useState} from "react";
import classes from './Header.module.css'
import Button from '../../UI/Button/Button'

const Header=(props)=> {
 
  const cartHandler=()=>{
    props.cartHandler()
   console.log("cart handler ")
  }
    return (
      <div>
        <header className={classes.header}>
           <h3>Ecommerce website</h3>
           <h3>Home</h3>
           <h3>Store</h3>
           <h3>About</h3>
           <div className={classes.btn}>
            
           <Button onClick={cartHandler} name='Cart' className={classes.cartbtn}></Button>
           <div className={classes.amt}><h2>3</h2></div>
           
           </div>
        </header>
      </div>
    );
  }
  
  export default Header;