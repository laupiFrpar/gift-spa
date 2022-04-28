// any CSS you import will output into a single css file (app.css in this case)
import './assets/styles/app.scss';

import { createApp } from 'vue';
import i18n from './translations';
import pinia from './stores';
import router from './router';
import App from './App.vue';

import 'bootstrap/js/dist/dropdown';

createApp(App)
  .use(pinia)
  .use(router)
  .use(i18n)
  .mount('#app');
