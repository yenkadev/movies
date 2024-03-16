import axios from "axios";
import { API_CONFIG } from "./apiConfig";

const defaultOptions = {
  baseURL: API_CONFIG.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};
const axiosInstance = axios.create(defaultOptions);

axiosInstance.interceptors.request.use(async (config) => config);

export default axiosInstance;
