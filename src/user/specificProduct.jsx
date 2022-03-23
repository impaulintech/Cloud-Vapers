import React, { useEffect, useState } from "react";
import "../assets/style/specific.css";
import Footer from "../components/footer";
import ProductBanner from "../components/productBanner";
import ProductCard from "../components/productCard";

const SpecificProduct = () => {
  return (
    <React.Fragment>
      <ProductBanner />
      <div className="spcp">
        <h1 className="subh1">Similar Product</h1>
        <div className="similar">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default SpecificProduct;
