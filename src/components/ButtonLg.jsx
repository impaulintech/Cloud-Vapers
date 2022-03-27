/* eslint-disable no-unused-expressions */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";

function ButtonLg({ id }) {
  const [userStatus, dispatch, localProduct, AddToCart, cart] =
    useContext(UserContext);
  return (
    <>
      <div className="button-lg">
        <Link to={`/products/${id}`} style={{ backgroundColor: "transparent" }}>
          <button className="more-details">More details</button>
        </Link>

        <button
          onClick={() => {
            AddToCart(id);
          }}
          className="add-to-cart"
        >
          Add to cart
        </button>
      </div>
    </>
  );
}

export default ButtonLg;
