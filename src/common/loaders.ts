import { redirect } from 'react-router-dom';

import { axiosInstance } from './axios.config';

const authLoader = async () => {
  try {
    const response = await axiosInstance.get('/auth/current');
    if (response?.status === 200) return response.data;
    return redirect('/auth/login');
  } catch (_err) {
    return redirect('/');
  }
};

export const reverseAuthLoader = async () => {
  try {
    const response = await axiosInstance.get('/auth/current');
    if (response?.status === 200) return redirect('/account');
    return null;
  } catch (_err) {
    return redirect('/');
  }
};

export default authLoader;
