import React from "react";

function LoginPage() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/9a/b7/c9/9ab7c90879dcf9aa205c0df990b4f0a8.jpg')",
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

      {/* Login Form */}
      <div className="d-flex justify-content-center align-items-center h-100" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="card p-4"
          style={{
            width: "350px",
            backgroundColor: "black",
            border: "2px solid red",
            color: "white",
          }}
        >
          <h3 className="text-center mb-4">Login</h3>
          <form>
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
             {/* Forgot Password link */}
            <div className="text-right mb-3">
                <a href="" style={{ color: "red", fontSize: "0.9rem" }}>
                Forgot Password?
                </a>
            </div>
            <button type="submit" className="btn btn-danger btn-block">
              Login
            </button>
          </form>
          <p className="mt-3 text-center">
            New here?{" "}
            <a href="/register" style={{ color: "red" }}>
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

// Default export
export default LoginPage;

