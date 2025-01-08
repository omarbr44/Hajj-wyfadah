<template>
    <div class="bg-white pt-8 w-full flex justify-end border-b-4 border-site-blue fixed top-0 z-10">
        <div class="flex items-center gap-10 text-black mr-72 font-bold">
            <RouterLink 
                to="/userpermissions-view" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('userpermissions-') ? 'text-white bg-site-blue' : ''"
                >
                إدارة الصلاحيات
            </RouterLink>
            <RouterLink 
                to="/usermanagment-view" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('usermanagment-') ? 'text-white bg-site-blue' : ''"
                >
                إدارة المستخدمين
            </RouterLink>
        </div>

    </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';

</script>

<style scoped>

</style>