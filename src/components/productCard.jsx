import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="card">
      <div
        className="image"
        style={{ backgroundImage: `url('https://i.imgur.com/y2LvNg4.png')` }}
        onClick={() => console.log(`/products/id`)}
      >
        <div className="discount">50% OFF</div>
      </div>
      <div className="title">Name from productCard</div>
      <div className="description">description from productCard</div>
      <div className="price">
        <span className="current">PHP price.oo</span>
        <span className="previous">
          <del>PHP price.oo</del>
        </span>
      </div>
      <div className="button-sm">
        <a
          href={`/products/id`}
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "transparent",
          }}
        >
          <button className="more-details-sm">More details</button>
        </a>
        <button className="add-to-cart-sm">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
