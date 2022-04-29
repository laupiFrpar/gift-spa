import api from '@/services/api';
import tokenService from '@/services/security/token';
import securityStore from '@/stores/security';

const securityService = {
  login: ({ username, password }: { username: string, password: string}) => {
    const store = securityStore();

    return new Promise((resolve, reject) => {
      return api
        .post('/api/authentication', { username, password })
        .then(
          async (response) => {
            if (response.data.token) {
              tokenService.set(response.data);
            }

            return api
              .get(response.data.user['@id'])
              .then((userResponse) => {
                localStorage.setItem('user', JSON.stringify(userResponse.data));
                store.loginSuccess(userResponse.data);

                resolve(userResponse.data);
              })
          }
        )
        .catch((errorResponse) => {
          store.loginFailure();

          let errorMessage = 'Unknown error';

          if (errorResponse.response) {
            errorMessage = errorResponse.response.data.message;
          } else {
            errorMessage = errorResponse;
          }

          reject(errorMessage);
        })
    });
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
  },
};

export default securityService;
