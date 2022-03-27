import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export function CheckUser() {
  const [userStatus] = useContext(UserContext);
  return userStatus.id === null ? false : true;
}
export function CheckAdmin() {
  const [userStatus] = useContext(UserContext);
  return userStatus.isAdmin === null ? false : true;
}
