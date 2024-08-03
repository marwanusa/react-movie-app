import { Container } from "react-bootstrap";
import { useFunctionsContext } from "./Context/FunctionsContext";
import "./Watched.css";
import MovieControls from "./MovieControls";

const Watched = () => {
  const { watched } = useFunctionsContext();

  return (
    <Container>
      {watched.length === 0 ? (
        <div className="empty-watched">
          <h1>No movies watched yet.</h1>
          <p>Your Watched list is currently empty. Start adding movies you've enjoyed!</p>
        </div>
      ) : (
        <>
          <div className="heading">
            <h2>My Watched</h2>
            <p>{watched.length} {watched.length === 1 ? 'Movie' : 'Movies'}</p>
          </div>
          <div className="movies">
            {watched.map((movie) => (
              <div className="movie-item" key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} />
                <MovieControls movie={movie} type={"watched"} />
              </div>
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default Watched;
