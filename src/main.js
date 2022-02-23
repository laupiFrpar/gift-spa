// any CSS you import will output into a single css file (app.css in this case)
import './assets/styles/app.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app');
