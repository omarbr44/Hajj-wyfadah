<template>
    <div class="bg-white pt-8 w-full flex justify-end border-b-4 border-site-blue fixed top-0 z-10">
        <div class="flex items-center gap-10 text-black mr-72 font-bold">
            <RouterLink 
                to="/mobile-hajjmove" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('mobile-hajjmove') ? 'text-white bg-site-blue' : ''"
                >
                تنقلات الحج
            </RouterLink>
            <RouterLink 
                to="/mobile-livestream" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('mobile-livestream') ? 'text-white bg-site-blue' : ''"
                >
                البث المباشر
            </RouterLink>
            <RouterLink 
                to="/mobile-imggallary" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('mobile-imggallary') ? 'text-white bg-site-blue' : ''"
                >
                معرض الصور
            </RouterLink>
            <RouterLink 
                to="/mobile-health" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('mobile-health') ? 'text-white bg-site-blue' : ''"
                >
                صحتك في الحج
            </RouterLink>
            <RouterLink 
                to="/mobile-tripprograms" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('mobile-tripprograms') ? 'text-white bg-site-blue' : ''"
                >
                برامج الرحلة
            </RouterLink>
            <RouterLink 
                to="/mobile-condition" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('mobile-condition') ? 'text-white bg-site-blue' : ''"
                >
                شروط الحملة
            </RouterLink>
            <RouterLink 
                to="/mobile-about" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('mobile-about') ? 'text-white bg-site-blue' : ''"
                >
                عن الكاف
            </RouterLink>
        </div>

    </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';

</script>

<style scoped>

</style>