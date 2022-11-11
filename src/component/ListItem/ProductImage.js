import React, { useState } from "react";
import clss from "./ProductImages.module.css";

const ProductImage = (props) => {
  const [image, setImage] = useState(props.items[0]);
  // console.log(image[0]);
  const BigimageHandler = (event) => {
    let id = Number(event.target.id);
    setImage(props.items[id]);
    //console.log("BigimageHandler", props.items[id]);
  };
  return (
    <div className={clss["container"]}>
      <div className={clss["thumb-images"]}>
        {props.items.map((item, index) => {
          return (
            <img
              id={index}
              src={item}
              key={index}
              alt="dress"
              onClick={BigimageHandler}
            ></img>
          );
        })}
      </div>
      <div className={clss["big-images"]}>
        <img src={image} key={1} alt="dress"></img>
      </div>
    </div>
  );
};

export default ProductImage;
