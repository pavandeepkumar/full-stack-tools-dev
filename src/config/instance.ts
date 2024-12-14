import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { API_ENDPOINT } from "@/constants";


const instance: AxiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor to add Authorization token to each request
instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    // const session = await getAccessToken();
    // if (session && config.headers) {
    //   config.headers.Authorization = `Bearer ${session.name}`;
    // }
    return config;
  }, (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Interceptor to handle 401 Unauthorized responses
instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    console.log("error ==>", error);

    // Example of handling specific error status codes
    if (typeof window !== "undefined" && error.response) {
      if (error.response.status === 404) {
        console.error(error.message);
        window.location.href = "/";
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
