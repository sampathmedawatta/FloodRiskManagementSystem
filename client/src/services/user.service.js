import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/user",
  withCredentials: false, // Allow cookies to be sent with requests (if applicable)
});

const headers = {
  "Content-Type": "application/json",
  //Authorization: "Bearer your-access-token", // Add any custom headers as needed
};
const createUser= async (parms) => {
  return await axiosInstance
  .post("/", parms, {
    headers,
  })
  .then((response) => {
    return response.data
  })
}


const getUserById = async (id) => {
  return await axiosInstance
  .get(`/${id}`, headers)
  .then((response) => {
    return response.data
  })
}
const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get(`/`, { headers });
    const sortedUsers = response.data.sort((a, b) => new Date(b.registeredDate) - new Date(a.registeredDate));
    return sortedUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
const updateUser = async (id, updatedFields) => {
  try {
    const response = await axiosInstance.put(`/${id}`, updatedFields, headers );
    return response.data;
  } catch (error) {
    console.error(`Error updating user with ID ${id}:`, error);
    throw error;
  }
}
const UserService = {
  getUserById,
  getAllUsers,
  updateUser,
  createUser
}




export default UserService;