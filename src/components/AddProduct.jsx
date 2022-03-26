/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import addLight from "../assets/images/add-light.png";
import "../assets/style/addProductBtn.css";

function AddProductButton() {
  return (
    <>
      <button className="add-product-button">
        <img src={addLight} style={{ width: "100%" }}></img>
      </button>
    </>
  );
}

export default AddProductButton;
