import securityStore from '@/stores/security';
import api from '../api';
import tokenService from './token';

const securityService = {
  login: ({ username, password }: { username: string, password: string}) => {
    const store = securityStore();

    return api.post('/api/authentication', { username, password })
      .then(
        async (response) => {
          if (response.data.token) {
            tokenService.set(response.data.token);
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
        (error) => {
          store.loginFailure();

          return error.response.data.message;
        },
      );
  },
  logout: () => {
    const store = securityStore();

    tokenService.remove();
    localStorage.removeItem('user');
    store.logout();
  },
  getUser: (): User|null => {
    const store = securityStore();

    return store.getUser();
  }
};

export default securityService;
