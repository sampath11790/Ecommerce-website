import React from "react";
import classes from './ProductList.module.css'
import ProductListItem from "./ProductListItem";
import Cart from "../cart/Cart";

const ProductList=(props)=>{
    return (
        <div>
        {/* <Cart items={productsArr}></Cart>   */}
        <ul className={classes.ul}>
        {props.items.map((item)=>
        <ProductListItem
        title={item.title}
        key={item.id}
        id={item.id}
        price={item.price}
        img={item.imageUrl}/>
        )}
        </ul>
        </div>
    )
    }
    
    export default ProductList