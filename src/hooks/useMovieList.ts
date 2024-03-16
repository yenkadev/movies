import { useEffect, useState } from "react";
import { IMovie } from "../api/types";
import { useQuery } from "react-query";
import { getMoviesList } from "../api/moviesApi";
import { defaultQueryConfig } from "../constants/config";

interface IMoviesList {
  data: {
    results: IMovie[];
  };
}

function useMovieList(type: string): {
  movieList: IMovie[];
  isLoading: boolean;
  isError: boolean;
  loadMore: () => void;
} {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isError } = useQuery<IMoviesList>(
    [type, page],
    () => getMoviesList(type, page),
    defaultQueryConfig
  );

  const [movieList, setMovieList] = useState<IMovie[]>([]);

  useEffect(() => {
    if (data) {
      setMovieList((prevList) => [...prevList, ...data.data.results]);
    }
  }, [data]);

  const loadMore = () => setPage((prevPage) => prevPage + 1);

  return { movieList, isLoading, isError, loadMore };
}

export default useMovieList;
