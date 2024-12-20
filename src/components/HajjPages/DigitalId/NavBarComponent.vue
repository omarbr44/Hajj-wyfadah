<template>
    <div class="bg-white pt-8 w-full flex justify-end border-b-4 border-site-blue fixed top-0 z-10">
        <div class="flex items-center gap-10 text-black mr-72 font-bold">
            <RouterLink 
                to="/hajjpage-digitalid-card" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path == '/hajjpage-digitalid-card' ? 'text-white bg-site-blue' : ''"
                >
                بطاقة الحاج
            </RouterLink>
            <RouterLink 
                to="/hajjpage-digitalid" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path == '/hajjpage-digitalid' ? 'text-white bg-site-blue' : ''"
                >
                جميع معلوماتي
            </RouterLink>
        </div>

    </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';

</script>

<style scoped>

</style>