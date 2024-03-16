import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { searchMovies } from "../api/moviesApi";
import Error from "../components/error";
import Loading from "../components/loading";
import MovieList from "../components/movie-list";
import MovieSearch from "../components/movie-search";
import { defaultQueryConfig } from "../constants/config";
import { useEffect, useState } from "react";

function Catalog() {
  const { keyword } = useParams();

  const [moviesSearched, setMoviesSearched] = useState<any>(null);

  const { isLoading, isError } = useQuery(
    ["moviesSearched", keyword],
    () => searchMovies("movie", { query: keyword }),
    {
      ...defaultQueryConfig,
      enabled: !!keyword,
      onSuccess: (data) => setMoviesSearched(data),
    }
  );

  useEffect(() => {
    setMoviesSearched(null);
  }, [keyword]);

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
