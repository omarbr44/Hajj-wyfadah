<template>
    <div class="bg-white pt-8 w-full flex justify-end border-b-4 border-site-blue fixed top-0 z-10">
        <div class="flex items-center gap-10 text-black mr-72 font-bold">
            <RouterLink 
                to="/hajjpage-recieved-messages" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('/hajjpage-recieved-messages') ? 'text-white bg-site-blue' : ''"
                >
                الرسائل المرسلة
            </RouterLink>
            <RouterLink 
                to="/hajjpage-messages" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('/hajjpage-messages') ? 'text-white bg-site-blue' : ''"
                >
                الرسائل المستقبلة
            </RouterLink>
        </div>

    </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';

</script>

<style scoped>

</style>