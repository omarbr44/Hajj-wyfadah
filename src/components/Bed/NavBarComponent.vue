<template>
    <div class="bg-white pt-8 w-full flex justify-end border-b-4 border-site-blue fixed top-0 z-10">
        <div class="flex items-center gap-10 text-black mr-72 font-bold">
            <RouterLink 
                to="/bed-distiribution" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('bed-distiribution') ? 'text-white bg-site-blue' : ''"
                >
                التوزيع
            </RouterLink>
            <RouterLink 
                to="/bed-tent-view" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('bed-tent') ? 'text-white bg-site-blue' : ''"
                >
                تحضيرالأسرة في الخيام
            </RouterLink>
        </div>

    </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';

</script>

<style scoped>

</style>