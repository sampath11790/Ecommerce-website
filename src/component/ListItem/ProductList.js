import React from "react";
import classes from "./ProductList.module.css";
import ProductListItem from "./ProductListItem";

const ProductList = (props) => {
  return (
    <div>
      <ul className={classes.ul}>
        {props.items.map((item) => (
          <ProductListItem
            title={item.title}
            key={item.id}
            id={item.id}
            price={item.price}
            img={item.imageUrl[0]}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
