import React from "react";
import Form from "../components/form";
import ProductBanner from "../components/productBanner";

const AddProduct = () => {
  return (
    <React.Fragment>
      <Form title="Add Product" />
      <ProductBanner />
    </React.Fragment>
  );
};

export default AddProduct;
