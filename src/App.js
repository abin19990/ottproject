import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./components/footer";
import logo from "./images/logo1.png";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // show loader 1.5s
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        {"Glyph OTT".split("").map((letter, i) => (
          <span key={i} className="jumping-letter" style={{ animationDelay: `${i * 0.2}s` }}>
            {letter}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        color: "white",
        position: "relative",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          backgroundImage:
            "url('https://cdn.celluloidjunkie.com/wp-content/uploads/2021/04/30144535/Paper-vs-Digital-Movie-Posters-Featured.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          opacity: 0.35,
        }}
      ></div>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          background: "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.4))",
          zIndex: 0,
        }}
      ></div>

      {/* Landing Content */}
      <div
        className="container d-flex flex-column justify-content-center"
        style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}
      >
        <img
          src={logo}
          alt="OTT Logo"
          style={{ maxWidth: "180px", marginBottom: "40px" }}
        />
        <h1 className="display-4 font-weight-bold mb-3" style={{ marginTop: "-80px" }}>
          Unlimited Movies, TV Shows <br /> and Web Series
        </h1>
        <p className="lead mb-4">
          Watch anywhere. Cancel anytime. Enjoy seamless entertainment at your fingertips.
        </p>
        <a
            href="/login"
            className="btn btn-danger"
            style={{ width: "150px" }}
          >
            Get Started
          </a>
      </div>

      <Footer />
    </div>
  );
}

export default App;
