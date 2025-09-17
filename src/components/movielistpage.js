import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

function MovieListPage() {
  const initialMovies = [
    { id: 1, title: "Inception", image: "https://i.pinimg.com/736x/ab/4e/15/ab4e15008f5db557f735d9b2065ccdab.jpg", video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: 2, title: "Interstellar", image: "https://i.pinimg.com/1200x/f0/0e/f4/f00ef4ef28062a3ffe32c80cfa039c86.jpg", video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: 3, title: "The Dark Knight", image: "https://i.pinimg.com/736x/6c/20/3b/6c203ba1491ddc63991c72278ac656cd.jpg", video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: 4, title: "Avengers: Endgame", image: "https://i.pinimg.com/1200x/95/26/68/9526684fe11e38cf6bb6fbd48e37de6a.jpg", video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: 5, title: "Titanic", image: "https://i.pinimg.com/736x/88/80/b6/8880b6d5f3517441316b1284f5921b10.jpg", video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: 6, title: "The Matrix", image: "https://i.pinimg.com/736x/ed/45/16/ed4516338fa5df348c13a2a7ce1e7998.jpg", video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
  ];

  const navigate = useNavigate();
  const [movies] = useState(initialMovies);

  const handlePlay = (id) => {
    navigate(`/player/${id}`);
  };

  return (
    <div style={{ backgroundColor: "#111", minHeight: "100vh" }}>
      <Navbar />

      <div className="container py-4 text-center">
        <h2 className="text-light mb-4">Trending Now</h2>
        <div className="movie-row d-flex flex-wrap justify-content-center">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-poster">
              <img
                src={movie.image}
                alt={movie.title}
                onClick={() => handlePlay(movie.id)}
              />
              <div className="overlay">
                <button className="btn btn-danger btn-sm" onClick={() => handlePlay(movie.id)}>
                  ▶ Play
                </button>
                <button className="btn btn-outline-light btn-sm ms-2">+ Watchlist</button>
              </div>
              <p className="movie-title">{movie.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .movie-row {
          gap: 20px;
        }
        .movie-poster {
          position: relative;
          margin-bottom: 20px;
          width: 200px;
          cursor: pointer;
        }
        .movie-poster img {
          width: 100%;
          height: 300px;
          border-radius: 8px;
          object-fit: cover;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .movie-poster:hover img {
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(0,0,0,0.5);
        }
        .overlay {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: none;
        }
        .movie-poster:hover .overlay {
          display: block;
        }
        .movie-title {
          color: #fff;
          text-align: center;
          margin-top: 8px;
          font-size: 16px;
        }
      `}</style>

      <Footer />
    </div>
  );
}

export default MovieListPage;
