/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import axios from "axios";
import React, { createContext, useReducer, useEffect, useState } from "react";
import LoadingPage from "../components/LoadingPage";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const userStatus = JSON.parse(localStorage.getItem("user"));
  const localProduct = JSON.parse(localStorage.getItem("product"));
  const localCart = JSON.parse(localStorage.getItem("cart"));
  const checkUser = localStorage.getItem("user");
  const [cart, setCart] = useState([]);
  checkUser
    ? null
    : localStorage.setItem(
        "user",
        JSON.stringify({
          id: null,
          isAdmin: null,
        })
      );
  const reducer = (state, action) => {
    switch (action.type) {
      case "userLogin":
        return localStorage.setItem(
          "user",
          JSON.stringify({ id: true, isAdmin: null })
        );

      case "adminLogin":
        return localStorage.setItem(
          "user",
          JSON.stringify({ id: null, isAdmin: true })
        );

      case "resetData":
        localStorage.removeItem("cart");
        return localStorage.setItem(
          "user",
          JSON.stringify({ id: null, isAdmin: null })
        );

      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(
    reducer,
    {
      id: null,
      isAdmin: null,
    },
    () => {
      const localData = localStorage.getItem("user");
      return localData
        ? JSON.parse(localData)
        : {
            id: null,
            isAdmin: null,
          };
    }
  );

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/products/active`)
      .then((product) => {
        localStorage.setItem(
          "product",
          JSON.stringify({ product: product.data })
        );
      });

    if (localCart !== null) {
      setCart(localCart);
    }
  }, []);

  useEffect(() => {
    setInterval(() => {
      let x = Math.floor(Math.random() * localProduct.product.length - 1);
      // console.log(x, x === -1 ? 0 : x);
      localStorage.setItem("random", x < 0 ? x * x : x >= 6 ? 3 : x);
    }, 30000);
  }, []);

  const checkData = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  const filter = (id, value, type, action) => {
    const getCart = JSON.parse(localStorage.getItem("cart"));
    let idArray = getCart.map((x) => {
      return x.id;
    });
    let idIndex = idArray.indexOf(id);
    let check = idArray.includes(id);

    if (check) {
      switch (action) {
        case "remove":
          getCart.splice(idIndex, 1);
          setCart(getCart);
          return localStorage.setItem("cart", JSON.stringify(getCart));
        case "decrement":
          getCart[idIndex].qty -= Number(value);
          if (getCart[idIndex].qty <= 0) {
            getCart.splice(idIndex, 1);
            localStorage.setItem("cart", JSON.stringify(getCart));
            return setCart(getCart);
          }
          setCart(getCart);
          return localStorage.setItem("cart", JSON.stringify(getCart));
        case "increment":
          getCart[idIndex].qty += Number(value);
          setCart(getCart);
          return localStorage.setItem("cart", JSON.stringify(getCart));
        case "onchange":
          getCart[idIndex].qty = Number(value);
          if (getCart[idIndex].qty <= 0) {
            getCart.splice(idIndex, 1);
            localStorage.setItem("cart", JSON.stringify(getCart));
            return setCart(getCart);
          }
          setCart(getCart);
          return localStorage.setItem("cart", JSON.stringify(getCart));
        default:
          getCart[idIndex].qty += value;
          setCart(getCart);
          return localStorage.setItem("cart", JSON.stringify(getCart));
      }
    } else {
      getCart.push({ id, qty: value });
      setCart(getCart);
      return localStorage.setItem("cart", JSON.stringify(getCart));
    }
  };

  const AddToCart = (id, value, type, action) => {
    const getCart = JSON.parse(localStorage.getItem("cart"));
    const user = JSON.parse(localStorage.getItem("user"));
    switch (type) {
      case "cart":
        if (getCart === null || getCart.length === 0) {
          setCart([{ id, qty: 1 }]);
          return localStorage.setItem("cart", JSON.stringify([{ id, qty: 1 }]));
        } else {
          if (action === "increment" || action === "decrement") {
            return filter(id, value, type, action);
          } else {
            document.querySelector(".popup-order-complete").style.display =
              "block";
            return filter(id, value, type, action);
          }
        }
      case "change":
        return filter(id, value, type, action);
      case "remove":
        return filter(id, value, type, action);
      case "visitor":
        return (document.querySelector(".popup-container").style.display =
          "block");
    }

    if (user.id === null) {
      return (document.querySelector(".popup-container").style.display =
        "block");
    } else {
      document.querySelector(".popup-container").style.display = "block";
      if (getCart === null) {
        setCart([{ id, qty: 1 }]);
        return localStorage.setItem("cart", JSON.stringify([{ id, qty: 1 }]));
      }
      document.querySelector(".popup-container").style.display = "block";
      filter(id, value, type, action);
    }
  };

  return (
    <>
      {localProduct ? (
        <UserContext.Provider
          value={[userStatus, dispatch, localProduct, AddToCart, cart, setCart]}
        >
          {props.children}
        </UserContext.Provider>
      ) : (
        <>
          <LoadingPage />
          {checkData()}
        </>
      )}
    </>
  );
};
