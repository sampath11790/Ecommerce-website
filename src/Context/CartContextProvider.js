import React,{useState} from "react";
import CartContext from "./CartContext";
const obj=[{date:"JUL 16",location:"DETROIT",name:"MI DTE ENERGY MUSIC THEATRE"},
{id:1,date:"JUL 19",location:"TORONTO",name:"ON BUDWEISER STAGE"},
{id:2,date:"JUL 22",location:"BRISTOW",name:"VA JIGGY LUBE LIVE"},
{id:3,date:"JUL 29",location:"PHOENIX",name:"AZ AK-CHIN PAVILION"},
{id:4,date:"AUG 2",location:"LAS VEGAS",name:"NV T-MOBILE ARENA"},
{id:5,date:"AUG 7",location:"CONCORD",name:" CA CONCORD PAVILION"}]
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
         HomePageItem:obj,
         addItem:addItemHandler,
        }}>
         {props.children}
         </CartContext.Provider>
    )
}

export default CartContextProvider