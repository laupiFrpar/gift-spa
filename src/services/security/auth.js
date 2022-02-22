import api from '@/services/api';
import tokenService from './token';

const auth = {
  login: ({ username, password }) => api.post('/api/login_check', { username, password })
    .then(
      (response) => {
        if (response.data.token) {
          tokenService.store(response.data.token);
        }

        return api.get(response.data.user['@id'])
          .then((userResponse) => userResponse.data);
      },
    ),
};

export default auth;
