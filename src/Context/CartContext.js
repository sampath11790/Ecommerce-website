import React, { createContext } from "react";

const CartContext=createContext({
    items:[],
    addItem:()=>{},
    RemoveItem:()=>{}
})

export default CartContext
