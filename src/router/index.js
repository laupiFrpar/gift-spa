import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import SecurityLoginPage from '@/pages/security/SecurityLoginPage.vue';
import securityStore from '@/stores/security';

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { requiresAuth: false },
    component: SecurityLoginPage,
  },
  {
    path: '/',
    name: 'home',
    meta: { requiresAuth: true },
    component: HomePage,
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

/* eslint-disable consistent-return */
router.beforeEach(async (to) => {
  const store = securityStore();

  if (to.meta.requiresAuth && !store.isLogged) {
    return {
      name: 'login',
      query: { redirect: to.fullPath },
    };
  }

  // If the user is connected and is on page which not require authentication, he is redirected to
  // home page.
  if (!to.meta.requiresAuth && store.isLogged) {
    return {
      name: 'home',
    };
  }
});
/* eslint-enable consistent-return */

export default router;
