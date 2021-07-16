import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';

import './assets/style/reset.css';

createApp(App).use(Router).mount('#app');
