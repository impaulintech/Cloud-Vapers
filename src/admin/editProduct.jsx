import React from "react";
import Form from "../components/form";
import ProductBanner from "../components/productBanner";

const EditProduct = () => {
  return (
    <React.Fragment>
      <Form title="Update Product Details" />
      <ProductBanner />
    </React.Fragment>
  );
};

export default EditProduct;
