import axios from 'axios';

const API_URL = 'https://your-backend-url.com/api';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer YOUR_API_KEY`, 
    'Content-Type': 'application/json',
  },
});

export const loginUser = async (email, password) => {
  try {
    const response = await axiosInstance.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const registerUser = async (email, password) => {
  try {
    const response = await axiosInstance.post('/register', { email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
