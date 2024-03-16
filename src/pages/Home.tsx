import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { getMoviesList } from "../api/moviesApi";
import Error from "../components/error";
import Loading from "../components/loading";
import MovieList from "../components/movie-list";
import { MOVIES_TYPE } from "../constants";
import { defaultQueryConfig } from "../constants/config";
import AppContext from "../context/appContext";
import MovieSearch from "../components/movie-search";

function Home() {
  const {
    data: moviesNowPlayingData,
    isLoading: nowPlayingLoading,
    isError: nowPlayingError,
  } = useQuery(
    "moviesNowPlaying",
    () => getMoviesList(MOVIES_TYPE.NOW_PLAYING),
    defaultQueryConfig
  );

  const {
    data: moviesTopRatedData,
    isLoading: topRatedLoading,
    isError: topRatedError,
  } = useQuery(
    "moviesTopRated",
    () => getMoviesList(MOVIES_TYPE.TOP_RATED),
    defaultQueryConfig
  );

  const { setMoviesTopRated, setMoviesNowPlaying } = useContext(AppContext);

  useEffect(() => {
    if (moviesTopRatedData) {
      setMoviesTopRated(moviesTopRatedData?.data?.results);
    }
  }, [moviesTopRatedData, setMoviesTopRated]);

  useEffect(() => {
    if (moviesNowPlayingData) {
      setMoviesNowPlaying(moviesNowPlayingData?.data?.results);
    }
  }, [moviesNowPlayingData, setMoviesNowPlaying]);

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
          <MovieList movieList={moviesNowPlayingData?.data?.results || []} />
        </div>
        <div>
          <h2 className="text-lg inline-block line">Top Rated</h2>
          <MovieList movieList={moviesTopRatedData?.data?.results || []} />
        </div>
      </div>
    </main>
  );
}

export default Home;
