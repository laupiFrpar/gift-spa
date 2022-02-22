import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/Home.vue';
import LoginPage from '@/pages/security/Login.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
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
