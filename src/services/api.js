import axios from 'axios';

const api = axios.create({
  baseURL: 'http://167.172.16.177:80',
});

export default api;
