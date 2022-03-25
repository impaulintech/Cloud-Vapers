/* eslint-disable no-unused-expressions */
import React, { useContext } from "react";
import Footer from "../components/Footer";
import ProductBanner from "../components/ProductBanner";
import ProductCard from "../components/ProductCard";
import { UserContext } from "../utils/UserContext";
import "../assets/style/specific.css";
import { useParams } from "react-router-dom";

const SpecificProduct = () => {
  const [userStatus, dispatch, productList, setProduct] =
    useContext(UserContext);
  const { productId } = useParams();

  const matchProduct = () => {
    if (productList.length === 0) {
      null;
    } else {
      for (let i = 0; i < productList.product.length; i++) {
        if (productList.product[i]._id === productId) {
          return (
            <ProductBanner
              name={productList.product[i].name}
              price={productList.product[i].price}
              description={productList.product[i].description}
              image={productList.product[i].image}
            />
          );
        }
      }
    }
  };

  let g = Math.floor(Math.random() * 5);

  return (
    <React.Fragment>
      {productList.length === 0 ? null : matchProduct()}
      <div className="spcp">
        <h1 className="subh1">Similar Product</h1>
        <div className="similar">
          {productList.length === 0
            ? null
            : productList.product
                .slice(g, g + 3)
                .map((x) => (
                  <ProductCard
                    key={Math.random()}
                    name={x.name}
                    price={x.price}
                    description={x.description}
                    image={x.image}
                    id={x._id}
                  />
                ))}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default SpecificProduct;
