import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { searchMovies } from "../api/moviesApi";
import Error from "../components/error";
import Loading from "../components/loading";
import MovieList from "../components/movie-list";
import MovieSearch from "../components/movie-search";
import { defaultQueryConfig } from "../constants/config";

function Catalog() {
  const { keyword } = useParams();

  const {
    data: moviesSearched,
    isLoading,
    isError,
  } = useQuery(
    "moviesSearched",
    () => searchMovies("movie", { query: keyword }),
    defaultQueryConfig
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error error="Something went wrong!" />;
  }

  return (
    <main>
      <div className="container">
        <MovieSearch />
        <MovieList movieList={moviesSearched?.results || []} />
      </div>
    </main>
  );
}

export default Catalog;
