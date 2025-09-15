function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand" href="#">
          My App
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
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Left Menu */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                TV Series
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Web Series
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Movies
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
            />
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>

          {/* Login / Signup */}
          <div>
            <a href="#" className="btn btn-outline-light mr-2">
              Login
            </a>
            <a href="#" className="btn btn-primary">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
