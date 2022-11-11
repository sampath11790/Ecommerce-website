import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink to={`/Store/${props.id}`}>
          <h3>{props.title}</h3>
          <img src={props.img} alt="music" className={classes.image}></img>
          <h3>{`$${props.price}`}</h3>
        </NavLink>
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
