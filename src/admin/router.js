import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import page from './page.vue';
import login from './login.vue';

const routes = [
  {
    path: '/',
    component: login,
  },
  {
    path: '/pages',
    component: page,
  }
];

export default new VueRouter({ routes });