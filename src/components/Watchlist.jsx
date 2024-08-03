import { Container } from "react-bootstrap";
import "./Watchlist.css";
import { useFunctionsContext } from "./Context/FunctionsContext";
import MovieControls from "./MovieControls";
const Watchlist = () => {
  const { watchlist } = useFunctionsContext();
  return (
    <Container>
      {watchlist.length === 0 ? (
        <div className="empty-watchlist">
          <h1>No movies in your list,add some!</h1>
          <p>
            Your watchlist list is currently empty. Start adding movies
          </p>
        </div>
      ) : (
        <>
          <div className="heading">
            <h2>My Watchlist</h2>
            <p>{watchlist.length} Movies</p>
          </div>
          <div className="movies">
            {watchlist.map((movie) => {
              return (
                <div className="movie-item" key={movie.imdbID}>
                  <img src={movie.Poster} alt={movie.Title} />
                  <MovieControls movie={movie} type={"watchlist"} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </Container>
  );
};

export default Watchlist;
