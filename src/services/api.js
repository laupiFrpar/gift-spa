import axios from 'axios';
import securityStore from '@/stores/security';
import tokenService from '@/services/security/token';
import router from '@/router';
import { useRouter, useRoute } from 'vue-router';

const api = axios.create({
  baseURL: import.meta.env.GIFT_API_URL,
  headers: {
    'Content-Type': 'application/ld+json',
  },
});

api.interceptors.request.use(
  (config) => {
    const newConfig = config;
    const { token } = tokenService.get();

    if (token) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }

    return newConfig;
  },
  (errorRequest) => Promise.reject(errorRequest),
);

api.interceptors.response.use(
  (response) => response,
  async (errorResponse) => {
    const originalConfig = errorResponse.config;
    const securityPaths = ['/api/authentication', '/api/authentication_refresh'];

    if (originalConfig
      && !securityPaths.includes(originalConfig.url)
      && errorResponse.response.status === 401
    ) {
      try {
        const rs = await api.post('/api/authentication_refresh', {
          refresh_token: tokenService.get().refresh_token,
        });
        tokenService.set(rs.data);

        return api(originalConfig);
      } catch (errorRefreshToken) {
        if (errorRefreshToken.response && errorRefreshToken.response.status === 401) {
          const store = securityStore();

          tokenService.remove();
          localStorage.removeItem('user');
          store.logout();
          router.push({ path: '/login' });
        }

        return Promise.reject(errorRefreshToken);
      }
    }

    return Promise.reject(errorResponse);
  },
);

export default api;
