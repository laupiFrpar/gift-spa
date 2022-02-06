// any CSS you import will output into a single css file (app.css in this case)
import './assets/styles/app.scss';

import { createApp } from 'vue';
import App from './App.vue';
import HeaderLayout from './components/layout/TheHeader.vue';

createApp(App).mount('#app');
createApp(HeaderLayout).mount('#header');
