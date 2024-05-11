import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/news",
  withCredentials: false,
});

const headers = {
  "Content-Type": "application/json",
};
const createNewsItem = async (formData) => {
  console.log("Request inside service;");
  try {
    const response = await axiosInstance.post("/", formData, {
      headers: {
        ...headers,
        "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
      },
    });
    console.log("Sending request...");
    return response.data;
  } catch (error) {
    console.error("Error creating news item:", error);
    throw error;
  }
};

const getNewsById = async (id) => {
  return await axiosInstance.get(`/${id}`, headers).then((response) => {
    return response.data;
  });
};

const getAllNews = async () => {
  return await axiosInstance.get("/", { headers }).then((response) => {
    const sortedNews = response.data.sort(
      (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
    );
    return sortedNews;
  });
};
const updateNewsById = async (id, updatedFields) => {
  try {
    const response = await axiosInstance.put(`/${id}`, updatedFields, headers);
    return response.data;
  } catch (error) {
    console.error(`Error updating News with ID ${id}:`, error);
    throw error;
  }
};
const AlertService = {
  createNewsItem,
  getNewsById,
  getAllNews,
  updateNewsById,
};

export default AlertService;
