import { createApp } from 'vue'
import App from './App.vue'

import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

import router from './router/index'
import store from './store/index'
 

const app = createApp(App);
app.use(ArcoVue);
app.use(router);
app.use(store);
app.mount('#app');