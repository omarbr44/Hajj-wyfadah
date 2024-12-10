<template>
    <div class="bg-white pt-8 w-full flex justify-end border-b-4 border-site-blue fixed top-0 z-10">
        <div class="flex items-center gap-10 text-black mr-72 font-bold">
            <RouterLink 
                to="/hotel-roomcategory-view" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('hotel-roomcategory-view') ? 'text-white bg-site-blue' : ''"
                >
                تصنيفات الغرف
            </RouterLink>
            <RouterLink 
                to="/bedtent-view" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('bedtent-view') ? 'text-white bg-site-blue' : ''"
                >
                توزيع الغرف
            </RouterLink>
            <RouterLink 
                to="/hotel-room-view" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('hotel-room-view') ? 'text-white bg-site-blue' : ''"
                >
                إدارة الغرف
            </RouterLink>
            <RouterLink 
                to="/hotel-view" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('hotel-view') ? 'text-white bg-site-blue' : ''"
                >
                إدارة الفنادق
            </RouterLink>
        </div>

    </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';

</script>

<style scoped>

</style>