import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({
    id: null,
    isAdmin: null,
  });
  const x = "Hello";

  return (
    <UserContext.Provider value={x}>{props.children}</UserContext.Provider>
  );
};
