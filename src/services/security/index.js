import securityStore from '@/stores/security';
import router from '@/router';
import api from '@/services/api';
import tokenService from './token';

const securityService = {
  login: ({ username, password }) => {
    const store = securityStore();

    return api.post('/api/authentication', { username, password })
      .then(
        async (response) => {
          if (response.data.token) {
            tokenService.set(response.data, response.data);
          }

          return api.get(response.data.user['@id'])
            .then(
              (userResponse) => {
                localStorage.setItem('user', JSON.stringify(userResponse.data));
                store.loginSuccess(userResponse.data);

                return userResponse.data;
              },
            );
        },
        (errorAuthentication) => {
          store.loginFailure();

          return errorAuthentication.response ? errorAuthentication.response.data.message : 'Unknown error is happen';
        },
      );
  },
  logout: () => {
    const store = securityStore();

    tokenService.remove();
    localStorage.removeItem('user');
    store.logout();
    router.push('/login');
  },
  getUser: () => {
    const store = securityStore();

    return store.getUser();
  },
  refreshToken: () => api.post('/api/authentication_refresh', { refresh_token: tokenService.get().refresh_token })
    .then((response) => {
      if (response.data.token) {
        tokenService.set(response.data);
      }
    })
  ,
};

export default securityService;
