import SettingsPage from '@/pages/settings/SettingsPage.vue';
import SettingsProfilePage from '@/pages/settings/SettingsProfilePage.vue';

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
