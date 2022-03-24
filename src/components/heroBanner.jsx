/* eslint-disable no-unused-expressions */
import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import ButtonLg from "./ButtonLg";

const HeroBanner = () => {
  const [user, setUser, productList, setProduct] = useContext(UserContext);
  // const { name, price, description, image, id } =
  //   productList.product === undefined ? null : productList.product[1];
  let x = [];
  productList.product === undefined ? null : (x = productList.product[6]);
  const { name, price, image, _id: id } = x;
  return (
    <div className="product-model">
      <div className="left-content">
        <h1>{name}</h1>
        <h2>Kit w/ Zeus Tank</h2>
        <div className="price">
          <span className="current">PHP {price}.oo</span>
          <span className="previous">
            <del>PHP {price * 2}.oo</del>
          </span>
        </div>
        <ButtonLg id={id} />
      </div>

      <div className="right-content">
        <div
          className="model-image"
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
      </div>
    </div>
  );
};

export default HeroBanner;
