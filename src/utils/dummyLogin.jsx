/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";

function DummyLogin() {
  const [userStatus, dispatch, localProduct] = useContext(UserContext);
  return (
    <div
      style={{
        position: "fixed",
        zIndex: "99999",
        bottom: "100px",
        right: "210px",
      }}
    >
      <button
        style={{
          position: "fixed",
          zIndex: "99999",
          backgroundColor: userStatus.id === null ? "green" : "red",
          padding: "20px",
          borderRadius: "100px",
          fontWeight: "bold",
          border: "none",
          width: "200px",
        }}
        onClick={() =>
          userStatus.id === null
            ? dispatch({ type: "userLogin" })
            : dispatch({ type: "resetData" })
        }
      >
        {userStatus.id === null ? "FAKE USER LOGIN" : "FAKE USER LOGOUT"}
      </button>
      <button
        style={{
          position: "fixed",
          backgroundColor: userStatus.isAdmin === null ? "green" : "red",
          padding: "20px ",
          borderRadius: "100px",
          fontWeight: "bold",
          border: "none",
          width: "200px",
          right: "240px",
        }}
        onClick={() =>
          userStatus.isAdmin === null
            ? dispatch({ type: "adminLogin" })
            : dispatch({ type: "resetData" })
        }
      >
        {userStatus.isAdmin === null ? "FAKE ADMIN LOGIN" : "FAKE ADMIN LOGOUT"}
      </button>
    </div>
  );
}

export default DummyLogin;
