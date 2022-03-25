import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { CheckUser } from "../utils/CheckUser";

const ProductBanner = ({ name, price, description, image, state }) => {
  const [userStatus, dispatch, productList, setProduct] =
    useContext(UserContext);
  const target = document.querySelector(".popup-container");
  let y = CheckUser();
  let x = (condition) => {
    if (condition === false) {
      target.style.display = "block";
    } else {
      target.style.display = "block";
    }
  };
  return (
    <>
      <div className="banner">
        <div className="left-banner">
          <div className="card">
            <div
              className="image"
              style={{
                backgroundImage:
                  userStatus.isAdmin === null
                    ? `url('${image}')`
                    : `url('${state.image}')`,
              }}
            >
              <div className="discount">50% OFF</div>
            </div>
            <div className="sub-image">
              {[0, 0, 0, 0].map(() => (
                <div
                  key={Math.random()}
                  className="image-mini"
                  style={{
                    backgroundImage:
                      userStatus.isAdmin === null
                        ? `url('${image}')`
                        : `url('${state.image}')`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="right-banner">
          <div className="title">
            {userStatus.isAdmin === null ? name : state.name}
          </div>
          <div className="description">
            <p>
              {userStatus.isAdmin === null ? description : state.description}
            </p>
          </div>
          <div className="star"></div>
          <div className="price">
            <span className="current">
              PHP {userStatus.isAdmin === null ? price : state.price}.oo
            </span>
            <span className="previous">
              <del>
                PHP {userStatus.isAdmin === null ? price : state.price * 2}.oo
              </del>
            </span>
          </div>
          <div className="button-sm">
            <button
              className="add-to-cart-sm specific-btn-sm"
              onClick={() => x(y)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBanner;
