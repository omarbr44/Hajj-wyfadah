<template>
    <div class="bg-white pt-8 w-full flex justify-end border-b-4 border-site-blue fixed top-0 z-10">
        <div class="flex items-center gap-10 text-black mr-72 font-bold">
            <RouterLink 
                to="/hajjpage-attachment" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('/hajjpage-attachment') ? 'text-white bg-site-blue' : ''"
                >
                جميع المرفقات
            </RouterLink>
        </div>

    </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';

</script>

<style scoped>

</style>