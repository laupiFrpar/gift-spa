import SecurityLoginPage from '@/pages/security/loginPage.vue';

const securityRoutes = {
  path: '/login',
  name: 'login',
  meta: { requiresAuth: false },
  component: SecurityLoginPage,
};

export default securityRoutes;
