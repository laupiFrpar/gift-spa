// import authService from '@/services/security/auth';
import { defineStore } from 'pinia';

const userStorage = localStorage.getItem('user');
const user: User = userStorage ? JSON.parse(userStorage) : null;
const initialState: State = user
  ? { isLogged: true, user }
  : { isLogged: false, user };

const securityStore = defineStore('security', {
  state: () => initialState,
  actions: {
    // login(data) {
    //   return authService.login(data)
    //     .then(
    //       (userData) => {
    //         this.loginSuccess(userData);

    //         return Promise.resolve(userData);
    //       },
    //       (error) => {
    //         this.loginFailure();

    //         return Promise.reject(error.response.data.message);
    //       },
    //     );
    // },
    loginSuccess(userData: User) {
      this.isLogged = true;
      this.user = userData;
    },
    loginFailure() {
      this.isLogged = false;
      this.user = null;
    },
    logout() {
      this.isLogged = false;
      this.user = null;
    },
  },
});

export default securityStore;

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
