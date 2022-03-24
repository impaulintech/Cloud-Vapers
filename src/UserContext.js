import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
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
    <UserContext.Provider value={[user, setUser, productList, setProduct]}>
      {props.children}
    </UserContext.Provider>
  );
};
