const tokenService = {
  set: (token) => {
    localStorage.setItem('token', token);
  },
  get: () => localStorage.getItem('token'),
  remove: () => {
    localStorage.removeItem('token');
  },
};

export default tokenService;
