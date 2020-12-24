import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../Home/Home.vue';
import Characters from '../Characters/Characters.vue';
import Planets from '../Planets/Planets.vue';
import Vehicles from '../Vehicles/Vehicles.vue';
import Starships from '../Starships/Starships.vue';
import Species from '../Species/Species.vue';
import Planet from '../Planets/Planet.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters,
  },
  {
    path: '/planets',
    name: 'Planets',
    component: Planets,
  },
  {
    path: '/vehicles',
    name: 'Vehicles',
    component: Vehicles,
  },
  {
    path: '/starships',
    name: 'Starships',
    component: Starships,
  },
  {
    path: '/species',
    name: 'Species',
    component: Species,
  },
  {
    path: '/planet',
    name: 'Planet',
    component: Planet,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;