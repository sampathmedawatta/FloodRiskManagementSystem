// const locations = [
//   { id: 1, 
//     locationName: "Hong Kong Observatory"
//   },
//   {
//     id: 2,
//     locationName: "Shek Kong",
//   },
//   { id: 3, 
//     locationName: "Cheung Chau"
//   },
//   {
//     id: 4,
//     locationName: "Tseung Kawn",
//   },
//   {
//     id: 5,
//     locationName: "Tai Po",
//   }
// ];

// const getLocation = () => {
//   return locations;
// }

// const LocationService = {
//   getLocation
// };

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: false, // Allow cookies to be sent with requests (if applicable)
});

const headers = {
  "Content-Type": "application/json",
  //Authorization: "Bearer your-access-token", // Add any custom headers as needed
};

const response = {
  locations: [
    {
      lat: {
        value: "22.39056",
      },
      long: {
        value: "114.27839",
      },
      item: {
        name: "Sai Kung",
        value: "Evacuation point",
        type: "Hospital",
        address: "40 Stubbs Rd, Happy Valley, Hong Kong",
        contact: "+852 3651 8888",
      },
    },
    {
      lat: {
        value: "22.37902",
      },
      long: {
        value: "114.06027",
      },
      item: {
        name: "Chung Hong",
        value: "Evacuation point",
        type: "Police",
        address: "40 Stubbs Rd, Happy Valley, Hong Kong",
        contact: "+852 3651 8888",
      },
    },
    {
      lat: {
        value: "22.29900",
      },
      long: {
        value: "113.90372",
      },
      item: {
        name: "Sha Lo Wan",
        value: "Evacuation point",
        type: "City",
        address: "40 Stubbs Rd, Happy Valley, Hong Kong",
        contact: "+852 3651 8888",
      },
    },
    {
      lat: {
        value: "22.308046",
      },
      long: {
        value: "113.918480",
      },
      item: {
        name: "International Airport",
        value: "Hong Kong International Airport",
        type: "City",
        address: "40 Stubbs Rd, Happy Valley, Hong Kong",
        contact: "+852 3651 8888",
      },
    },
    {
      lat: {
        value: "22.316668",
      },
      long: {
        value: "114.183334",
      },
      item: {
        name: "Kowloon",
        value: "Kowloon, Hong Kong",
        type: "City",
        address: "40 Stubbs Rd, Happy Valley, Hong Kong",
        contact: "+852 3651 8888",
      },
    },
    {
      lat: {
        value: "22.285978",
      },
      long: {
        value: "114.191490",
      },
      item: {
        name: "Causeway Bay",
        value: "Causeway Bay, Hong Kong",
        type: "EvacuationPoint",
        address: "40 Stubbs Rd, Happy Valley, Hong Kong",
        contact: "+852 3651 8888",
      },
    },
  ],
};

const getLocations = () => {
  return response;
};

const LocationService = {
  getLocations,

};

export default LocationService;
