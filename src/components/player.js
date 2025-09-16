import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

function Player() {
  const { id } = useParams();
  
  // You can store your movies array here or import it from a separate file
  const movies = [
    { id: 1, title: "Inception",video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"},
    { id: 2, title: "Interstellar", video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    // Add all movies here
  ];

  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <div>Movie not found</div>;

  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh" }}>
      <Navbar />
      <div className="container py-5 text-center">
        <h2 style={{ color: "white" }}>{movie.title}</h2>
        <video
          src={movie.video}
          controls
          autoPlay
          style={{ width: "100%", maxWidth: "800px", marginTop: "20px" }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
