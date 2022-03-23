import React from "react";
import "../assets/style/formStyle.css";

const Form = ({ title }) => {
  return (
    <div className="form-container">
      <h1>{title}</h1>
      <br />
      <form className="form">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          autoComplete="off"
          autoFocus="focus"
        />
        <textarea
          name="description"
          placeholder="Product Details"
          autoComplete="off"
        ></textarea>
        <div>
          <input
            type="number"
            name="price"
            placeholder="Product Price"
            autoComplete="off"
          />
          <input
            type="text"
            name="image"
            placeholder="Product Image Link"
            autoComplete="off"
          />
        </div>
        <button className="submit-form">Submit</button>
      </form>
    </div>
  );
};

export default Form;
