/* eslint-disable no-unused-expressions */
import React, { useContext } from "react";
import Form from "../components/Form";
import { useParams } from "react-router-dom";
import ProductBanner from "../components/ProductBanner";
import { UserContext } from "../utils/UserContext";
import Footer from "../components/Footer";

const EditProduct = () => {
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
            <>
              <Form
                title="Update Product Details"
                name={productList.product[i].name}
                price={productList.product[i].price}
                description={productList.product[i].description}
                image={productList.product[i].image}
              />
            </>
          );
        }
      }
    }
  };

  return (
    <>
      {userStatus.isAdmin === true ? (
        <React.Fragment>
          {matchProduct()}
          <Footer />
        </React.Fragment>
      ) : (
        (window.location = "/")
      )}
    </>
  );
};

export default EditProduct;
