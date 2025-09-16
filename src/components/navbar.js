import React from "react";
import logo from "../images/logo.png";

function Navbar({ username = "logined user" }) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: "#1a1a1a",
        borderBottom: "2px solid #ff0000",
        padding: "2rem 1rem",
        fontFamily: "monospace",
        fontSize: "16px",
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img src={logo} alt="OTT Logo" style={{ maxHeight: "40px" }} />
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
          style={{ borderColor: "white" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links + search + profile inside collapsible */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav text-center">
            <li className="nav-item mx-2">
              <a className="nav-link" href="/home" style={{ color: "#ffffff" }}>
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="/movies" style={{ color: "#ffffff" }}>
                Movies
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="/tv-series" style={{ color: "#ffffff" }}>
                TV Series
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="/web-series" style={{ color: "#ffffff" }}>
                Web Series
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="/watchlist" style={{ color: "#ffffff" }}>
                My List
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="/history" style={{ color: "#ffffff" }}>
                History
              </a>
            </li>
          </ul>

          {/* Search + Profile inside toggler */}
          <div className="d-flex flex-column flex-lg-row align-items-center mt-2 mt-lg-0 ml-lg-3">
            <form className="form-inline mr-0 mr-lg-2 mb-2 mb-lg-0">
              <input
                className="form-control form-control-sm"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ backgroundColor: "#111", color: "white", border: "1px solid #ff0000" }}
              />
              <button className="btn btn-sm btn-outline-danger ml-1" type="submit">
                Search
              </button>
            </form>

            <div className="dropdown ml-lg-2">
              <button
                className="btn btn-sm btn-dark dropdown-toggle"
                type="button"
                id="profileMenu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "white", border: "1px solid #ff0000" }}
              >
                {username}
              </button>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="profileMenu">
                <a className="dropdown-item" href="/passwordchange">Change Password</a>
                <div className="dropdown-divider"></div>
                <button
                  className="dropdown-item text-danger"
                  onClick={() => console.log("Logout clicked")}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toggler icon CSS */}
      <style>{`
        .navbar-dark .navbar-toggler-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255,1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
