<script setup>
  import { RouterView, useRoute } from 'vue-router';
  import NavBarComponent from './components/Company/NavBarComponent.vue';
  import NavBarComponent2 from './components/Hajj/NavBarComponent.vue';
  import NavBarComponent3 from './components/Communication/NavBarComponent.vue';
  import NavBarComponent4 from './components/Bed/NavBarComponent.vue';
  import NavBarComponent5 from './page/ManagementSetting/NavBarComponent.vue';
  import NavBarComponent6 from './components/Hotel/NavBarComponent.vue';
  import NavBarComponent7 from './components/Tent/NavBarComponent.vue';
  import NavBarComponent8 from './components/Transport/NavBarComponent.vue';
  import NavBarComponent9 from './components/UserManagment/NavBarComponent.vue';
  import HajjNavBarComponent1 from './components/HajjPages/NotificationAndActions/NavBarComponent.vue';
  import HajjNavBarComponent2 from './components/HajjPages/Messages/NavBarComponent.vue';
  import HajjNavBarComponent3 from './components/HajjPages/Attachment/NavBarComponent.vue';
  import HajjNavBarComponent4 from './components/HajjPages/DigitalId/NavBarComponent.vue';

  import SideBarComponent from './components/SideBarComponent.vue';
  import HajjSideBarComponent from './components/HajjSideBarComponent.vue';
  import { computed, ref } from 'vue';
import Xicon from './components/icon/Xicon.vue';


  const route = useRoute()
  const showNavs = computed(()=>{
    if( route.path == '/' || route.path == '/signup' || route.path == '/signin' 
        || route.path == '/passwordresubmit-email' || route.path == '/passwordresubmit-password'
        || route.path.includes('hotelprint'))
        return false
    else 
        return true
  })
  const showActiveNav = computed(()=>{
    if(route.path.includes('company-'))
      return NavBarComponent
    else if(route.path.includes('hajj-'))
      return NavBarComponent2
    else if(route.path.includes('communication-'))
      return NavBarComponent3
    else if(route.path.includes('bed-'))
      return NavBarComponent4
    else if(route.path.includes('managment-setting'))
      return NavBarComponent5
    else if(route.path.includes('hotel-'))
      return NavBarComponent6
    else if(route.path.includes('tent-'))
      return NavBarComponent7
    else if(route.path.includes('transport-') || route.path.includes('trip-'))
      return NavBarComponent8
    else if(route.path.includes('usermanagment-') || route.path.includes('userpermissions-'))
      return NavBarComponent9
    else if(route.path.includes('hajjpage-notifications'))
      return HajjNavBarComponent1
    else if(route.path.includes('hajjpage-messages') || route.path.includes('hajjpage-recieved-messages'))
      return HajjNavBarComponent2
    else if(route.path.includes('hajjpage-attachment'))
      return HajjNavBarComponent3
    else if(route.path.includes('hajjpage-digitalid'))
      return HajjNavBarComponent4
  })
  const showActiveSideNav = computed(()=>{
    if(route.path.includes('hajjpage-'))
      return HajjSideBarComponent
    else
      return SideBarComponent
  })


  const sidebarHiddenState = ref(false)
  const toggleSidebar = (sidebarHidden) => {
    sidebarHiddenState.value = sidebarHidden
  }

</script>

<template>
    <notifications>
      <template #body="props">
        <div class="vue-notification"
             :class="props.item.type == 'error' ? 'notification-error' : 'notification-success'">
          <Xicon v-if="props.item.type == 'error'" :notification="true" />
          <img v-else src="/img/checked.png" alt="">
          <p class="title font-bold text-xl mt-2">
            {{ props.item.title }}
          </p>
<!--           <button class="close" @click="props.close">
            <i class="fa fa-fw fa-close"></i>
          </button> -->
          <p class="title font-bold">
            {{ props.item.text }}
          </p>
        </div>
      </template>
    </notifications>
  <div class="overflow-x-hidden">
    <component 
      :is="showActiveNav"
      v-show="showNavs"
    >
    </component> 
    <div class="flex justify-stretch">
      <RouterView class="transition-all" :class="sidebarHiddenState ? 'w-full' : ''" />
      <component 
        :is="showActiveSideNav"
        v-show="showNavs"
        @toggleSidebar="toggleSidebar"
      />
    </div>
  </div>
</template>

<style>
.rules-section::-webkit-scrollbar {
            width: 15px;
        }
.rules-section::-webkit-scrollbar-track {
            border-radius: 2px;
            background-color: none;
        }
.rules-section::-webkit-scrollbar-thumb {
            cursor: auto;
            border-radius: 8px;
            border: 3px solid transparent;
            background-clip: content-box;
            background-color: #48b4c3;
        }

        
        .vue-notification {
  margin: 0 5px 5px;
  padding: 10px;
  font-size: 12px;
  color: #ffffff;
}

  .notification-success {
    background: #68cd86 !important;
    border-left-color: #42a85f !important;
  }

  .notification-warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  .notification-error {
    background: #e54d42 !important;
    border-left-color: #b82e24 !important;
  }
</style>
