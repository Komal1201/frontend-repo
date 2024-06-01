import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL + '/api',
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
  },
});

export default apiClient;
