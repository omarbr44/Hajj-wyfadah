<template>
    <div class="bg-white pt-8 w-full flex justify-end border-b-4 border-site-blue fixed top-0 z-10">
        <div class="flex items-center gap-10 text-black mr-72 font-bold">
            <RouterLink 
                to="" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('location') ? 'text-white bg-site-blue' : ''"
                >
                مرفقات الحاج
            </RouterLink>
            <RouterLink 
                to="/hajj-state" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('hajj-state') ? 'text-white bg-site-blue' : ''"
                >
                حالات الحاج
            </RouterLink>
            <RouterLink 
                to="" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('employee') ? 'text-white bg-site-blue' : ''"
                >
                المجموعات الداخلية
            </RouterLink>
            <RouterLink 
                to="/hajj-nation" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('hajj-nation') ? 'text-white bg-site-blue' : ''"
                >
                جنسيات المجموعات
            </RouterLink>
            <RouterLink 
                to="/hajj-group" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('hajj-group') ? 'text-white bg-site-blue' : ''"
                >
                المجموعات
            </RouterLink>
            <RouterLink 
                to="/hajj-info/all" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('hajj-info') ? 'text-white bg-site-blue' : ''"
                >
                الحجاج
            </RouterLink>
        </div>

    </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';

</script>

<style scoped>

</style>