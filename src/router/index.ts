import { createRouter, createWebHistory } from 'vue-router';
import AboutComponent from '../views/AboutComponent.vue';
import HomeComponent from '../views/HomeComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
