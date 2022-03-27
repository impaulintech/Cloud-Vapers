/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../assets/images/logo.png";

function LoadingPage() {
  return (
    <div className="loading-page">
      <img src={logo}></img>
      <h1>LOADING...</h1>
    </div>
  );
}

export default LoadingPage;
