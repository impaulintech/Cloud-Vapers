/* eslint-disable no-unused-expressions */
import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import ButtonLg from "./ButtonLg";

const HeroBanner = () => {
  const [user, setUser, productList, setProduct] = useContext(UserContext);
  let x = [];
  productList.product === undefined
    ? null
    : (x = productList.product[Math.floor(Math.random() * 8)]);
  const { name, price, image, _id: id } = x;

  const xtyle = {
    border: "3px solid var(--color-tertiary)",
    width: "150px",
    textAlign: "center",
    color: "var(--color-tertiary)",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

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

      <div
        className="right-content"
        onClick={() => (window.location = `/products/${id}`)}
      >
        <div
          className="model-image"
          style={{ backgroundImage: `url('${image}')` }}
        >
          <div className="discount" style={xtyle}>
            Spotlight
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
