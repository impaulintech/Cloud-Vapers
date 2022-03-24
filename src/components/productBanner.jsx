import React from "react";
import { CheckUser } from "../utils/CheckUser";

const ProductBanner = ({ name, price, description, image }) => {
  const target = document.querySelector(".popup-container");
  let y = CheckUser();
  let x = (condition) => {
    if (condition === false) {
      target.style.display = "block";
    } else {
      alert("Product was added to your cart.");
    }
  };
  return (
    <div className="banner">
      <div className="left-banner">
        <div className="card">
          <div
            className="image"
            style={{
              backgroundImage: `url('${image}')`,
            }}
          >
            <div className="discount">50% OFF</div>
          </div>
          <div className="sub-image">
            {[0, 0, 0, 0].map(() => (
              <div
                key={Math.random()}
                className="image-mini"
                style={{
                  backgroundImage: `url('${image}')`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="right-banner">
        <div className="title">{name}</div>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="star"></div>
        <div className="price">
          <span className="current">PHP {price}.oo</span>
          <span className="previous">
            <del>PHP {price * 2}.oo</del>
          </span>
        </div>
        <div className="button-sm">
          <button
            className="add-to-cart-sm specific-btn-sm"
            onClick={() => x(y)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
