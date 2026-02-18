import axios from "axios";
import { API_URL } from "./constants/apiEndpoints";

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => {
    //console.log("response: ", response)
    return response;
  },
  (error) => {
    //console.log("error: ", error)
    if (error.response && error.response.status === 401) {
      window.location.href = "/login";
      localStorage.setItem("jwt", null);
    }
    return Promise.reject(error);
  },
);

export { apiClient };
