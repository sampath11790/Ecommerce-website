import React from "react";
import clss from "./ProductReview.module.css";

const ProductReview = () => {
  return (
    <div className={clss["main"]}>
      <h1>Review</h1>
      <div className={clss["main-cont"]}>
        <div className={clss["review-container"]}>
          <div className={clss["profile-img"]}>
            <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
          </div>
          <h3>sampath</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, quaerat quis? Provident temporibus architecto
            asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam
            tenetur voluptates incidunt blanditiis sed atque cumque.
          </p>
        </div>
        <div className={clss["review-container"]}>
          <div className={clss["profile-img"]}>
            <img src="https://comps.gograph.com/circle-icon-football-fans-avatar_gg95866382.jpg" />
          </div>
          <h3>Vijay</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, quaerat quis? Provident temporibus architecto
            asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam
            tenetur voluptates incidunt blanditiis sed atque cumque.
          </p>
        </div>
        <div className={clss["review-container"]}>
          <div className={clss["profile-img"]}>
            <img src="https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/cd/91/7f/cd917f59-1854-4753-c568-56834eaf4123/source/512x512bb.jpg" />
          </div>
          <h3>Madesh</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, quaerat quis? Provident temporibus architecto
            asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam
            tenetur voluptates incidunt blanditiis sed atque cumque.
          </p>
        </div>
        <div className={clss["review-container"]}>
          <div className={clss["profile-img"]}>
            <img src="https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/13/fe/7b/13fe7bfc-0c99-b2bb-3bd2-7d7bd432350c/source/512x512bb.jpg" />
          </div>
          <h3>kutty</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, quaerat quis? Provident temporibus architecto
            asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam
            tenetur voluptates incidunt blanditiis sed atque cumque.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductReview;
