import React from "react";
import "../assets/style/admin.css";
import OrderPlates from "../components/orderPlates";

const AdminPanel = () => {
  return (
    <React.Fragment>
      <div className="admin-panel-container">
        <div className="admin-top-container">
          <div className="admin-top-left-content">
            <img src="https://i.imgur.com/RTSHEg5.png" alt="logo" width="300" />
          </div>
          <div className="admin-top-right-content">
            <div className="admin-top-right-top-content">
              <div>
                <h3 className="dim">You have a total of</h3>
                <h1>36</h1>
                <h3 className="dim">Orders</h3>
              </div>
              <div>
                <h3 className="dim">And a total of</h3>
                <h1>PHP 9,999</h1>
                <h3 className="dim">Sales</h3>
              </div>
            </div>
            <div className="admin-top-right-bot-content">
              <div>
                <h3 className="dim">Total Users</h3>
                <h1>18</h1>
              </div>
              <div>
                <h3 className="dim">Total Products</h3>
                <h1>9</h1>
              </div>
            </div>
          </div>
        </div>
        <h1>Users Orders</h1>
        <div className="admin-bot-container">
          {["a", "b", "c", "d"].map((x) => (
            <OrderPlates id={x} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminPanel;
