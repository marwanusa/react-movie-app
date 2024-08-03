import { useEffect, useState } from "react";
import "./Add.css";
import MovieCard from "./MovieCard";
const Add = () => {
  const [movieName, setMovieName] = useState("");
  const [response, setResponse] = useState([]);

  useEffect(() => {
    if (movieName.trim()) {  
      fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=74a4691c`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => setResponse(data.Search || []))
        .catch((error) => console.error('Fetch error:', error));
    }
  }, [movieName]);
  return (
    <div className="add">
      <input
        type="text"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
         placeholder="Search for movies..."
      />
   {response.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default Add;
