<script setup>
  import { RouterView, useRoute } from 'vue-router';
  import NavBarComponent from './components/Company/NavBarComponent.vue';
  import NavBarComponent2 from './components/Hajj/NavBarComponent.vue';
  import NavBarComponent3 from './components/Communication/NavBarComponent.vue';
  import NavBarComponent4 from './components/Bed/NavBarComponent.vue';
  import SideBarComponent from './components/SideBarComponent.vue';
  import { computed, ref } from 'vue';
  const route = useRoute()
  const showNavs = computed(()=>{
    if( route.path == '/' || route.path == '/signup' || route.path == '/signin' 
        || route.path == '/passwordresubmit-email' || route.path == '/passwordresubmit-password'  )
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
  })

</script>

<template>
  <div class="overflow-x-hidden">
    <component 
      :is="showActiveNav"
      v-show="showNavs"
    >
    </component> 
    <div class="flex justify-stretch">
      <RouterView />
      <SideBarComponent v-show="showNavs" />
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
</style>
