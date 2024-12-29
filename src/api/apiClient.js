import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://localhost:7079/api', // Replace with your backend's base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
