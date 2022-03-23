import React from "react";
import "../assets/style/products.css";
import Footer from "../components/footer";
import ProductCard from "../components/productCard";
import banner from "../assets/images/banner.png";

const Products = () => {
  let x = [0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <React.Fragment>
      <div className="all-products">
        <img
          src={banner}
          alt="banner"
          style={{ marginTop: "-50px", marginBottom: "50px" }}
        />
        {x.map(() => (
          <ProductCard key={Math.random()} />
        ))}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Products;
