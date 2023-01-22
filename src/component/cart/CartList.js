import React, { useContext } from "react";
import Button from "../../UI/Button/Button";
import CartItem from "./CartItem";
import classes from "./CartList.Module.css";
import CartContext from "../../Context/CartContext";

const CartList = (props) => {
  const ctx = useContext(CartContext);

  let totalamount = 0;
  ctx.items.map((item) => {
    totalamount += item.price * item.quantity;
  });
  const cartclose = () => {
    props.cartHandler();
    console.log("hi");
  };
  return (
    <div className={classes.container}>
      <ul className={classes.ui}>
        <h2 className={classes.closebtn} onClick={cartclose}>
          X
        </h2>
        <div className={classes.spantd}>
          <h3>Item</h3>
          <h3>Qty</h3>
          <h3>price</h3>
        </div>

        <CartItem />
        <h1> Total Amount</h1>
        <h1>{totalamount}</h1>
        <div className={classes.twobuttons}>
          <Button name="Purchase" className={classes.purchbtn}></Button>
        </div>
      </ul>
    </div>
  );
};
export default CartList;
