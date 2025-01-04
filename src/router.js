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
      path: '/company-branshes-add/:id',
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
    // bed
    {
      path: '/bed-tent-view',
      name: 'bed-tent-view',
      component: () => import('./page/Bed/BedTent/BedView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/bed-tent-add/:id',
      name: 'bed-tent-add',
      component: () => import('./page/Bed/BedTent/BedAdd.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/bed-distiribution',
      name: 'bed-distiribution',
      component: () => import('./page/Bed/BedDistirbution/BedDistribution.vue'),
      meta: {requiresAuth: true}
    },

    // managment
    {
      path: '/managment-setting',
      name: 'managment-setting',
      component: () => import('./page/ManagementSetting/ManagmentSetting.vue'),
      meta: {requiresAuth: true}
    },
    // Hotel
    {
      path: '/hotel-view',
      name: 'hotel-view',
      component: () => import('./page/Hotel/HotelManagment/HotelManagmentView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/hotel-add/:id',
      name: 'hotel-add',
      component: () => import('./page/Hotel/HotelManagment/HotelManagmentAdd.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/hotelprint/:id',
      name: 'hotelprint',
      component: () => import('./page/Hotel/HotelManagment/HotelPrint.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/hotel-room-view',
      name: 'hotel-room-view',
      component: () => import('./page/Hotel/RoomManagment/RoomManagmentView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/hotel-roomcategory-view',
      name: 'hotel-roomcategory-view',
      component: () => import('./page/Hotel/RoomCategoryManagment/RoomCategoryManagmentView.vue'),
      meta: {requiresAuth: true}
    },

    // Tent
    {
      path: '/tent-view',
      name: 'tent-view',
      component: () => import('./page/Tent/TentManagment/TentManagmentView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/tent-add/:id',
      name: 'tent-add',
      component: () => import('./page/Tent/TentManagment/TentManagmentAdd.vue'),
      meta: {requiresAuth: true}
    },    
/*     {
      path: '/hotelprint/:id',
      name: 'hotelprint',
      component: () => import('./page/Hotel/HotelManagment/HotelPrint.vue'),
      meta: {requiresAuth: true}
    }, */
    {
      path: '/tent-category-view',
      name: 'tent-category-view',
      component: () => import('./page/Tent/TentCategoryManagment/TentCategoryManagmentView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/tent-distribution',
      name: 'tent-distribution',
      component: () => import('./page/Tent/TentDistribution/TentDistribution.vue'),
      meta: {requiresAuth: true}
    },
    // transportation
    {
      path: '/transport-view',
      name: 'transport-view',
      component: () => import('./page/Transport/TransportManagment/TransportManagmentView.vue'),
      meta: {requiresAuth: true}
  },
    {
      path: '/transport-add/:id',
      name: 'transport-add',
      component: () => import('./page/Transport/TransportManagment/TransportManagmentAdd.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/transport-distribution',
      name: 'transport-distribution',
      component: () => import('./page/Transport/TransportDistribution/TransportDistribution.vue'),
      meta: {requiresAuth: true}
    },
    // trip
    {
      path: '/trip-view',
      name: 'trip-view',
      component: () => import('./page/Trip/TripManagment/TripManagmentView.vue'),
      meta: {requiresAuth: true}
  },
    {
      path: '/trip-add/:id',
      name: 'trip-add',
      component: () => import('./page/Trip/TripManagment/TripManagmentAdd.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/trip-distribution',
      name: 'trip-distribution',
      component: () => import('./page/Trip/TripDistribution/TripDistribution.vue'),
      meta: {requiresAuth: true}
    },

    // hajj pages 
    {
      path: '/hajjpage-notifications',
      name: 'hajjpage-notifications',
      component: () => import('./page/HajjPages/NotificationAndActions/Notification/NotificationView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/hajjpage-notifications-distiribution',
      name: 'hajjpage-notifications-distiribution',
      component: () => import('./page/HajjPages/NotificationAndActions/Notification/DistiributionView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/hajjpage-notifications-manualchoosing',
      name: 'hajjpage-notifications-manualchoosing',
      component: () => import('./page/HajjPages/NotificationAndActions/Notification/ManualChoosing.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/hajjpage-notifications-manualchoosing-bed',
      name: 'hajjpage-notifications-manualchoosing-bed',
      component: () => import('./page/HajjPages/NotificationAndActions/Notification/ManualChoosingBed.vue'),
      meta: {requiresAuth: true}
    },
    

    {
      path: '/hajjpage-messages',
      name: 'hajjpage-messages',
      component: () => import('./page/HajjPages/Messages/MessagesView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/hajjpage-messages-view',
      name: 'hajjpage-messages-view',
      component: () => import('./page/HajjPages/Messages/MessageView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/hajjpage-recieved-messages',
      name: 'hajjpage-recieved-messages',
      component: () => import('./page/HajjPages/Messages/RecievedMessagesView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/hajjpage-recieved-messages-view',
      name: 'hajjpage-recieved-messages-view',
      component: () => import('./page/HajjPages/Messages/RecievedMessageView.vue'),
      meta: {requiresAuth: true}
    },

    {
      path: '/hajjpage-attachment',
      name: 'hajjpage-attachment',
      component: () => import('./page/HajjPages/Attachment/HajjAttachmentView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/hajjpage-attachment-add',
      name: 'hajjpage-attachment-add',
      component: () => import('./page/HajjPages/Attachment/HajjAttachmentAdd.vue'),
      meta: {requiresAuth: true}
    },

    {
      path: '/hajjpage-digitalid',
      name: 'hajjpage-digitalid',
      component: () => import('./page/HajjPages/DigitalId/DigitalIdView.vue'),
      meta: {requiresAuth: true}
    },

    {
      path: '/hajjpage-digitalid-card',
      name: 'hajjpage-digitalid-card',
      component: () => import('./page/HajjPages/DigitalId/DigitalIdCard.vue'),
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
