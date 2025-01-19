<template>
    <div class="bg-white pt-8 w-full flex justify-end border-b-4 border-site-blue fixed top-0 z-10">
        <div class="flex items-center gap-16 text-black mr-72 font-bold">
            <RouterLink 
                to="/tents-reports" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('tents-reports') ? 'text-white bg-site-blue' : ''"
                >
                تقارير الخيام
            </RouterLink>
            <RouterLink 
                to="/buses-reports" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('buses-reports') ? 'text-white bg-site-blue' : ''"
                >
                تقارير الباصات
            </RouterLink>
            <RouterLink 
                to="/tentsgoing-reports" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('tentsgoing-reports') ? 'text-white bg-site-blue' : ''"
                >
                تقارير الذهاب للمخيم
            </RouterLink>
            <RouterLink 
                to="/location-reports" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('location-reports') ? 'text-white bg-site-blue' : ''"
                >
                تقارير المواقع
            </RouterLink>
        </div>

    </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';

</script>

<style scoped>

</style>