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

  return (
    <div className={classes.container}>
      <ul className={classes.ui}>
        <div className={classes.spantd}>
          <h3>Item</h3>
          <h3>Qty</h3>
          <h3>price</h3>
        </div>

        <CartItem />
        <h1> Total Amount</h1>
        <h1>{totalamount}</h1>
        <Button name="Purchase" className={classes.purchbtn}></Button>
      </ul>
    </div>
  );
};
export default CartList;
