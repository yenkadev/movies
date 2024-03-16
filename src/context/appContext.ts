import React, { createContext } from "react";
import { IMovie } from "../api/types";

const AppContext = createContext<{
  moviesTopRated: IMovie[];
  setMoviesTopRated: React.Dispatch<React.SetStateAction<IMovie[]>>;
  moviesNowPlaying: IMovie[];
  setMoviesNowPlaying: React.Dispatch<React.SetStateAction<IMovie[]>>;
}>({
  moviesTopRated: [],
  setMoviesTopRated: (value: React.SetStateAction<IMovie[]>) => null,
  moviesNowPlaying: [],
  setMoviesNowPlaying: (value: React.SetStateAction<IMovie[]>) => null,
});

export default AppContext;
