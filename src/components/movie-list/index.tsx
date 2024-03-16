import React from "react";
import { IMovie } from "../../api/types";
import MovieItem from "../movie-item";
import "./movie-list.scss";

interface MovieListProps {
  movieList: IMovie[];
}

const MovieList: React.FC<MovieListProps> = ({ movieList }) => {
  return (
    <div className="movie-list">
      {movieList?.map((movie, index: number) => (
        <MovieItem key={`movie-item-${index}`} movie={movie} category="movie" />
      ))}
    </div>
  );
};

export default MovieList;
