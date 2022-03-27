/* eslint-disable no-unused-expressions */
import React, { useContext } from "react";
import Form from "../components/Form";
import { useParams } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import Footer from "../components/Footer";
import AddProductButton from "../components/AddProduct";

const EditProduct = () => {
  const [userStatus, dispatch, localProduct] = useContext(UserContext);
  const { productId } = useParams();
  const matchProduct = () => {
    if (localProduct.product.length === 0) {
      null;
    } else {
      for (let i = 0; i < localProduct.product.length; i++) {
        if (localProduct.product[i]._id === productId) {
          return (
            <>
              <Form
                title="Update Product Details"
                name={localProduct.product[i].name}
                price={localProduct.product[i].price}
                description={localProduct.product[i].description}
                image={localProduct.product[i].image}
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
      <AddProductButton />
    </>
  );
};

export default EditProduct;
