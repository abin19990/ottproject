import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function Watchlist() {
  const initialMovies = [
    { id: 1, title: "Inception", image: "https://i.pinimg.com/736x/ab/4e/15/ab4e15008f5db557f735d9b2065ccdab.jpg", liked: true },
    { id: 2, title: "Interstellar", image: "https://i.pinimg.com/1200x/f0/0e/f4/f00ef4ef28062a3ffe32c80cfa039c86.jpg", liked: true },
    { id: 3, title: "The Dark Knight", image: "https://i.pinimg.com/736x/6c/20/3b/6c203ba1491ddc63991c72278ac656cd.jpg", liked: true },
    { id: 4, title: "Avengers: Endgame", image: "https://i.pinimg.com/1200x/95/26/68/9526684fe11e38cf6bb6fbd48e37de6a.jpg", liked: true },
    { id: 5, title: "Titanic", image: "https://i.pinimg.com/736x/88/80/b6/8880b6d5f3517441316b1284f5921b10.jpg", liked: true },
    { id: 6, title: "The Matrix", image: "https://i.pinimg.com/736x/ed/45/16/ed4516338fa5df348c13a2a7ce1e7998.jpg", liked: true },
    { id: 7, title: "Gladiator", image: "https://i.pinimg.com/736x/d8/fa/6b/d8fa6b0a7e7321f7f5adef24d6f5abd7.jpg", liked: true },
    { id: 8, title: "Parasite", image: "https://i.pinimg.com/736x/32/7e/19/327e19c46199e12f7091fcf0666edd67.jpg", liked: true },
    { id: 9, title: "Joker", image: "https://i.pinimg.com/1200x/f5/81/a9/f581a9b6c9ab5043d60d6f4c9be96223.jpg", liked: true },
    { id: 10, title: "Avatar", image: "https://i.pinimg.com/1200x/b2/f8/43/b2f843111df8347133dca44dc2c5f57b.jpg", liked: true },
  ];

  const [movies, setMovies] = useState(initialMovies);

  const toggleLike = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div style={{ backgroundColor: "#9e9e9eff", minHeight: "100vh" }}>
      <Navbar />
      <div className="container py-5">
        <h2 className="text-center mb-4">My Watchlist</h2>
        <div className="row">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div className="col-md-3 mb-4" key={movie.id}>
                <div className="card h-100 bg-dark text-white position-relative movie-card">
                  
                  {/* ❤️ Unlike Button (always visible top-right) */}
                  <button
                    className="btn btn-sm unlike-btn"
                    onClick={() => toggleLike(movie.id)}
                  >
                    ❤️
                  </button>

                  {/* Image + Hover Play */}
                  <div className="image-container">
                    <img
                      src={movie.image}
                      className="card-img-top"
                      alt={movie.title}
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                    <button
                      className="btn btn-danger play-btn"
                      onClick={() => alert(`Playing ${movie.title}`)}
                    >
                      ▶ Play
                    </button>
                  </div>

                  <div className="card-body d-flex flex-column">
                    <h5
                      className="card-title text-center"
                      style={{ color: "red" }}
                    >
                      {movie.title}
                    </h5>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center w-100">No movies in your watchlist.</p>
          )}
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .movie-card {
          border-radius: 10px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .movie-card:hover {
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.4);
        }

        .unlike-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: black;
          color: red;
          border: none;
          border-radius: 50%;
          padding: 6px 10px;
          z-index: 2;
        }

        .image-container {
          position: relative;
        }
        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: none;
          font-size: 18px;
          padding: 8px 16px;
          border-radius: 25px;
          z-index: 1;
        }
        .image-container:hover .play-btn {
          display: block !important;
        }
      `}</style>
      <Footer />
    </div>
  );
}

export default Watchlist;
