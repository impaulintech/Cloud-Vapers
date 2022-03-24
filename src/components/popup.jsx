import React, { useContext } from "react";
import "../assets/style/popup.css";
import { UserContext } from "../UserContext";
import { CheckUser } from "../utils/CheckUser";

const PopUp = () => {
  const [user, setUser, productList, setProduct] = useContext(UserContext);
  const alert =
    CheckUser() === false
      ? "https://i.imgur.com/192XSkg.png"
      : "https://i.imgur.com/fyOI306.png";
  const message = CheckUser() === false ? "Login first." : "Success!";

  return (
    <React.Fragment>
      <div className="popup-container">
        <div
          className="popup-overlay"
          onClick={() =>
            (document.querySelector(".popup-container").style.display = "none")
          }
        ></div>
        <div className="popup-content">
          <div className="popup-close">
            <div></div>
            <img
              className="popup-close-btn"
              src="https://i.imgur.com/SEihV05.png"
              alt="close"
              width="36"
              onClick={() =>
                (document.querySelector(".popup-container").style.display =
                  "none")
              }
            />
          </div>
          <div className="popup-flex">
            <img src={alert} width="100" alt="icon" />
            <h1>{message}</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PopUp;
