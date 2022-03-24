import React from "react";
import Form from "../components/Form";
import ProductBanner from "../components/ProductBanner";

const AddProduct = () => {
  return (
    <React.Fragment>
      <Form title="Add Product" />
      <ProductBanner />
    </React.Fragment>
  );
};

export default AddProduct;
