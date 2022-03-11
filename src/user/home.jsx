import React, { Fragment } from "react";
import "../assets/style/home.css";
import Footer from "../components/footer";
import HeroBanner from "../components/heroBanner";
import FeaturedProduct from "./../components/featuredProduct";
import Cart from "./cart";

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
