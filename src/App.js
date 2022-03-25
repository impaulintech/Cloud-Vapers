import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Nav";
import PopUp from "./components/Popup";
import Home from "./user/Home";
import Products from "./user/Products";
import Login from "./user/Login";
import Register from "./user/Register";
import SpecificProduct from "./user/SpecificProduct";
import Cart from "./user/Cart";
import AdminPanel from "./admin/adminDashboard";
import AddProduct from "./admin/addProduct";
import EditProduct from "./admin/editProduct";
import { UserProvider } from "./utils/UserContext";
import "./assets/style/App.css";
import "./assets/style/popup.css";
import DummyLogin from "./user/dummyLogin";

const App = () => {
  return (
    <UserProvider>
      <React.Fragment>
        <PopUp />
        <Cart />
        <DummyLogin />
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
            <Route
              path="/admin/edit-product/:productId"
              element={<EditProduct />}
            />
          </Routes>
        </Router>
      </React.Fragment>
    </UserProvider>
  );
};

export default App;
