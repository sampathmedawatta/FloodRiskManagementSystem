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
      latitude: 22.26132,
      longitude: 114.17999,
      name: "Hong Kong Island",
      value: "Flood Location",
      type: "Flood",
      address: "Hong Kong Island",
      contact: "-",
    },
    {
      latitude: 22.28464,
      longitude: 114.18141,
      name: "Happy Valley Underground Floodwater Pump Station",
      value: "Floodwater Pump Station",
      type: "Pump Station",
      address: "Wong Nai Chung Rd, Happy Valley, Hong Kong",
      contact: "+852 6469 8700",
    },
    {
      latitude: 22.31896,
      longitude: 114.16946,
      name: "Yau Ma Tei Division Police Station",
      value: "Evacuation point",
      type: "Police",
      address: "3 Yau Cheung Rd, Yau Ma Tei, Hong Kong",
      contact: "+852 3661 1652",
    },
    {
      latitude: 22.27635,
      longitude: 114.18595,
      name: "Happy Valley Division Police Station",
      value: "Evacuation point",
      type: "Police",
      address: "60 Sing Woo Rd, Happy Valley, Hong Kong",
      contact: "+852 3661 1610",
    },
    {
      latitude: 22.2878,
      longitude: 114.16671,
      name: "Wan Chai Division Police Station",
      value: "Evacuation point",
      type: "Police",
      address: "1 Arsenal St, Admiralty, Hong Kong",
      contact: "+852 3661 1612",
    },
    {
      latitude: 22.29098,
      longitude: 114.1509,
      name: "Tai Kwun Police Services Centre",
      value: "Evacuation point",
      type: "Police",
      address: "Hong Kong, Central, Hollywood Rd, 10",
      contact: "+852 3661 1602",
    },
    {
      latitude: 22.29797,
      longitude: 114.20726,
      name: "North Point Police Station",
      value: "Evacuation point",
      type: "Police",
      address: "343 Java Rd, Tsat Tsz Mui, Hong Kong",
      contact: "+852 3661 1608",
    },
    {
      latitude: 22.30958,
      longitude: 113.93284,
      name: "Airport Police Station",
      value: "Evacuation point",
      type: "Police",
      address: "8 Catering Road West Chek Lap Kok, Lantau Island, Hong Kong",
      contact: "+852 3661 1688",
    },
    {
      latitude: 22.34752,
      longitude: 114.18049,
      name: "Hong Kong Baptist  Hospital",
      value: "Evacuation point",
      type: "Hospital",
      address: "1 Mok Cheong Street, 1 Mok Cheong St, Hong Kong",
      contact: "+852 3651 8888",
    },
    {
      latitude: 22.26495,
      longitude: 114.19515,
      name: "Hong Kong Adventist Hospital",
      value: "Evacuation point",
      type: "Hospital",
      address: "40 Stubbs Rd, Happy Valley, Hong Kong",
      contact: "+852 3651 8888",
    },
    {
      latitude: 22.26217,
      longitude: 114.16605,
      name: "Matilda International Hospital",
      value: "Evacuation point",
      type: "Hospital",
      address: "41 Mount Kellett Rd, The Peak, Hong Kong",
      contact: "+852 2849 0111",
    },
    {
      latitude: 22.27589,
      longitude: 114.19172,
      name: "Tung Wah Group of Hospitals Fung Yiu King Hospital",
      value: "Evacuation point",
      type: "Hospital",
      address: "9 Sandy Bay Rd, Pok Fu Lam, Hong Kong",
      contact: "+852 2855 6111",
    },
    {
      latitude: 22.28626,
      longitude: 113.93902,
      name: "North Lantau Hospital",
      value: "Evacuation point",
      type: "Hospital",
      address: "8 Chung Yan Rd, Hong Kong",
      contact: "+852 3467 7000",
    },
    ,
    {
      latitude: 22.2723,
      longitude: 114.13103,
      name: "Queen Mary Hospital",
      value: "Evacuation point",
      type: "Hospital",
      address: "Main block, Pok Fu Lam Rd, Hong Kong",
      contact: "+852 2255 3838",
    },
  ],
};

const getLocations = async () => {
  return await response;
};

const LocationService = {
  getLocations,

};

export default LocationService;
