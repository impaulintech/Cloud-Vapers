import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export function CheckUser() {
  const [user] = useContext(UserContext);
  return user.id === null ? false : true;
}
