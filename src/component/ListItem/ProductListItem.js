import React, { useContext } from "react";
import classes from "./ProductListItem.module.css";
import Button from "../../UI/Button/Button";
import CartContext from "../../Context/CartContext";

const ProductListItem = (props) => {
  const ctx = useContext(CartContext);
  const onclickHandler = () => {
    // let b={...props,quantity:1}
    ctx.addItem({ ...props, quantity: 1 });
    console.log("item handler");
  };
  return (
    <div>
      <li className={classes.li}>
        <h3>{props.title}</h3>
        <img src={props.img} alt="music"></img>
        <h3>{`$${props.price}`}</h3>
        <div>
          <Button
            type="button"
            name="Add To Cart"
            onClick={onclickHandler}
            className={classes.addbtn}
          ></Button>
        </div>
      </li>
    </div>
  );
};

export default ProductListItem;
