<script setup>
  import { RouterView, useRoute } from 'vue-router';
  import NavBarComponent from './components/Company/NavBarComponent.vue';
  import SideBarComponent from './components/SideBarComponent.vue';
  import { computed } from 'vue';
  const route = useRoute()
  const showNavs = computed(()=>{
    if( route.path == '/' || route.path == '/signup' || route.path == '/signin' 
        || route.path == '/passwordresubmit-email' || route.path == '/passwordresubmit-password'  )
        return false
    else 
        return true
  })
</script>

<template>
  <div class="overflow-x-hidden">
    <NavBarComponent v-show="showNavs" />
    <div class="flex justify-stretch">
      <RouterView />
      <SideBarComponent v-show="showNavs" />
    </div>
  </div>
</template>

<style scoped>

</style>
