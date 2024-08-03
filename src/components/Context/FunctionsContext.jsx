import { createContext, useContext, useEffect, useReducer } from "react";
const initialState = {
  watchlist : localStorage.getItem("watchlist") ? 
              JSON.parse(localStorage.getItem("watchlist")) : [] ,
  watched : localStorage.getItem("watched") ?
            JSON.parse(localStorage.getItem("watched")) : []
};
const actions = {
  ADD_TO_WATCHLIST: "ADD_TO_WATCHLIST",
  REMOVE_FROM_WATCHLIST: "REMOVE_FROM_WATCHLIST",
  ADD_TO_WATCHED: "ADD_TO_WATCHED",
  REMOVE_FROM_WATCHED: "REMOVE_FROM_WATCHED",
  MOVE_TO_WATCHED: "MOVE_TO_WATCHED",
  MOVE_TO_WATCLIST: "MOVE_TO_WATCHLIST"
};
export const FunctionsContext = createContext();
const FunctionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  function reducer(state, action) {
    const isMovieInWatchlist = state.watchlist.some((ele)=>ele === action.payload) ? true : false ;
    const isMovieInWatched = state.watched.some((ele)=>ele === action.payload) ? true : false ;
    switch (action.type) {
      case actions.ADD_TO_WATCHLIST:
        return isMovieInWatchlist ? { ...state} : { ...state, watchlist: [...state.watchlist, action.payload] }
    
      case actions.REMOVE_FROM_WATCHLIST:
        return {
          ...state,
          watchlist: state.watchlist.filter(
            (item) => item.imdbID !== action.payload.imdbID
          ),
        };
      case actions.ADD_TO_WATCHED:
        return isMovieInWatched ? { ...state} :{ ...state, watched: [...state.watched, action.payload] };
      case actions.REMOVE_FROM_WATCHED:
        return {
          ...state,
          watched: state.watched.filter((ele) => ele.imdbID != action.payload.imdbID),
        };
      case actions.MOVE_TO_WATCHED:
        return {
          ...state,
          watched: [...state.watched, action.payload],
          watchlist: state.watchlist.filter((ele) => ele.imdbID != action.payload.imdbID),
        };
        case actions.MOVE_TO_WATCLIST:
          return {
            ...state,
            watchlist: [...state.watchlist, action.payload],
            watched: state.watched.filter((ele) => ele.imdbID != action.payload.imdbID),
          };
      default:
        return state;
    }
  }
  useEffect(()=>{
    localStorage.setItem('watchlist' , JSON.stringify(state.watchlist))
    localStorage.setItem('watched' , JSON.stringify(state.watched))
  } , [state])
  return (
    <FunctionsContext.Provider
      value={{ watchlist: state.watchlist, watched: state.watched, dispatch }}
    >
      {children}
    </FunctionsContext.Provider>
  );
};
export default FunctionsProvider;
export const useFunctionsContext = () => useContext(FunctionsContext);
