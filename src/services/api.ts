import axios from 'axios';
import tokenService from './security/token';
import { API } from '@/app.constant';

const api = axios.create({
  baseURL: API.URL,
  headers: {
    'Content-Type': 'application/ld+json',
  },
});

api.interceptors.request.use(
  (config) => {
    const newConfig = config;
    const token = tokenService.get();

    if (token && newConfig.headers) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }

    return newConfig;
  },
);

export default api;
