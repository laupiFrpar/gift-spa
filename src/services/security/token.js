const tokenService = {
  store: (token) => {
    localStorage.setItem('token', token);
  },
  get: () => localStorage.getItem('token'),
};

export default tokenService;
