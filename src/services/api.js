import axios from 'axios';
import tokenService from './security/token';

const api = axios.create({
  baseURL: import.meta.env.GIFT_API_URL,
  headers: {
    'Content-Type': 'application/ld+json',
  },
});

api.interceptors.request.use(
  (config) => {
    const newConfig = config;
    const token = tokenService.get();

    if (token) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }

    return newConfig;
  },
  (error) => {
    console.log(error);
  },
);

export default api;
