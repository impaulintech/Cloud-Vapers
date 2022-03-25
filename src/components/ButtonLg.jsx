import React from "react";
import { Link } from "react-router-dom";
import { CheckUser } from "./../utils/CheckUser";

function ButtonLg({ id }) {
  const target = document.querySelector(".popup-container");
  let y = CheckUser();
  let x = (condition) => {
    if (condition === false) {
      target.style.display = "block";
    } else {
      target.style.display = "block";
    }
  };
  return (
    <div className="button-lg">
      <Link to={`/products/${id}`} style={{ backgroundColor: "transparent" }}>
        <button className="more-details">More details</button>
      </Link>

      <button onClick={() => x(y)} className="add-to-cart">
        Add to cart
      </button>
    </div>
  );
}

export default ButtonLg;
