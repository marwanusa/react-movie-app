import { Button } from "react-bootstrap";
import "./MovieCard.css";
import { useFunctionsContext } from "./Context/FunctionsContext";
import { useEffect, useState } from "react";
/* eslint-disable react/prop-types */
const MovieCard = ({ movie }) => {
  const { watchlist, watched, dispatch } = useFunctionsContext();
  const [isMovieInWatchlist, setIsMovieInWatchlist] = useState(false);
  const [isMovieInWatched, setIsMovieInWatched] = useState(false);

  useEffect(() => {
    setIsMovieInWatchlist(watchlist.some((ele) => ele.imdbID === movie.imdbID));
    setIsMovieInWatched(watched.some((ele) => ele.imdbID === movie.imdbID));
  }, [watchlist, watched, movie.imdbID]);

  const handleAddToWatchlist = () => {
    if (!isMovieInWatchlist && !isMovieInWatched) {
      dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
    }
  };

  const handleAddToWatched = () => {
    if (!isMovieInWatched) {
      dispatch({ type: "ADD_TO_WATCHED", payload: movie });
    }
  };

  return (
    <div className="MovieCard">
      <div className="img">
        <img src={movie.Poster} alt="image" />
      </div>
      <div className="info">
        <div className="text">
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
        <div className="btns">
          <Button 
            variant={isMovieInWatchlist || isMovieInWatched ? "secondary" : "primary"} 
            onClick={handleAddToWatchlist}
            disabled={isMovieInWatchlist || isMovieInWatched}
          >
            {isMovieInWatchlist ? "In Watchlist" : "Add To WatchList"}
          </Button>
          <Button 
            variant={isMovieInWatched ? "secondary" : "success"} 
            onClick={handleAddToWatched}
            disabled={isMovieInWatched}
          >
            {isMovieInWatched ? "In Watched" : "Add To Watched"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
