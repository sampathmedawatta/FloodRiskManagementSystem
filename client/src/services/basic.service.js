import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: false, // Allow cookies to be sent with requests (if applicable)
});

const headers = {
  "Content-Type": "application/json",
  //Authorization: "Bearer your-access-token", // Add any custom headers as needed
};

const get = async () => {
  return await axiosInstance
    .get("/", {
      headers,
    })
    .then((response) => {
      if (response != undefined && response != null) {
        console.log("response : " + response);
        return response.data;
      }
    });
};

const post = (parms) => {
  return axiosInstance
    .post("/save", parms, {
      headers,
    })
    .then((response) => {
      console.log("response : " + response);
      return response.data;
    });
};

const BasicService = {
  get,
  post,
};

export default BasicService;
