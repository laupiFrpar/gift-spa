import { createI18n } from 'vue-i18n';
import * as en from '@/translations/locale-en.json';
import * as fr from '@/translations/locale-fr.json';

type MessageSchema = typeof en;

const messages = {
  en,
  fr,
};

const i18n = createI18n<[MessageSchema], 'en' | 'fr'>({
  legacy: false, // Set `false`, to use Composition API
  locale: 'fr',
  fallbackLocale: 'en',
  globalInjection: true, // to use everywhere
  messages,
});

export default i18n;
