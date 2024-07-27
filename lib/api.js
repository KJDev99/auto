import axios from "axios";

const api = axios.create({
  baseURL: "http://5.35.93.236:8000/",
});

export default api;
