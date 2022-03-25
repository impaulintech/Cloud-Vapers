/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import { CheckUser } from "../utils/CheckUser";

const NavBar = () => {
  const toggle = () => {
    const toggle = document.querySelector(".menu");
    if (toggle.classList.contains("toggle")) {
      toggle.classList.remove("toggle");
    } else {
      toggle.classList.add("toggle");
    }
  };
  const closeToggle = () => {
    const toggle = document.querySelector(".menu");
    toggle.classList.add("toggle");
  };

  const [user, setUser, productList, setProduct] = useContext(UserContext);
  let classX = CheckUser() === false ? "popup" : "cart";
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
            <div
              className="x"
              style={{
                justifyContent:
                  user.isAdmin === null ? "space-evenly" : "flex-end",
              }}
            >
              {user.isAdmin === null ? (
                <>
                  <img
                    src="https://i.imgur.com/oCcM5tC.png"
                    width="21"
                    alt="orders"
                    onClick={() => {
                      document.querySelector(".popup-container").style.display =
                        "block";
                      closeToggle();
                    }}
                  />
                  <img
                    src="https://i.imgur.com/sKkdgD2.png"
                    width="21"
                    alt="cart"
                    onClick={() => {
                      document.querySelector(
                        `.${classX}-container`
                      ).style.display = "block";
                      closeToggle();
                    }}
                  />
                </>
              ) : null}
              <img
                src="https://i.imgur.com/yMoNMdN.png"
                width="30"
                alt="menu"
                onClick={() => {
                  toggle();
                }}
              />
            </div>
          </div>
          <div className="menu toggle" onClick={() => toggle()}>
            <ul>
              {user.isAdmin === null ? (
                <li>
                  <Link to="/">Home</Link>
                </li>
              ) : null}
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                {user.isAdmin === null ? (
                  user.id === null ? (
                    <a href="/login">Login</a>
                  ) : (
                    <a href="/">Logout</a>
                  )
                ) : (
                  <a href="/">Logout</a>
                )}
              </li>
              {user.isAdmin === null ? (
                user.id === null ? (
                  <li>
                    <a href="/register">Register</a>
                  </li>
                ) : null
              ) : null}
            </ul>
          </div>
          {user.isAdmin === null ? (
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
                    (document.querySelector(
                      `.${classX}-container`
                    ).style.display = "block")
                  }
                />
              </span>
            </div>
          ) : null}
        </nav>
      )}
    </React.Fragment>
  );
};

export default NavBar;
