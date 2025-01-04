<template>
    <div class="bg-white pt-8 w-full flex justify-end border-b-4 border-site-blue fixed top-0 z-10">
        <div class="flex items-center gap-10 text-black mr-72 font-bold">
            <RouterLink 
                to="/transport-distribution" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('transport-distribution') ? 'text-white bg-site-blue' : ''"
                >
                توزيع الباصات
            </RouterLink>
            <RouterLink 
                to="/trip-distribution" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('trip-distribution') ? 'text-white bg-site-blue' : ''"
                >
                توزيع الرحلات
            </RouterLink>
            <RouterLink 
                to="/trip-view" 
                class="p-2 px-4 rounded-3xl"
                :class="[useRoute().path.includes('trip-view') ? 'text-white bg-site-blue' : '' , useRoute().path.includes('trip-add') ? 'text-white bg-site-blue' : '']"                >
                إدارة الرحلات
            </RouterLink>
            <RouterLink 
                to="/transport-view" 
                class="p-2 px-4 rounded-3xl"
                :class="[useRoute().path.includes('transport-view') ? 'text-white bg-site-blue' : '' , useRoute().path.includes('transport-add') ? 'text-white bg-site-blue' : '']"
                >
                إدارة الباصات
            </RouterLink>
        </div>

    </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';

</script>

<style scoped>

</style>