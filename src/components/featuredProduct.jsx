import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { UserContext } from "../UserContext";

const FeaturedProduct = () => {
  const [user, setUser, productList, setProduct] = useContext(UserContext);
  let g = Math.floor(Math.random() * 5);
  return (
    <div className="featured-products">
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
  );
};

export default FeaturedProduct;
