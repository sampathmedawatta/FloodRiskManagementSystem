import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/auth/",
  withCredentials: false, // Allow cookies to be sent with requests (if applicable)
});

const headers = {
  "Content-Type": "application/json",
  //Authorization: "Bearer your-access-token", // Add any custom headers as needed
};

const login = async (parms) => {
    
  return await axiosInstance
    .post("/", parms, {
      headers,
    })
    .then((response) => {
      return response.data;
    });
    
};

const resetPassword = async (parms, _id) => {

  return await axiosInstance
    .post("/password/reset/" + _id, parms, {
      headers,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};


const AuthService = {
  login,
  resetPassword,
};


export default AuthService;
