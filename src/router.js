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

    // Company routes
    {
      path: '/company-info',
      name: 'company-info',
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

    // Hajj routes
    {
      path: '/hajj-info/:id',
      name: 'hajj-info',
      component: () => import('./page/Hajj/HajjInfo/HajjInfoView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/hajj-info-add/:id',
      name: 'hajj-info-add',
      component: () => import('./page/Hajj/HajjInfo/HajjInfoAdd.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/hajj-group',
      name: 'hajj-group',
      component: () => import('./page/Hajj/HajjGroup/HajjGroupView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/hajj-group-add/:id',
      name: 'hajj-group-add',
      component: () => import('./page/Hajj/HajjGroup/HajjGroupAdd.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/hajj-group-link/:id',
      name: 'hajj-group-link',
      component: () => import('./page/Hajj/HajjGroup/HajjGroupLink.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/hajj-state',
      name: 'hajj-state',
      component: () => import('./page/Hajj/HajjState/HajjStateView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/hajj-nation',
      name: 'hajj-nation',
      component: () => import('./page/Hajj/HajjNation/HajjNationView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/hajj-attachment',
      name: 'hajj-attachment',
      component: () => import('./page/Hajj/HajjAttachment/HajjAttachmentView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/hajj-attachment-add',
      name: 'hajj-attachment-add',
      component: () => import('./page/Hajj/HajjAttachment/HajjAttachmentAdd.vue'),
      meta: {requiresAuth: true}
    },
    
    // Communication routes
    {
      path: '/communication-send',
      name: 'communication-send',
      component: () => import('./page/Communication/CommunicationSend/CommunicationSendMsg.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/communication-login',
      name: 'communication-login',
      component: () => import('./page/Communication/CommunicationAccount/CommunicationAccountLogin.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/communication-login/account/:id',
      name: 'communication-account',
      component: () => import('./page/Communication/CommunicationAccount/CommunicationAccount.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/communication-hajjmsgs',
      name: 'communication-hajjmsgs',
      component: () => import('./page/Communication/CommunicationHajjMsg/CommunicationHajjMsgView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/communication-hajjmsgs/:id',
      name: 'communication-hajjmsg',
      component: () => import('./page/Communication/CommunicationHajjMsg/CommunicationHajjMsg.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/communication-hajjmsgs/:id/details/:id',
      name: 'communication-hajjmsg-detals',
      component: () => import('./page/Communication/CommunicationHajjMsg/CommunicationHajjMsgDetails.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/communication-inquery',
      name: 'communication-inquery',
      component: () => import('./page/Communication/CommunicationInquery/CommunicationInqueryView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/communication-inquery/:id',
      name: 'communication-inquery-add',
      component: () => import('./page/Communication/CommunicationInquery/CommunicationInqueryAdd.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/communication-schedule',
      name: 'communication-schedule',
      component: () => import('./page/Communication/CommunicationSchedule/CommunicationScheduleView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/communication-schedule-add',
      name: 'communication-schedule-add',
      component: () => import('./page/Communication/CommunicationSchedule/CommunicationScheduleNew.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/communication-schedule-edit/:id',
      name: 'communication-schedule-edit',
      component: () => import('./page/Communication/CommunicationSchedule/CommunicationScheduleEdit.vue'),
      meta: {requiresAuth: true}
    },
/*   
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
