<template>
    <div class="bg-white pt-8 w-full flex justify-end border-b-4 border-site-blue fixed top-0 z-10">
        <div class="flex items-center gap-10 text-black mr-72 font-bold">
            <RouterLink 
                to="/cardshajjsstickers-view" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('cardshajjsstickers-view') ? 'text-white bg-site-blue' : ''"
                >
                ملصقات الحجاج
            </RouterLink>
            <RouterLink 
                to="/cardshajjs-view" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('cardshajjs-view') ? 'text-white bg-site-blue' : ''"
                >
                بطاقات الحجاج
            </RouterLink>
            <RouterLink 
                to="/cardsmanagment-view" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('cardsmanagment-') ? 'text-white bg-site-blue' : ''"
                >
                إدارة البطاقات
            </RouterLink>
        </div>

    </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';

</script>

<style scoped>

</style>