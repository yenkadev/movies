import { ReactNode, useState } from "react";
import { IMovie } from "../api/types";
import AppContext from "./appContext";

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [moviesTopRated, setMoviesTopRated] = useState<IMovie[]>([]);
  const [moviesNowPlaying, setMoviesNowPlaying] = useState<IMovie[]>([]);

  return (
    <AppContext.Provider
      value={{
        moviesTopRated,
        setMoviesTopRated,
        moviesNowPlaying,
        setMoviesNowPlaying,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
