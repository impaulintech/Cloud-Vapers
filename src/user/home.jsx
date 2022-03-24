import React, { Fragment } from "react";
import "../assets/style/home.css";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import FeaturedProduct from "../components/FeaturedProduct";

const Home = () => {
  return (
    <Fragment>
      <HeroBanner />
      <FeaturedProduct />
      <Footer />
    </Fragment>
  );
};

export default Home;
