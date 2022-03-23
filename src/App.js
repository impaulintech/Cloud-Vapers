import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav";
import PopUp from "./components/popup";
import Home from "./user/home";
import Products from "./user/products";
import Login from "./user/login";
import Register from "./user/register";
import SpecificProduct from "./user/specificProduct";
import Cart from "./user/cart";
import AdminPanel from "./admin/adminDashboard";
import AddProduct from "./admin/addProduct";
import EditProduct from "./admin/editProduct";
import { UserProvider } from "./UserContext";
import "./assets/style/App.css";
import "./assets/style/popup.css";

const App = () => {
  const [productList, setProduct] = useState([]);

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_URL}/products/active`)
  //     .then((res) => res.json())
  //     .then((product) => {
  //       setProduct({ product });
  //     });
  // }, []);

  return (
    <UserProvider>
      <React.Fragment>
        <PopUp />
        <Cart />
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<SpecificProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminPanel />} />
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route path="/admin/edit-product" element={<EditProduct />} />
          </Routes>
        </Router>
      </React.Fragment>
    </UserProvider>
  );
};

export default App;
