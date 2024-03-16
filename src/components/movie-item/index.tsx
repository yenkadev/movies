import React from "react";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { API_CONFIG } from "../../api/apiConfig";
import { IMovie } from "../../api/types";
import "./movie-item.scss";

interface MovieItemProps {
  movie: IMovie;
  category: string | undefined;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie, category }) => {
  const { id, original_title: title, name, poster_path } = movie;

  const link = `/${category}/${id}`;

  const imgPath = API_CONFIG.W500_IMAGE(poster_path);

  return (
    <Link to={link} className="movie-item">
      <div className="poster">
        <img src={imgPath} alt={title} />
        <div className="overlay">
          <FaYoutube />
        </div>
      </div>
      <h3 className="text-md text-center">{title || name}</h3>
    </Link>
  );
};

export default MovieItem;
