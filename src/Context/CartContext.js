import React, { createContext } from "react";

const CartContext=createContext({
    items:[],
    HomePageItem:[],
    addItem:()=>{},
    RemoveItem:()=>{}
})

export default CartContext
