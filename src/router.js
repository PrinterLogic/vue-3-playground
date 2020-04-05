/* eslint-disable linebreak-style */
/* eslint-disable default-case */
import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store/store';

import { SearchTypes } from '@/enums/searchTypes'
import { testIsGuid } from '@/store/helperModules/common.module';

// vuex and router do not have Vue3 relases yet I just found that out. 
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TheHome',
      component: () => import('@/views/home/TheHome.vue'),
    },
  ],
});

export default router;
