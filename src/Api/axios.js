import axios from "axios"

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-8287c/us-central1/api",
  baseURL: "https://api-2364373riq-uc.a.run.app/",
});

export {axiosInstance}