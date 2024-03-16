export interface IMovie {
  id: string;
  poster_path: string;
  original_title: string;
  name: string;
  overview: string;
  backdrop_path: string;
  genres: {
    name: string;
  }[];
  production_companies: {
    name: string;
  }[];
  production_countries: {
    name: string;
  }[];
}

export interface IMoviesList {
  results: IMovie[];
}
