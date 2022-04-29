import axios from 'axios';

import { API } from '@/app.constant';

import router from '@/router';
import tokenService from '@/services/security/token';
import securityStore from '@/stores/security';

const api = axios.create({
  baseURL: API.URL,
  headers: {
    'Content-Type': 'application/ld+json',
  },
});

api.interceptors.request.use(
  (config) => {
    const newConfig = config;
    const { token } = tokenService.get();

    if (token && newConfig.headers) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }

    return newConfig;
  },
);

api.interceptors.response.use(
  (response) => response,
  async (errorResponse: ErrorResponse) => {
    const originalConfig = errorResponse.config;
    const securityPaths = ['/api/authentication', '/api/authentication_refresh'];

    if (originalConfig
      && !securityPaths.includes(originalConfig.url)
      && errorResponse.response?.status === 401
    ) {
      try {
        const rs = await api.post('/api/authentication_refresh', {
          refresh_token: tokenService.get()?.refresh_token,
        });
        tokenService.set(rs.data);

        return api(originalConfig);
      } catch (errorRefreshResponse: any) {
        if (errorRefreshResponse.response?.status === 401) {
          const store = securityStore();

          tokenService.remove();
          localStorage.removeItem('user');
          store.logout();
          router.push({ path: '/login' });
        }

        return Promise.reject(errorRefreshResponse);
      }
    }

    return Promise.reject(errorResponse);
  }
)

export default api;
