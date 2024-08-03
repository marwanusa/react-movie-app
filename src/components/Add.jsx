import { useEffect, useState } from "react";
import "./Add.css";
import axios from "axios";
import MovieCard from "./MovieCard";
const Add = () => {
  const [movieName, setMovieName] = useState("");
  const [response, setResponse] = useState([]);
  // useEffect(()=>{
  //   axios
  //     .get(`http://www.omdbapi.com/?s=${movieName}&apikey=74a4691c`)
  //     .then((response) => setResponse(response.data.Search || []))
  //     .catch((error) => console.error(error));
  // },[movieName])
  useEffect(() => {
    if (movieName.trim()) {  // To prevent making an API call when the input is empty
      axios
        .get(`http://www.omdbapi.com/?s=${movieName}&apikey=74a4691c`)
        .then((response) => setResponse(response.data.Search || []))
        .catch((error) => console.error(error));
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
