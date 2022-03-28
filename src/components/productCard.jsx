import React, { useContext } from "react";
import ButtonSm from "./ButtonSm";
import { UserContext } from "../utils/UserContext";

const ProductCard = ({ name, price, description, image, id }) => {
  const [userStatus, dispatch, localProduct] = useContext(UserContext);
  return (
    <div className="card">
      <div
        className="image"
        style={{ backgroundImage: `url('${image}')` }}
        onClick={() =>
          (window.location =
            userStatus.isAdmin === null
              ? `/products/${id}`
              : `/admin/edit-product/${id}`)
        }
      >
        <div className="discount">50% OFF</div>
      </div>
      <div className="title">{name}</div>
      <div className="description">{description.slice(0, 100) + "..."}</div>
      <div className="price">
        <span className="current">PHP {price.toLocaleString("en-US")}.oo</span>
        <span className="previous">
          <del>PHP {(price * 2).toLocaleString("en-US")}.oo</del>
        </span>
      </div>
      <ButtonSm id={id} />
    </div>
  );
};

export default ProductCard;
