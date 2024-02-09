import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import ProfileVue from './components/Profile.vue';
import { createRouter, createWebHistory } from 'vue-router';
import ResumeVue from './components/Resume/Resume.vue';
import WorksVue from './components/Works.vue';

const routes = [
    { path: '/profile', component: ProfileVue },
    { path: '/resume', component: ResumeVue },
    { path: '/works', component: WorksVue }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')