import React from "react";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "black", borderBottom: "2px solid" }}
    >
      <div className="container-fluid">
        {/* Brand / Logo */}
        <a className="navbar-brand" href="/">
          <img src={logo} alt="OTT Logo" style={{ maxWidth: "120px", height: "auto" }} />
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ color: "red" }}></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Left Menu */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/" style={{ color: "white" }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/movies" style={{ color: "white" }}>
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tv-series" style={{ color: "white" }}>
                TV Series
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/web-series" style={{ color: "white" }}>
                Web Series
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/watchlist" style={{ color: "white" }}>
                My List
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/history" style={{ color: "white" }}>
                History
              </a>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="form-inline my-2 my-lg-0 mr-3">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ backgroundColor: "#111", color: "white", border: "1px solid red" }}
            />
            <button
              className="btn btn-outline-danger my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>

          {/* Logout Button */}
          <div>
            <button
              className="btn btn-danger"
              style={{ backgroundColor: "red", borderColor: "red" }}
              onClick={() => {
                console.log("Logout clicked");
              }}
            > 
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
