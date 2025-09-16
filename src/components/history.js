import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

function History() {
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
  const navigate = useNavigate();

  const handlePlay = (id) => {
    navigate(`/player/${id}`);
  };

  const toggleLike = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, liked: !movie.liked } : movie
      )
    );
  };

  return (
    <div style={{ backgroundColor: "#9e9e9eff", minHeight: "100vh" }}>
      <Navbar />
      <div className="container py-5">
        <h2 className="text-center mb-4">History</h2>
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div className="card bg-dark text-white movie-card" key={movie.id}>
                {/* Like/Unlike Button */}
                <button
                  className="btn btn-sm btn-light like-btn"
                  onClick={() => toggleLike(movie.id)}
                >
                  {movie.liked ? "♥" : "♡"}
                </button>

                {/* Image + Play Button */}
                <div className="image-container">
                  <img
                    src={movie.image}
                    className="card-img-top"
                    alt={movie.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <button
                    className="btn btn-danger play-btn"
                    onClick={() => handlePlay(movie.id)}
                  >
                    ▶ Play
                  </button>
                </div>

                {/* Title */}
                <div className="card-body p-2">
                  <h6 className="card-title text-center" style={{ color: "red" }}>
                    {movie.title}
                  </h6>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center w-100">No movies in your history.</p>
          )}
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .movie-card {
          width: 200px;
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        .movie-card:hover {
          transform: scale(1.05);
        }
        .like-btn {
          position: absolute;
          top: 8px;
          right: 8px;
          z-index: 2;
          background: rgba(255,255,255,0.8);
          border-radius: 50%;
          font-size: 18px;
          padding: 5px 10px;
          border: none;
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
          font-size: 14px;
          padding: 6px 14px;
          border-radius: 25px;
        }
        .image-container:hover .play-btn {
          display: block !important;
        }
      `}</style>
      <Footer />
    </div>
  );
}

export default History;
