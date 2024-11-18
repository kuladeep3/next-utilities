import axios from "axios";

const instance = axios.create({
  //   baseURL: "http://127.0.0.1:8000/api/",
  timeout: 5000, // Default timeout for all requests (in milliseconds)
  headers: {
    "Content-Type": "application/json", // Default headers for all requests
  },
});

export default instance;
