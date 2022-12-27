import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./auth/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./auth/Register.vue'),
    },
  ],
});
