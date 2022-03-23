import SettingsPage from '@/pages/settings/settingsPage.vue';
import SettingsProfilePage from '@/pages/settings/profilePage.vue';

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
