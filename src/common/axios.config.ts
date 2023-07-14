import axios from 'axios';

const defaultConfig = {
  method: 'GET',
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
};

export const axiosInstance = axios.create(defaultConfig);

// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//
//   return config;
// });

axiosInstance.interceptors.response.use((response) => {
  return response;
});
