import axios from 'axios';
import { toast } from 'react-toastify';
import { getCookieValue } from './utils';
import { JWT_LOCAL_STORAGE_KEY } from './constants';

const defaultConfig = {
  method: 'GET',
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
};

export const axiosInstance = axios.create(defaultConfig);

axiosInstance.interceptors.request.use((config) => {
  const token = getCookieValue(JWT_LOCAL_STORAGE_KEY);
  config.headers.Authorization = `Bearer ${token ?? ''}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    toast.error(error.message);
  }
);
