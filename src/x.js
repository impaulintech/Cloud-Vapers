import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav";
import Home from "./user/home";
import Products from "./user/products";
import Login from "./user/login";
import Register from "./user/register";
import SpecificProduct from "./user/specificProduct";
import "./assets/style/App.css";
import AdminPanel from "./admin/adminDashboard";
import { UserProvider } from "./UserContext";

class App extends Component {
  state = {
    product: [],
    active: "/",
  };

  setActive = () => {
    if (window.location.pathname.length > 15) {
      this.setState({ active: "products" });
    } else {
      if (window.location.pathname === "/") {
        this.setState({ active: "/" });
      } else {
        let active = window.location.pathname.slice(1);
        this.setState({ active });
      }
    }
  };

  componentDidUpdate() {}

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/products/active`)
      .then((res) => res.json())
      .then((product) => this.setState({ product }));

    if (window.location.pathname.length > 15) {
      this.setState({ active: "products" });
    }
  }

  render() {
    const { product, active } = this.state;
    return (
      <React.Fragment>
        <UserProvider>
          <Router>
            <NavBar active={active} onClick={this.setActive} />
            <div className="content">
              <Routes>
                <Route path="/admin/dashboard" element={<AdminPanel />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/products"
                  element={<Products product={product} />}
                />
                <Route
                  path="/products/:productId"
                  element={
                    <SpecificProduct
                      productList={product}
                      onClick={this.setActive}
                    />
                  }
                />
                <Route
                  path="/"
                  element={<Home product={product} onClick={this.setActive} />}
                />
              </Routes>
            </div>
          </Router>
        </UserProvider>
      </React.Fragment>
    );
  }
}

export default App;
