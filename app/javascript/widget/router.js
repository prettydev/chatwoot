import Vue from 'vue';
import Router from 'vue-router';
import ViewWithHeader from './components/layouts/ViewWithHeader.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: ViewWithHeader,
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('./auth/Login.vue'),
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('./auth/Register.vue'),
        },
      ],
    },
  ],
});
