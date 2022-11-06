import React,{useState} from "react";
import CartContext from "./CartContext";

const CartContextProvider=(props)=>{
    const [items,setItem]=useState([])
   
    const addItemHandler=(item)=>{
       console.log(" am additemHandler")
        let flag=false
        let updatedItem=items.map((each)=>{
            if(item.id==each.id){
               let temp= each.quantity+1
               each.quantity=temp
                flag=true
                
            }
            
            //console.log(item)
            return each
        })
       flag?  setItem([...updatedItem]):setItem([...items,item])
    }
   // console.log(items)
    return(
        <CartContext.Provider value={{
         items:items,
         addItem:addItemHandler,
        }}>
         {props.children}
         </CartContext.Provider>
    )
}

export default CartContextProvider