import React, { useContext } from "react";
import Button from "../../UI/Button/Button";
import classes from "./CartItem.module.css";
import CartContext from "../../Context/CartContext";

const CartItem = (props) => {
  const ctx = useContext(CartContext);

  const removeHandler = (event) => {
    ctx.RemoveItem(event.target.id);
    //console.log("remove Handler", id.target.id);
  };
  return (
    <div>
      {ctx.items.map((item) => (
        <li className={classes.li} key={item.id} id={item.id}>
          <div>
            <img src={item.img} className={classes.imgs} alt="dress"></img>
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
            id={item.id}
            name="remove"
            type="submit"
            onClick={removeHandler}
            className={classes.btn}
          ></Button>
        </li>
      ))}
    </div>
  );
};
export default CartItem;
