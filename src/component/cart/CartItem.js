import React, { useContext } from "react";
import Button from "../../UI/Button/Button";
import classes from "./CartItem.module.css";
import CartContext from "../../Context/CartContext";

const CartItem = (props) => {
  const ctx = useContext(CartContext);

  const removeHandler = () => {
    //ctx.RemoveItem()
    console.log("remove Handler");
  };
  return (
    <div>
      {ctx.items.map((item) => (
        <li className={classes.li} key={item.id}>
          <div>
            <img src={item.img} className={classes.imgs}></img>
          </div>
          <div>
            {" "}
            <h3>{item.title}</h3>
          </div>
          <div>
            {" "}
            <h3>{item.quantity}</h3>
          </div>
          <div>
            {" "}
            <h3>{`$${item.price}`}</h3>
          </div>
          <div>
            <input type="text" className={classes.input}></input>
          </div>
          <Button
            name="remove"
            onClick={removeHandler}
            className={classes.btn}
          ></Button>
        </li>
      ))}
    </div>
  );
};
export default CartItem;
