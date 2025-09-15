import React from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/9a/bb/95/9abb95244839ed0fb93f102891999d4a.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
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

      {/* Registration Form */}
      <div
        className="d-flex justify-content-center align-items-center h-100"
        style={{ position: "relative", zIndex: 1 }}
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
          <h3 className="text-center mb-4">Register</h3>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                style={{ backgroundColor: "#111", color: "white", border: "1px solid red" }}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                style={{ backgroundColor: "#111", color: "white", border: "1px solid red" }}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                style={{ backgroundColor: "#111", color: "white", border: "1px solid red" }}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                style={{ backgroundColor: "#111", color: "white", border: "1px solid red" }}
              />
            </div>

            <button type="submit" className="btn btn-danger btn-block">
              Register
            </button>
          </form>

          <p className="mt-3 text-center">
            Already have an account?{" "}
            <Link to="/login" style={{ color: "red" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
