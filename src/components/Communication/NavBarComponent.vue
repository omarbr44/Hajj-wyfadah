<template>
    <div class="bg-white pt-8 w-full flex justify-end border-b-4 border-site-blue fixed top-0 z-10">
        <div class="flex items-center gap-10 text-black mr-72 font-bold">
            <RouterLink 
                to="/hajj-attachment" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('hajj-attachment') ? 'text-white bg-site-blue' : ''"
                >
                الرسائل المرسلة
            </RouterLink>
            <RouterLink 
                to="/communication-hajjmsgs" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('communication-hajjmsgs') ? 'text-white bg-site-blue' : ''"
                >
                رسائل الحجاج
            </RouterLink>
            <RouterLink 
                to="/communication-inquery" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('communication-inquery') ? 'text-white bg-site-blue' : ''"
                >
                الاستفسارات
            </RouterLink>
            <RouterLink 
                to="/communication-schedule" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('communication-schedule') ? 'text-white bg-site-blue' : ''"
                >
                جدولة الرسائل والردود
            </RouterLink>
            <RouterLink 
                to="/communication-send" 
                class="p-2 px-4 rounded-3xl"
                :class="useRoute().path.includes('communication-send') ? 'text-white bg-site-blue' : ''"
                >
                ارسال الرسائل
            </RouterLink>
            <RouterLink 
                to="/communication-login" 
                class="p-2 rounded-3xl"
                :class="useRoute().path.includes('communication-login') ? 'text-white bg-site-blue' : ''"
                >
                حساب التواصل
            </RouterLink>
        </div>

    </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';

</script>

<style scoped>

</style>