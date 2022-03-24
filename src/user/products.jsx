import React, { useContext } from "react";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import banner from "../assets/images/banner.png";
import { UserContext } from "../UserContext";
import "../assets/style/products.css";

const Products = () => {
  const [user, setUser, productList, setProduct] = useContext(UserContext);
  return (
    <React.Fragment>
      <div className="all-products">
        <img
          src={banner}
          alt="banner"
          style={{ marginTop: "-50px", marginBottom: "50px" }}
        />
        {productList.length === 0
          ? null
          : productList.product.map((x) => (
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
      <Footer />
    </React.Fragment>
  );
};

export default Products;
