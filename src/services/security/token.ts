const tokenService = {
  set: (token: Token) => {
    if (token.token) {
      localStorage.setItem('token', token.token);
    }

    if (token.refresh_token) {
      localStorage.setItem('refresh_token', token.refresh_token);
    }
  },
  get: (): Token => ({
    token: localStorage.getItem('token'),
    refresh_token: localStorage.getItem('refresh_token'),
  }),
  remove: () => {
    localStorage.removeItem('token');
  },
};

export default tokenService;
