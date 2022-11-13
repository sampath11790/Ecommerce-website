import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import classes from "./FirstItem.module.css";
import CartContext from "../../../Context/CartContext";
import Button from "../../../UI/Button/Button";
import ProductImage from "../ProductImage";

const FirstItem = (props) => {
  const ctx = useContext(CartContext);
  const parms = useParams();

  let list;
  props.items.map((item) => {
    if (Number(parms.id) === item.id) {
      list = item;
    }
    return list;
  });

  // const Images = list.imageUrl.map((item, index) => (
  //   <ProductImage items={item} key={index} id={index} />
  // ));

  // const bigImage = list.imageUrl[0];
  const onclickHandler = () => {
    // // let b={...props,quantity:1}
    ctx.addItem({ ...list, quantity: 1 });
    console.log("item handler");
  };

  return (
    <div className={classes.container}>
      <div className={classes.containermain}>
        <div className={classes.box1}>
          <ProductImage items={list.imageUrl}></ProductImage>
        </div>
        <div className={classes.box2}>
          <div className={classes.title}>
            <h3>{list.title}</h3>
            <h2>{`$${list.price}`}</h2>
            <h3>Product Details</h3>
            <div className={classes.size}>
              <h4> Size </h4>
              <ul className={classes.sizeli}>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>XXL</li>
              </ul>
            </div>
          </div>
          <Button
            type="button"
            name="Add To Cart"
            onClick={onclickHandler}
            className={classes.addbtn}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default FirstItem;
