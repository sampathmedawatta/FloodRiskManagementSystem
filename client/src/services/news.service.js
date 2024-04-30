import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/news",
  withCredentials: false,
});

const headers = {
  "Content-Type": "application/json",
};

const getNewsById = async (id) => {
  return await axiosInstance.get(`/${id}`, headers).then((response) => {
    return response.data;
  });
};

const getAllNews = async () => {
  return await axiosInstance.get("/", { headers }).then((response) => {
    return response.data;
  });
};

const AlertService = {
  getNewsById,
  getAllNews,
};

export default AlertService;
