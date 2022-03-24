import React from "react";
import { CheckUser } from "./../utils/CheckUser";

function ButtonSm({ id }) {
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
    <div className="button-sm">
      <a
        href={`/products/${id}`}
        style={{
          textDecoration: "none",
          color: "white",
          backgroundColor: "transparent",
        }}
      >
        <button className="more-details-sm">More details</button>
      </a>
      <button className="add-to-cart-sm" onClick={() => x(y)}>
        Add to cart
      </button>
    </div>
  );
}

export default ButtonSm;
