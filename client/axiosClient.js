import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8081/',
  json: true,
});

export default axiosClient;