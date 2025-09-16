import React from "react";
import Navbar from "./navbar";// import your Navbar component

function ChangePassword() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/9a/b7/c9/9ab7c90879dcf9aa205c0df990b4f0a8.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
        color: "white",
      }}
    >
      {/* Black Overlay */}
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.85)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      ></div>

      {/* Navbar */}
      <Navbar />

      {/* Change Password Form */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "calc(100vh - 56px)", // subtract navbar height
        }}
      >
        <div
          className="card p-4"
          style={{
            width: "400px",
            backgroundColor: "black",
            border: "2px solid red",
            color: "white",
          }}
        >
          <h3 className="text-center mb-4">Change Password</h3>
          <form>
            <div className="form-group">
              <label>Current Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter current password"
                required
                style={{ backgroundColor: "#111", color: "white", border: "1px solid red" }}
              />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter new password"
                required
                style={{ backgroundColor: "#111", color: "white", border: "1px solid red" }}
              />
            </div>
            <div className="form-group">
              <label>Confirm New Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm new password"
                required
                style={{ backgroundColor: "#111", color: "white", border: "1px solid red" }}
              />
            </div>
            <button type="submit" className="btn btn-danger btn-block">
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
