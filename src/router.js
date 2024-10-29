import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from './stores/user'

import Home from './page/Home.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/signup',
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
      meta: {requiresAuth: true}
    },
    {
      path: '/company-departments',
      name: 'company-departments',
      component: () => import('./page/CompnayDepartment/CompanyDepartmentsView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/company-departments-add',
      name: 'company-departments-add',
      component: () => import('./page/CompnayDepartment/CompanyDepartmentsAdd.vue'),
      meta: {requiresAuth: true}
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
router.beforeEach((to, from, next) => {
  const user = useUserStore()
  if(to.matched.some((record)=> record.meta.requiresAuth)){
    if(user.userToken){
      next()
      return
    }
    next("signin")
  }
/*   else if(to.matched.some((record)=> record.meta.admin)){
    if(user.token && user.userType == 1){
      next()
      return
    }
    next("login")
  } */
  else{
    next()
  }
})

export default router;
