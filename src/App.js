import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav";
import Home from "./user/home";
import Products from "./user/products";
import Login from "./user/login";
import Register from "./user/register";
import { UserProvider } from "./UserContext";
import "./assets/style/App.css";
import "./assets/style/popup.css";
import SpecificProduct from "./user/specificProduct";
import Cart from "./user/cart";
import PopUp from "./components/popup";

const App = () => {
  const [user, setUser] = useState({
    id: null,
    isAdmin: null,
  });

  const [productList, setProduct] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products/active`)
      .then((res) => res.json())
      .then((product) => {
        setProduct({ product });
      });
  }, []);

  return (
    <React.Fragment>
      <PopUp />
      <Cart />
      <UserProvider value={{ user, setUser }}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<SpecificProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </UserProvider>
    </React.Fragment>
  );
};

export default App;
