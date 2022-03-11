import React, { useEffect, useState } from "react";
import "../assets/style/specific.css";
import Footer from "../components/footer";
import ProductCard from "../components/productCard";

const SpecificProduct = () => {
  return (
    <React.Fragment>
      <div className="spcp">
        <div className="banner">
          <div className="left-banner">
            <div className="card">
              <div
                className="image"
                style={{
                  backgroundImage: `url('https://i.imgur.com/y2LvNg4.png')`,
                }}
              >
                <div className="discount">50% OFF</div>
              </div>
              <div className="sub-image">
                {[0, 0, 0, 0].map(() => (
                  <div
                    key={Math.random()}
                    className="image-mini"
                    style={{
                      backgroundImage: `url('https://i.imgur.com/y2LvNg4.png')`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="right-banner">
            <div className="title">Name</div>
            <div className="description">
              <p>Description</p>
            </div>
            <div className="star"></div>
            <div className="price">
              <span className="current">PHP price.oo</span>
              <span className="previous">
                <del>PHP price.oo</del>
              </span>
            </div>
            <div className="button-sm">
              <button className="add-to-cart-sm specific-btn-sm">
                Add to cart
              </button>
            </div>
          </div>
        </div>
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
