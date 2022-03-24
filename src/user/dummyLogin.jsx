/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import { UserContext } from "../UserContext";

function DummyLogin() {
  const [user, setUser, productList, setProduct] = useContext(UserContext);
  return (
    <div>
      <button
        onClick={() =>
          user.id === null
            ? setUser({
                id: true,
                isAdmin: null,
              })
            : setUser({
                id: null,
                isAdmin: null,
              })
        }
      >
        LOGIN
      </button>
    </div>
  );
}

export default DummyLogin;
