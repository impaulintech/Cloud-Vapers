import React from "react";
import Form from "../components/Form";
import ProductBanner from "../components/ProductBanner";

const EditProduct = () => {
  return (
    <React.Fragment>
      <Form title="Update Product Details" />
      <ProductBanner />
    </React.Fragment>
  );
};

export default EditProduct;
