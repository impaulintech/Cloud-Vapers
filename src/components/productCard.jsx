import React from "react";
import ButtonSm from "./ButtonSm";

const ProductCard = ({ name, price, description, image, id }) => {
  return (
    <div className="card">
      <div
        className="image"
        style={{ backgroundImage: `url('${image}')` }}
        onClick={() => console.log(`/products/${id}`)}
      >
        <div className="discount">50% OFF</div>
      </div>
      <div className="title">{name}</div>
      <div className="description">{description.slice(0, 100) + "..."}</div>
      <div className="price">
        <span className="current">PHP {price}.oo</span>
        <span className="previous">
          <del>PHP {price * 2}.oo</del>
        </span>
      </div>
      <ButtonSm id={id} />
    </div>
  );
};

export default ProductCard;
