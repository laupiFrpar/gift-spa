import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/homePage.vue';
import securityStore from '@/stores/security';
import settingsRoutes from '@/router/settings';
import securityRoutes from './security';

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { requiresAuth: true },
    component: HomePage,
  },
  securityRoutes,
  settingsRoutes,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

/* eslint-disable consistent-return */
router.beforeEach(async (to) => {
  const store = securityStore();

  // If unknown route, redirect to home
  if (to.matched.length === 0) {
    return { name: 'home' };
  }

  if (to.meta.requiresAuth && !store.isLogged) {
    return {
      name: 'login',
      query: { redirect: to.fullPath },
    };
  }

  // If the user is connected and is on page which not require authentication, he is redirected to
  // home page.
  if (!to.meta.requiresAuth && store.isLogged) {
    const redirectPath = to.query.redirect ? to.query.redirect : { name: 'home' };

    return redirectPath;
  }

  // next();
});
/* eslint-enable consistent-return */

export default router;
