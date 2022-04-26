// any CSS you import will output into a single css file (app.css in this case)
import './assets/styles/app.scss';

import { createApp } from 'vue';
import pinia from './stores';
import router from './router';
import App from './App.vue';

// require('bootstrap/js/dist/dropdown');
import 'bootstrap/js/dist/dropdown';

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app');
