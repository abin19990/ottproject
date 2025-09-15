import logo from "../images/logo1.png"
function Footer() {
  return (
    <footer className="bg-dark text-white text-center text-lg-start mt-5">
      <div className="container p-4">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-center text-lg-left">
  <h5 className="text-uppercase">
    <img
      src={logo}
      alt="OTT Logo"
      style={{ maxWidth: "90px", height: "auto" }}
    />
  </h5>
  <p>
    Your go-to platform for Movies, TV Series, and Web Series. 
    Enjoy seamless entertainment anytime, anywhere.
  </p>
</div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">TV Series</a></li>
              <li><a href="#" className="text-white">Web Series</a></li>
              <li><a href="#" className="text-white">Movies</a></li>
            </ul>
          </div>

          {/* Contact / Auth Links */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Account</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="text-white">Login</a></li>
              <li><a href="#" className="text-white">Sign Up</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center p-3 bg-secondary">
        © {new Date().getFullYear()} My App | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
