/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import React, { useState, createContext, useEffect, useReducer } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const userStatus = JSON.parse(localStorage.getItem("user"));

  const reducer = (state, action) => {
    switch (action.type) {
      case "userLogin":
        return localStorage.setItem(
          "user",
          JSON.stringify({
            id: true,
            isAdmin: null,
          })
        );
      case "adminLogin":
        return localStorage.setItem(
          "user",
          JSON.stringify({
            id: null,
            isAdmin: true,
          })
        );
      case "resetData":
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

  const [productList, setProduct] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products/active`)
      .then((res) => res.json())
      .then((product) => {
        setProduct({ product });
      });
  }, []);

  return (
    <UserContext.Provider
      value={[userStatus, dispatch, productList, setProduct]}
    >
      {props.children}
    </UserContext.Provider>
  );
};
