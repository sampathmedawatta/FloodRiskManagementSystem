import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/user",
  withCredentials: false, // Allow cookies to be sent with requests (if applicable)
});

const headers = {
  "Content-Type": "application/json",
  //Authorization: "Bearer your-access-token", // Add any custom headers as needed
};

const getUserById = async (id) => {
  return await axiosInstance
  .get(`/${id}`, headers)
  .then((response) => {
    return response.data
  })
}

const UserService = {
  getUserById
}

export default UserService;