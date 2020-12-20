import Vue from 'vue';
import VueRouter from 'vue-router';
import Characters from '../Characters/Characters.vue';

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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;