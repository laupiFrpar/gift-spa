const tokenService = {
  set: (tokens) => {
    localStorage.setItem('token', tokens.token);
    localStorage.setItem('refresh_token', tokens.refresh_token);
  },
  get: () => ({
    token: localStorage.getItem('token'),
    refresh_token: localStorage.getItem('refresh_token'),
  }),
  remove: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
  },
};

export default tokenService;
