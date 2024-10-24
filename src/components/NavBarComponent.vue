<template>
    <div class="bg-white pt-8 w-full flex justify-end border-b-4 border-site-blue fixed top-0 z-10">
        <div class="flex items-center gap-16 text-black mr-72 font-bold">
            <RouterLink to="">البرامج</RouterLink>
            <RouterLink to="">إدارة الموظفين</RouterLink>
            <RouterLink to="">إدارة الفروع</RouterLink>
            <RouterLink to="">الإدارات</RouterLink>
            <RouterLink to="" class="p-2 px-4 text-white bg-site-blue rounded-3xl">معلومات الشركة</RouterLink>
        </div>

    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style scoped>

</style>