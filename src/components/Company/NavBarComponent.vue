<template>
    <div class="bg-white pt-8 w-full flex justify-end border-b-4 border-site-blue fixed top-0 z-10">
        <div class="flex items-center gap-16 text-black mr-72 font-bold">
            <RouterLink 
                to="/company-location" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('location') ? 'text-white bg-site-blue' : ''"
                >
                المواقع
            </RouterLink>
            <RouterLink 
                to="/company-program" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('program') ? 'text-white bg-site-blue' : ''"
                >
                البرامج
            </RouterLink>
            <RouterLink 
                to="/company-employee" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('employee') ? 'text-white bg-site-blue' : ''"
                >
                إدارة الموظفين
            </RouterLink>
            <RouterLink 
                to="/company-branshes" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('branshes') ? 'text-white bg-site-blue' : ''"
                >
                إدارة الفروع
            </RouterLink>
            <RouterLink 
                to="/company-departments" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('departments') ? 'text-white bg-site-blue' : ''"
                >
                الإدارات
            </RouterLink>
            <RouterLink 
                to="/companyinfo" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path == '/companyinfo' ? 'text-white bg-site-blue' : ''"
                >
                معلومات الشركة
            </RouterLink>
        </div>

    </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';

</script>

<style scoped>

</style>