import React, { useContext } from "react";
import "../assets/style/login.css";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";

const Login = () => {
  const [userStatus, dispatch, localProduct] = useContext(UserContext);
  return (
    <>
      {userStatus.isAdmin === null && userStatus.id === null ? (
        <React.Fragment>
          <nav className="nav-login">
            <h1>
              <a href="/" style={{ textDecoration: "none", color: "white" }}>
                cloud vapers
              </a>
            </h1>
          </nav>
          <div className="login-container">
            <div className="left-login-container"> </div>
            <div className="right-container">
              <div>
                <h1>Let's you sign in</h1>
                <h2>Welcome Cloud Vapers</h2>
              </div>
              <form>
                <div>
                  <h2>Email</h2>
                  <input type="email" name="email" autoFocus="autoFocus" />
                </div>
                <div>
                  <h2>Password</h2>
                  <input type="password" name="password" />
                </div>
                <div>
                  <input type="checkbox" name="checkbox" />
                  <label htmlFor="checkbox"> Keep me logged in</label>
                </div>
                <input type="submit" value="Sign In" />
              </form>

              <div>
                <h5>Forgot password?</h5>
                <h5>
                  Dont have an account yet?{" "}
                  <span>
                    <Link
                      to="/register"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Sign Up
                    </Link>
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        null((window.location = "/"))
      )}
    </>
  );
};

export default Login;
