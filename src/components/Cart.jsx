import React, { useContext } from "react";
import "../assets/style/cart.css";
import { UserContext } from "../utils/UserContext";

const Cart = () => {
  const [userStatus, dispatch, localProduct, AddToCart, cart] =
    useContext(UserContext);
  let totalPrice = 0;
  let cartData = [];

  cart.map((eachId) => {
    for (let i = 0; i < localProduct.product.length; i++) {
      if (eachId.id === localProduct.product[i]._id) {
        cartData.push({ ...localProduct.product[i], qty: eachId.qty });
      }
    }

    return eachId.qty;
  });

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

              <h1 style={{ margin: "0px auto" }}>Check Out </h1>
            </div>
            <div className="cart-order-list">
              {cartData.map((item) => (
                <React.Fragment key={Math.random()}>
                  <span style={{ display: "none" }}>
                    {(totalPrice += item.price * item.qty)}
                  </span>
                  <div className="plate">
                    <div
                      className="left-plate"
                      style={{ backgroundImage: `url("${item.image}")` }}
                    ></div>
                    <div className="right-plate">
                      <h3>{item.name}</h3>
                      <span>
                        <strong style={{ color: "var(--font-color-disabled)" }}>
                          Price:&nbsp;
                        </strong>

                        <span style={{ fontWeight: 300 }}>
                          &#8369;{item.price}
                        </span>
                      </span>
                      <span>
                        <strong style={{ color: "var(--font-color-disabled)" }}>
                          Quantity:&nbsp;
                        </strong>
                        <span style={{ fontWeight: 300 }}>{item.qty}</span>
                      </span>
                      <span>
                        <strong style={{ color: "var(--font-color-disabled)" }}>
                          Sub Total:&nbsp;
                        </strong>
                        <span style={{ fontWeight: 300 }}>
                          &#8369;{item.price * item.qty}
                        </span>
                      </span>
                      <div className="right-plate-buttons">
                        <div className="count">
                          <button
                            className="count-decrement"
                            onClick={() => {
                              AddToCart(item._id, 1, "cart", "decrement");
                            }}
                            disabled={item.qty === 1 ? "disable" : ""}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            className="total-count"
                            defaultValue={Number(item.qty)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                AddToCart(
                                  item._id,
                                  e.target.value,
                                  "change",
                                  "onchange"
                                );
                              }
                              setTimeout(() => {
                                AddToCart(
                                  item._id,
                                  e.target.value,
                                  "change",
                                  "onchange"
                                );
                              }, 3000);
                            }}
                          />
                          <button
                            className="count-increment"
                            onClick={() => {
                              AddToCart(item._id, 1, "cart", "increment");
                            }}
                          >
                            +
                          </button>
                        </div>
                        <button className="count-delete">DELETE</button>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="bot-content">
            <h2 className="total">
              TOTAL:{" "}
              <span style={{ color: "white" }}>&#8369; {totalPrice}</span>
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
