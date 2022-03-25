import React, { Fragment, useContext } from "react";
import "../assets/style/home.css";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import FeaturedProduct from "../components/FeaturedProduct";
import { UserContext } from "../utils/UserContext";
import AdminPanel from "../admin/adminDashboard";

const Home = () => {
  const [user, setUser, productList, setProduct] = useContext(UserContext);
  return (
    <Fragment>
      {user.isAdmin === null ? (
        <>
          <HeroBanner />
          <FeaturedProduct />
          <Footer />
        </>
      ) : (
        <AdminPanel />
      )}
    </Fragment>
  );
};

export default Home;
