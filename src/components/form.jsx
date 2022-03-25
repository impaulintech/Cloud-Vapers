/* eslint-disable no-fallthrough */
import React, { useState, useReducer } from "react";
import "../assets/style/formStyle.css";
import ProductBanner from "./ProductBanner";

const Form = ({ name, price, description, title, image }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "name":
        return { ...state, name: action.target };
      case "price":
        return { ...state, price: action.target };
      case "description":
        return { ...state, description: action.target };
      case "image":
        return { ...state, image: action.target };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    name,
    price,
    description,
    image,
  });

  return (
    <>
      <div className="form-container">
        <h1>{title}</h1>
        <br />
        <form className="form">
          <input
            type="text"
            id="name"
            placeholder="Product Name"
            autoComplete="off"
            autoFocus="focus"
            defaultValue={name}
            onChange={(e) => dispatch({ type: "name", target: e.target.value })}
            maxLength="90"
          />
          <textarea
            id="description"
            placeholder="Product Details"
            autoComplete="off"
            defaultValue={description}
            onChange={(e) =>
              dispatch({ type: "description", target: e.target.value })
            }
          ></textarea>
          <div>
            <input
              type="number"
              id="price"
              placeholder="Product Price"
              autoComplete="off"
              defaultValue={price}
              onChange={(e) =>
                dispatch({ type: "price", target: e.target.value })
              }
            />
            <input
              type="text"
              id="image"
              placeholder="Product Image Link"
              autoComplete="off"
              defaultValue={image}
              onChange={(e) =>
                dispatch({ type: "image", target: e.target.value })
              }
            />
          </div>
          <button className="submit-form">Submit</button>
        </form>
      </div>

      <ProductBanner state={state} />
    </>
  );
};

export default Form;
