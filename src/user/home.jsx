import React, { Fragment, useContext } from "react";
import "../assets/style/home.css";
import Footer from "../components/footer";
import HeroBanner from "../components/heroBanner";
import FeaturedProduct from "./../components/featuredProduct";
import { UserContext } from "../UserContext";

const Home = () => {
  const value = useContext(UserContext);
  console.log(value);
  return (
    <Fragment>
      <HeroBanner />
      <FeaturedProduct />
      <Footer />
    </Fragment>
  );
};

export default Home;
