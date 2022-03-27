import React, { useContext } from "react";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import banner from "../assets/images/banner.png";
import { UserContext } from "../utils/UserContext";
import AddProductButton from "../components/AddProduct";
import dummy from "../assets/images/dummy.png";
import "../assets/style/products.css";

const Products = () => {
  const [userStatus, dispatch, localProduct] = useContext(UserContext);
  return (
    <React.Fragment>
      <div className="all-products">
        <img
          src={banner}
          alt="banner"
          style={{ marginTop: "-50px", marginBottom: "50px" }}
        />
        {localProduct.product.length === 0
          ? [0, 0, 0].map((x) => (
              <ProductCard
                key={Math.random()}
                name={"Lorem ipsum dolor sit amet..."}
                price={"000"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
                image={dummy}
              />
            ))
          : localProduct.product.map((x) => (
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
      {userStatus.isAdmin === null ? null : <AddProductButton />}
      <Footer />
    </React.Fragment>
  );
};

export default Products;
