import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: HomePage,
    }, */
    {
      path: '/',
      name: 'signup',
      component: () => import('./page/SignUp.vue'),
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./page/SignIn.vue'),
    },
    {
      path: '/passwordresubmit-email',
      name: 'passwordresubmit-email',
      component: () => import('./page/PasswordResubmitEmail.vue'),
    },
    {
      path: '/passwordresubmit-password',
      name: 'passwordresubmit-password',
      component: () => import('./page/PasswordResubmitPassword.vue'),
    },
    {
      path: '/companyinfo',
      name: 'companyinfo',
      component: () => import('./page/CompanyInfo.vue'),
    },
/*     {
      path: '/retryPayment/:id',
      name: 'retryPayment',
      component: () => import('./pages/validatePayment.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: () => import('./pages/error.vue'),
    }, */
  ],
});

export default router;
