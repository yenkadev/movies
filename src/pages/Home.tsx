import { useContext, useEffect } from "react";
import Error from "../components/error";
import Loading from "../components/loading";
import MovieList from "../components/movie-list";
import MovieSearch from "../components/movie-search";
import { MOVIES_TYPE } from "../constants";
import AppContext from "../context/appContext";
import useMovieList from "../hooks/useMovieList";

function Home() {
  const {
    movieList: moviesNowPlayingList,
    isLoading: nowPlayingLoading,
    isError: nowPlayingError,
    loadMore: loadMoreNowPlaying,
  } = useMovieList(MOVIES_TYPE.NOW_PLAYING);

  const {
    movieList: moviesTopRatedList,
    isLoading: topRatedLoading,
    isError: topRatedError,
    loadMore: loadMoreTopRated,
  } = useMovieList(MOVIES_TYPE.TOP_RATED);

  const { setMoviesTopRated, setMoviesNowPlaying } = useContext(AppContext);

  useEffect(() => {
    setMoviesTopRated(moviesTopRatedList);
    setMoviesNowPlaying(moviesNowPlayingList);
  }, [
    moviesTopRatedList,
    moviesNowPlayingList,
    setMoviesTopRated,
    setMoviesNowPlaying,
  ]);

  if (nowPlayingLoading || topRatedLoading) {
    return <Loading />;
  }

  if (nowPlayingError || topRatedError) {
    return <Error error="Something went wrong!" />;
  }

  return (
    <main>
      <div className="container">
        <MovieSearch />
        <div>
          <h2 className="text-lg inline-block line">Now Playing</h2>
          <MovieList movieList={moviesNowPlayingList} />
          <div className="text-center">
            <button className="btn-primary" onClick={loadMoreNowPlaying}>
              Load more
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-lg inline-block line">Top Rated</h2>
          <MovieList movieList={moviesTopRatedList} />
          <div className="text-center">
            <button className="btn-primary" onClick={loadMoreTopRated}>
              Load more
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
