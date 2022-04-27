const tokenService = {
  set: (token: string) => {
    localStorage.setItem('token', token);
  },
  get: () => localStorage.getItem('token'),
  remove: () => {
    localStorage.removeItem('token');
  },
};

export default tokenService;
