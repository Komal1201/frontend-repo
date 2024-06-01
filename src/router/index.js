import { createRouter, createWebHistory } from 'vue-router';
import MoviesList from '../components/MoviesList.vue';
import MovieDetail from '../components/MovieDetail.vue';
import AboutPage from '../components/AboutPage.vue';

const routes = [
  { path: '/', redirect: '/movies' },
  { path: '/movies', component: MoviesList },
  { path: '/movie/:id', component: MovieDetail },
  { path: '/about', component: AboutPage }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
