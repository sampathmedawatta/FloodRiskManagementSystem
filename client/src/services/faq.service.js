import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/faqs",
  withCredentials: false, // Allow cookies to be sent with requests (if applicable)
});

const headers = {
  "Content-Type": "application/json",
  //Authorization: "Bearer your-access-token", // Add any custom headers as needed
};


const createFaq = async (parms) => {
  return await axiosInstance
  .post("/", parms, {
    headers,
  })
  .then((response) => {
    return response.data
  })
}

const getFaqsById = async (id) => {
  return await axiosInstance
  .get(`/${id}`, headers)
  .then((response) => {
    return response.data
  })
}
const getAllFaqs = async () => {
  try {
    const response = await axiosInstance.get(`/`, { headers });
    const sortedUsers = response.data.sort((a, b) => new Date(b.createdTime) - new Date(a.createdTime));
    return sortedUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
const updateFaq = async (id, updatedFields) => {
  try {
    const response = await axiosInstance.put(`/${id}`, updatedFields, headers );
    return response.data;
  } catch (error) {
    console.error(`Error updating Faq with ID ${id}:`, error);
    throw error;
  }
}
const FaqService = {
  getFaqsById,
  getAllFaqs,
  updateFaq,
  createFaq
}

export default FaqService;