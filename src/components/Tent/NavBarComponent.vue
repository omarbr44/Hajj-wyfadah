<template>
    <div class="bg-white pt-8 w-full flex justify-end border-b-4 border-site-blue fixed top-0 z-10">
        <div class="flex items-center gap-10 text-black mr-72 font-bold">
            <RouterLink 
                to="/tent-category-view" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('tent-category-view') ? 'text-white bg-site-blue' : ''"
                >
                تصنيفات الخيام
            </RouterLink>
            <RouterLink 
                to="/tent-distribution" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('tent-distribution') ? 'text-white bg-site-blue' : ''"
                >
                توزيع الخيام
            </RouterLink>
            <RouterLink 
                to="/tent-view" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('tent-view') ? 'text-white bg-site-blue' : ''"
                >
                إدارة الخيام
            </RouterLink>
        </div>

    </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';

</script>

<style scoped>

</style>