import React, { useContext, useEffect } from "react";
import Button from "../../UI/Button/Button";
import classes from "./CartItem.module.css";
import CartContext from "../../Context/CartContext";

const CartItem = (props) => {
  const ctx = useContext(CartContext);
  useEffect(() => {
    console.log("outside");
    const FetchFunction = async () => {
      try {
        console.log("insdie");
        const response = await fetch(
          "https://crudcrud.com/api/494970bb542e414fa91aa31c281dc88d/sampathgmailcom"
        );
        const x = await response.json();
        // for (var i = 0; i < x.length; i++) {
        //   ctx.addItem(x[i]);
        // }
        ctx.addCrudData([...x]);
        console.log([...x]);
      } catch (error) {
        console.log(error);
      }
    };
    FetchFunction();
  }, []);

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
