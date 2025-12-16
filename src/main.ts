import './assets/index.css'
import { createApp } from 'vue'
import { createPinia } from "pinia"
import App from './App.vue'
import { routes } from '@/router'
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
   history: createWebHistory(),
   routes
});
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app')
