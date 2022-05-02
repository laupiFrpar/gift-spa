import { createI18n } from 'vue-i18n';
import enUS from '@/translations/locales/en-US.json';
import frFR from '@/translations/locales/fr-FR.json';

const i18n = createI18n({
  legacy: false, // Set `false`, to use Composition API
  locale: 'fr-FR',
  fallbackLocale: 'en-US',
  globalInjection: true, // to use everywhere
  messages: {
    'en-US': enUS,
    'fr_FR': frFR,
  },
});

export default i18n;
