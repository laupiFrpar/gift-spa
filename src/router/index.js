import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import SecurityLoginPage from '@/pages/security/SecurityLoginPage.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: SecurityLoginPage,
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
