import authService from '@/services/security/auth';
import { defineStore } from 'pinia';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

const securityStore = defineStore('security', {
  state: () => initialState,
  getters: {

  },
  actions: {
    login(data) {
      return authService.login(data)
        .then(
          (userData) => {
            this.loginSuccess(userData);

            return Promise.resolve(userData);
          },
          (error) => {
            this.loginFailure();

            return Promise.reject(error.response.data.message);
          },
        );
    },
    loginSuccess(userData) {
      this.status.loggedIn = true;
      this.user = userData;
    },
    loginFailure() {
      this.status.loggedIn = false;
      this.user = null;
    },
  },
});

export default securityStore;

// const auth = {
//   namespaced: true,
//   state: initialState,
//   actions: {
//     login({ commit }, data) {
//       return authService.login(data)
//         .then(
//           (userData) => {
//             commit('loginSuccess', userData);

//             return Promise.resolve(userData);
//           },
//           (error) => {
//             commit('loginFailure');

//             return Promise.reject(error.response.data.message);
//           },
//         );
//     },
//   },
//   mutations: {
//     loginSuccess(state, userData) {
//       state.status.loggedIn = true;
//       state.user = userData;
//     },
//     loginFailure(state) {
//       state.status.loggedIn = false;
//       state.user = null;
//     },
//   },
// };

// export default auth;

// import AuthService from '../services/auth.service';

// const user = JSON.parse(localStorage.getItem('user'));
// const initialState = user
//   ? { status: { loggedIn: true }, user }
//   : { status: { loggedIn: false }, user: null };

// export const auth = {
//   namespaced: true,
//   state: initialState,
//   actions: {
//     login({ commit }, user) {
//       return AuthService.login(user).then(
//         user => {
//           commit('loginSuccess', user);
//           return Promise.resolve(user);
//         },
//         error => {
//           commit('loginFailure');
//           return Promise.reject(error);
//         }
//       );
//     },
//     logout({ commit }) {
//       AuthService.logout();
//       commit('logout');
//     },
//     register({ commit }, user) {
//       return AuthService.register(user).then(
//         response => {
//           commit('registerSuccess');
//           return Promise.resolve(response.data);
//         },
//         error => {
//           commit('registerFailure');
//           return Promise.reject(error);
//         }
//       );
//     },
//     refreshToken({ commit }, accessToken) {
//       commit('refreshToken', accessToken);
//     }
//   },
//   mutations: {
//     loginSuccess(state, user) {
//       state.status.loggedIn = true;
//       state.user = user;
//     },
//     loginFailure(state) {
//       state.status.loggedIn = false;
//       state.user = null;
//     },
//     logout(state) {
//       state.status.loggedIn = false;
//       state.user = null;
//     },
//     registerSuccess(state) {
//       state.status.loggedIn = false;
//     },
//     registerFailure(state) {
//       state.status.loggedIn = false;
//     },
//     refreshToken(state, accessToken) {
//       state.status.loggedIn = true;
//       state.user = { ...state.user, accessToken: accessToken };
//     }
//   }
// };
