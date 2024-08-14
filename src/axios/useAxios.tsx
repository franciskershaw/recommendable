import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Moved out of headers
});

const useAxios = () => {
  const api = axiosInstance;

  return api;
};

export default useAxios;
