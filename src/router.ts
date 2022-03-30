import { createRouter, createWebHistory } from 'vue-router';
import Test from './components/Test.vue';
import { Loading } from 'quasar';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:route?',
      name: 'Test',
      component: Test,
    },
  ],
});

router.afterEach((to) => {
  if (to.params.route !== '') {
    Loading.show();
    setTimeout(Loading.hide, 10000);
  }
});
export default router;
