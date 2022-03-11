/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import PopUp from "./popup";

const NavBar = () => {
  return (
    <React.Fragment>
      {window.location.pathname === "/login" ||
      window.location.pathname === "/register" ? (
        ""
      ) : (
        <nav className="nav">
          <div className="logo">
            <h1>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                cloud vapers
              </Link>
            </h1>
            <div className="x">
              <img
                src="https://i.imgur.com/oCcM5tC.png"
                width="21"
                alt="orders"
                onClick={() =>
                  (document.querySelector(".popup-container").style.display =
                    "block")
                }
              />
              <img
                src="https://i.imgur.com/sKkdgD2.png"
                width="21"
                alt="cart"
                onClick={() =>
                  (document.querySelector(".cart-container").style.display =
                    "block")
                }
              />
              <img
                src="https://i.imgur.com/yMoNMdN.png"
                width="30"
                alt="menu"
                onClick={() => {
                  const toggle = document.querySelector(".menu");
                  if (toggle.classList.contains("toggle")) {
                    toggle.classList.remove("toggle");
                  } else {
                    toggle.classList.add("toggle");
                  }
                }}
              />
            </div>
          </div>
          <div className="menu toggle">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
            </ul>
          </div>
          <div className="cart">
            <span>
              <img
                src="https://i.imgur.com/oCcM5tC.png"
                width="25"
                onClick={() =>
                  (document.querySelector(".popup-container").style.display =
                    "block")
                }
              />
            </span>
            <span>
              <img
                src="https://i.imgur.com/sKkdgD2.png"
                width="27"
                onClick={() =>
                  (document.querySelector(".cart-container").style.display =
                    "block")
                }
              />
            </span>
          </div>
        </nav>
      )}
    </React.Fragment>
  );
};

export default NavBar;
