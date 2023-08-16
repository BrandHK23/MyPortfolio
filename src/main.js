import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import AboutMeItem from './components/AboutMeItem.vue';
import ProjectsItem from './components/ProjectsItem.vue';
import ContactItem from './components/ContactItem.vue';


const routes = [
  { path: '/about', component: AboutMeItem },
  { path: '/projects', component: ProjectsItem },
  { path: '/contact', component: ContactItem }
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });

const app = createApp(App);
app.use(router);
app.mount('#app');
