import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./movie-search.scss";

const MovieSearch = () => {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (keyword.trim().length > 0) {
      navigate(`/movies/search/${keyword}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="movie-search">
      <input
        type="text"
        placeholder="Search movie"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieSearch;
