import React,{useContext} from "react";
import classes from './HomePage.module.css'
import HomePageItems from "./HomePageItems";
import CartContext from "../../Context/CartContext";

const HomePage=()=>{
   const ctx=useContext(CartContext)
   const a=ctx.HomePageItem.map((item)=>{console.log(item)})
    return(
        <div className={classes.container}>
          <span  className={classes.tour}><h1>Tours</h1></span> 
         <ul className={classes.ul}>  
        {ctx.HomePageItem.map((item)=>
        <HomePageItems
        key={item.id}
        date={item.date}
        location={item.location}
        name={item.name}
        ></HomePageItems>)}
        </ul> 
        </div>
    )
}

export default HomePage