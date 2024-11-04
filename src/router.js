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
      path: '/company-departments-add/:id',
      name: 'company-departments-add',
      component: () => import('./page/CompnayDepartment/CompanyDepartmentsAdd.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/company-branshes',
      name: 'company-branshes',
      component: () => import('./page/CompnayBransh/CompnayBranshView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/company-branshes-add',
      name: 'company-branshes-add',
      component: () => import('./page/CompnayBransh/CompnayBranshAdd.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/company-employee',
      name: 'company-employee',
      component: () => import('./page/CompanyEmployee/CompnayEmployeeView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/company-employee-add/:id',
      name: 'company-employee-add',
      component: () => import('./page/CompanyEmployee/CompnayEmployeeAdd.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/company-location',
      name: 'company-location',
      component: () => import('./page/CompnayLocation/CompanyLocationView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/company-location-add/:id',
      name: 'company-location-add',
      component: () => import('./page/CompnayLocation/CompanyLocationAdd.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/company-program',
      name: 'company-program',
      component: () => import('./page/CompnayProgram/CompanyProgramView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/company-program-add/:id',
      name: 'company-program-add',
      component: () => import('./page/CompnayProgram/CompanyProgramAdd.vue'),
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
