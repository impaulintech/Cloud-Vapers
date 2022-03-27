import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { AddToCart } from "./../utils/AddToCart";

function ButtonSm({ id }) {
  const [userStatus] = useContext(UserContext);
  return (
    <div className="button-sm">
      <a
        href={
          userStatus.isAdmin === null
            ? `/products/${id}`
            : `/admin/edit-product/${id}`
        }
        style={{
          textDecoration: "none",
          color: "white",
          backgroundColor: "transparent",
        }}
      >
        <button className="more-details-sm">
          {userStatus.isAdmin === true ? "Edit" : "More details"}
        </button>
      </a>
      <button className="add-to-cart-sm" onClick={() => AddToCart(id)}>
        {userStatus.isAdmin === true ? "Disable" : "Add to cart"}
      </button>
    </div>
  );
}

export default ButtonSm;
