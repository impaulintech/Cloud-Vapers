import React, { Component } from "react";
import "../assets/style/register.css";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="nav-register">
          <h1>
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
              cloud vapers
            </a>
          </h1>
        </nav>
        <div className="register-container">
          <div className="left-register-container"> </div>
          <div className="right-register-container">
            <div>
              <h1>Create new account</h1>
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
                <h2>Password again</h2>
                <input type="password" name="password" />
              </div>
              <div></div>
              <input type="submit" value="Sign Up" />
            </form>

            <div>
              <h5>
                Already have an account?{" "}
                <span>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Sign In
                  </Link>
                </span>
              </h5>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
