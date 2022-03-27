/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import addLight from "../assets/images/add-light.png";
import "../assets/style/addProductBtn.css";
import { Link } from "react-router-dom";

function AddProductButton() {
  return (
    <>
      <Link to={"/admin/add-product"}>
        <button className="add-product-button">
          <img src={addLight} style={{ width: "100%" }}></img>
        </button>
      </Link>
    </>
  );
}

export default AddProductButton;
