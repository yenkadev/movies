import { API_CONFIG } from "./apiConfig";
import axiosInstance from "./axios";
import { IMovie, IMoviesList } from "./types";

export const getMoviesList: (type: string) => Promise<{ data: IMoviesList }> = (
  type
) => {
  return axiosInstance.get(`movie/${type}?api_key=${API_CONFIG.API_KEY}`);
};

export const getMovieDetails: (id: string) => Promise<{ data: IMovie }> = (
  id
) => {
  return axiosInstance.get(`movie/${id}?api_key=${API_CONFIG.API_KEY}`);
};


export const searchMovies = async (category: string, queryParams: any) => {
  const queryString = Object.keys(queryParams)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
    .join("&");

  const url = `search/${category}?api_key=${API_CONFIG.API_KEY}&${queryString}`;

  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Something went wrong!");
  }
};

