import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { API_CONFIG } from "../api/apiConfig";
import { getMovieDetails } from "../api/moviesApi";
import Error from "../components/error";
import Loading from "../components/loading";
import { defaultQueryConfig } from "../constants/config";

const Detail = () => {
  const { id } = useParams();

  const {
    data: movieDetail,
    isLoading,
    isError,
  } = useQuery(
    ["movieDetail", id],
    () => getMovieDetails(id || ""),
    defaultQueryConfig
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !movieDetail?.data) {
    return <Error error="Failed to load movie details" />;
  }

  const {
    original_title,
    poster_path,
    production_companies,
    production_countries,
    name,
    genres,
    overview,
  } = movieDetail.data;

  const imgPath = API_CONFIG.W500_IMAGE(poster_path || "");

  return (
    <main>
      <div className="container">
        <div className="movie-content">
          <div className="poster">
            <img src={imgPath} alt={original_title || name} />
          </div>
          <div className="info">
            <h2 className="text-xl">{original_title || name}</h2>
            <div className="genres">
              {genres?.map((genre, index) => (
                <span key={index} className="genres-item">
                  {genre.name}
                </span>
              ))}
            </div>
            <p className="overview">{overview}</p>
            <div>
              <strong className="text-md">Production Companies</strong>
              <ul className="list">
                {production_companies?.map((company, index) => (
                  <li key={`production-companies-${index}`}>
                    * {company.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <strong className="text-md">Production Countries</strong>
              <ul className="list">
                {production_countries?.map((country, index) => (
                  <li key={`production-countries-${index}`}>
                    * {country.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detail;
