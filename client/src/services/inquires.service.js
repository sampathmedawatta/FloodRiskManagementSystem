import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/inquiries",
  withCredentials: false, // Allow cookies to be sent with requests (if applicable)
});

const headers = {
  "Content-Type": "application/json",
  //Authorization: "Bearer your-access-token", // Add any custom headers as needed
};


const createInquiry = async (parms) => {
  return await axiosInstance
  .post("/", parms, {
    headers,
  })
  .then((response) => {
    return response.data
  })
}

const getInquiriesById = async (id) => {
  return await axiosInstance
  .get(`/${id}`, headers)
  .then((response) => {
    return response.data
  })
}
const getAllInquiries = async () => {
  try {
    const response = await axiosInstance.get(`/`, { headers });
    const sortedUsers = response.data.sort((a, b) => new Date(b.messageDate) - new Date(a.messageDate));
    return sortedUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
const updateInquiry = async (id, updatedFields) => {
  try {
    const response = await axiosInstance.put(`/${id}`, updatedFields, headers );
    return response.data;
   
  } catch (error) {
    console.error(`Error updating inquiry with ID ${id}:`, error);
    throw error;
  }
}
const InquiriesService = {
  getInquiriesById,
  getAllInquiries,
  updateInquiry,
  createInquiry,
}

export default InquiriesService;