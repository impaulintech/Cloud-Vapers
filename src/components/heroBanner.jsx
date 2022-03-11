import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="product-model">
      <div className="left-content">
        <h1>Geekvape Aegis Max 100W</h1>
        <h2>Kit w/ Zeus Tank</h2>
        <div className="price">
          <span className="current">PHP 500.oo</span>
          <span className="previous">
            <del>PHP 1,000.oo</del>
          </span>
        </div>
        <div className="button-lg">
          <Link
            to={`/products/6228b7ec62657f8493a586da`}
            style={{ backgroundColor: "transparent" }}
          >
            <button className="more-details">More details</button>
          </Link>

          <button
            onClick={() => console.log("add to cart")}
            className="add-to-cart"
          >
            Add to cart
          </button>
        </div>
      </div>

      <div className="right-content">
        <div className="model-image"></div>
      </div>
    </div>
  );
};

export default HeroBanner;
