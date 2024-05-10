import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/verify/",
  withCredentials: false, // Allow cookies to be sent with requests (if applicable)
});

const headers = {
  "Content-Type": "application/json",
  //Authorization: "Bearer your-access-token", // Add any custom headers as needed
};

const otp = async (parms, _id) => {
  console.log(parms);
  return await axiosInstance
    .post("/otp/" + _id, parms, {
      headers,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

const VerifyService = {
  otp,
};

export default VerifyService;
