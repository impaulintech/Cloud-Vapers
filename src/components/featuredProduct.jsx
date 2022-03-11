import React, { useState, useEffect } from "react";
import ProductCard from "./productCard";

const FeaturedProduct = () => {
  return (
    <div className="featured-products">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default FeaturedProduct;
