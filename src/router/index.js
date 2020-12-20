import Vue from 'vue';
import VueRouter from 'vue-router';
import Characters from '../Characters/Characters.vue';
import Planets from '../Planets/Planets.vue';
import Vehicles from '../Vehicles/Vehicles.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Characters',
    component: Characters,
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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;