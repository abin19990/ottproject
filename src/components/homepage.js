// HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const HomePage = () => {
  const navigate = useNavigate();

  // Dummy movie data
  const latestMovies = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    title: `Latest Movie ${i + 1}`,
    image: `https://picsum.photos/300/400?random=${i + 1}`,
  }));

  const wishlistMovies = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 101,
    title: `Wishlist Movie ${i + 1}`,
    image: `https://picsum.photos/300/400?random=${i + 101}`,
  }));

  const historyMovies = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 201,
    title: `History Movie ${i + 1}`,
    image: `https://picsum.photos/300/400?random=${i + 201}`,
  }));

  const handlePlay = (id) => {
    navigate(`/player/${id}`);
  };

  return (
    <div style={{ backgroundColor: "#111", color: "white", minHeight: "100vh" }}>
      {/* Navbar */}
      <Navbar />

      {/* Inline CSS */}
      <style>{`
        .carousel-img {
          object-fit: cover;
          height: 500px;
        }
        .carousel-caption {
          left: 5%;
          bottom: 20%;
          text-align: left;
        }
        .carousel-title {
          font-size: 2.5rem;
          font-weight: bold;
          animation: slideIn 1s ease-in-out;
        }
        .carousel-desc {
          font-size: 1.1rem;
          margin-bottom: 15px;
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .movie-section { margin: 40px 20px; }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .movie-scroll {
          display: flex;
          gap: 15px;
          overflow-x: auto;
          scrollbar-width: none;
          padding: 10px 0;
        }
        .movie-scroll::-webkit-scrollbar { display: none; }
        .movie-card {
          position: relative;
          min-width: 180px;
          height: 270px;
          border-radius: 10px;
          overflow: hidden;
          transition: transform 0.3s ease;
          background: #000;
        }
        .movie-card:hover {
          transform: translateY(-10px) scale(1.05);
        }
        .movie-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .movie-card:hover .overlay { opacity: 1; }
        .play-btn {
          font-size: 18px;
          padding: 8px 16px;
          border-radius: 20px;
        }
        .movie-title {
          margin-top: 8px;
          text-align: center;
          font-size: 0.95rem;
          font-weight: 500;
          color: #fff;
        }
      `}</style>

      {/* Carousel */}
       <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"   // Auto scroll every 4 seconds
        >
        <div className="carousel-inner">
            {[1, 2, 3].map((num, idx) => (
            <div
                className={`carousel-item ${idx === 0 ? "active" : ""}`}
                key={num}
            >
                <img
                src={`https://picsum.photos/1200/500?random=${num}`}
                className="d-block w-100 carousel-img"
                alt={`Slide ${num}`}
                />
                <div className="carousel-caption text-start">
                <h2 className="carousel-title animate__animated animate__fadeInRight">
                    Movie Title {num}
                </h2>
                <p className="carousel-desc animate__animated animate__fadeInRight animate__delay-1s">
                    This is the description of Movie {num}.
                </p>
                <button
                    className="btn btn-danger me-2"
                    onClick={() => handlePlay(num)}
                >
                    ▶ Watch Now
                </button>
                <button className="btn btn-outline-light">
                    + Add to Wishlist
                </button>
                </div>
            </div>
            ))}
        </div>

        {/* Prev / Next buttons */}
        <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
        >
            <span className="carousel-control-prev-icon"></span>
        </button>
        <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
        >
            <span className="carousel-control-next-icon"></span>
        </button>
        </div>


      {/* Latest Movies */}
      <div className="movie-section">
        <div className="section-header">
          <h3 style={{ color: "red" }}>Latest Movies</h3>
          <button className="btn btn-link text-danger">View All</button>
        </div>
        <div className="movie-scroll">
          {latestMovies.map((movie) => (
            <div key={movie.id}>
              <div className="movie-card">
                <img src={movie.image} alt={movie.title} className="movie-img" />
                <div className="overlay">
                  <button
                    className="btn btn-danger play-btn"
                    onClick={() => handlePlay(movie.id)}
                  >
                    ▶ Play
                  </button>
                </div>
              </div>
              <div className="movie-title">{movie.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wishlist */}
      <div className="movie-section">
        <div className="section-header">
          <h3 style={{ color: "red" }}>Wishlist</h3>
         <a href="/watchlist" className="btn btn-link text-danger">
                 View All
        </a>
        </div>
        <div className="movie-scroll">
          {wishlistMovies.map((movie) => (
            <div key={movie.id}>
              <div className="movie-card">
                <img src={movie.image} alt={movie.title} className="movie-img" />
                <div className="overlay">
                  <button
                    className="btn btn-danger play-btn"
                    onClick={() => handlePlay(movie.id)}
                  >
                    ▶ Play
                  </button>
                </div>
              </div>
              <div className="movie-title">{movie.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* History */}
      <div className="movie-section">
        <div className="section-header">
          <h3 style={{ color: "red" }}>History</h3>
          <a href="/history" className="btn btn-link text-danger">
                 View All
        </a>
        </div>
        <div className="movie-scroll">
          {historyMovies.map((movie) => (
            <div key={movie.id}>
              <div className="movie-card">
                <img src={movie.image} alt={movie.title} className="movie-img" />
                <div className="overlay">
                  <button
                    className="btn btn-danger play-btn"
                    onClick={() => handlePlay(movie.id)}
                  >
                    ▶ Play
                  </button>
                </div>
              </div>
              <div className="movie-title">{movie.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
