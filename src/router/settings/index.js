import SettingsPage from '@/pages/settings/index.vue';
import SettingsProfilePage from '@/pages/settings/profile.vue';

const settingsRoutes = {
  path: '/settings',
  component: SettingsPage,
  meta: { requiresAuth: true },
  children: [
    {
      path: 'profile',
      name: 'settingsProfile',
      component: SettingsProfilePage,
    },
  ],
};

export default settingsRoutes;
