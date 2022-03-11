import React from "react";
import "../assets/style/cart.css";

const Cart = () => {
  return (
    <React.Fragment>
      <div className="cart-container">
        <div
          className="left-cart-container"
          onClick={() =>
            (document.querySelector(".cart-container").style.display = "none")
          }
        ></div>
        <div className="right-cart-container">
          <div className="order-container">
            <div className="header">
              <img
                style={{ cursor: "pointer" }}
                src="https://i.imgur.com/SEihV05.png"
                alt="close"
                width="36"
                onClick={() =>
                  (document.querySelector(".cart-container").style.display =
                    "none")
                }
              />
              <h1 style={{ margin: "0px auto" }}>Check Out</h1>
            </div>
            <div className="cart-order-list">
              {[0, 0, 0, 0, 0, 0].map(() => (
                <div className="plate" key={Math.random()}>
                  <div className="left-plate"></div>
                  <div className="right-plate">
                    <h3>Product Name</h3>
                    <p>
                      {"Product Description....Product Description....Product Description....Product Description....Product Description....".slice(
                        30
                      )}
                    </p>
                    <span>Quantity: 1</span>
                    <div className="right-plate-buttons">
                      <div className="count">
                        <button className="count-decrement">-</button>
                        <input
                          type="text"
                          className="total-count"
                          value="1"
                          onChange={() => {}}
                        />
                        <button className="count-increment">+</button>
                      </div>
                      <button className="count-delete">DELETE</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bot-content">
            <h2 className="total">
              TOTAL: <span style={{ color: "white" }}>PHP 999</span>
            </h2>
            <button className="check-out">CHECK OUT</button>
            <button className="continue-shopping">CONTINUE SHOPPING</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
