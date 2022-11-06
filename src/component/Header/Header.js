import React,{useContext} from "react";
import classes from './Header.module.css'
import Button from '../../UI/Button/Button'
import CartContext from "../../Context/CartContext";

const Header=(props)=> {
  const ctx=useContext(CartContext)

    let count=0
    ctx.items.map((item)=>{
      console.log(item)
       count+=item.quantity
       console.log(count)
    })
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
           <div className={classes.amt}><h2>{count}</h2></div>
           
           </div>
        </header>
      </div>
    );
  }
  
  export default Header;