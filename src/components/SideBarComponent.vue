<template>
    <div class="w-[20%] bg-white h-full pt-8 flex flex-col items-center gap-10 shadow-xl relative z-10">
        <img src="../assets/img/logo.png" class="" alt="logo">
        <RouterLink to="" class="text-lg font-bold text-site-text-grey">لوحة المعلومات</RouterLink>
        <RouterLink to="" class="w-full text-lg font-bold text-site-text-grey relative flex items-center justify-center">
            <div class="w-[75%] h-14 left-0 bg-site-blue absolute top-1/2 -translate-y-1/2"
                 style="border-top-right-radius: 8rem;border-bottom-right-radius: 8rem;"></div>
            <span class="text-white z-10 relative">الشركة</span>
        </RouterLink>
        <RouterLink to="" class="text-lg font-bold text-site-text-grey">الحجاج</RouterLink>
        <RouterLink to="" class="text-lg font-bold text-site-text-grey">التواصل</RouterLink>
        <RouterLink to="" class="text-lg font-bold text-site-text-grey">التسكين</RouterLink>
        <RouterLink to="" class="text-lg font-bold text-site-text-grey">المواصلات</RouterLink>
        <RouterLink to="" class="text-lg font-bold text-site-text-grey">ادوات الإدارة والتنظيم</RouterLink>
        <RouterLink to="" class="text-lg font-bold text-site-text-grey">إدارة المستخدمين</RouterLink>
        <div class="profile flex flex-col items-center">
            <div class="bg-[#D2E3E8] size-16 rounded-full flex justify-center items-center">
                <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2188 14.375C13.2188 17.0437 14.302 19.6032 16.2301 21.4903C18.1582 23.3773 20.7732 24.4375 23.5 24.4375C26.2268 24.4375 28.8418 23.3773 30.7699 21.4903C32.698 19.6032 33.7812 17.0437 33.7812 14.375C33.7812 11.7063 32.698 9.14682 30.7699 7.25974C28.8418 5.37265 26.2268 4.3125 23.5 4.3125C20.7732 4.3125 18.1582 5.37265 16.2301 7.25974C14.302 9.14682 13.2188 11.7063 13.2188 14.375ZM38.1875 41.6875H7.34375C6.95421 41.6875 6.58063 41.536 6.30519 41.2665C6.02974 40.9969 5.875 40.6312 5.875 40.25V35.9375C5.875 34.0313 6.64871 32.2031 8.02593 30.8552C9.40315 29.5073 11.2711 28.75 13.2188 28.75H33.7812C35.7289 28.75 37.5968 29.5073 38.9741 30.8552C40.3513 32.2031 41.125 34.0313 41.125 35.9375V40.25C41.125 40.6312 40.9703 40.9969 40.6948 41.2665C40.4194 41.536 40.0458 41.6875 39.6562 41.6875H38.1875Z" fill="white"/>
                </svg>
            </div>
            <h1 class="text-2xl font-bold text-black my-1">عبدالله</h1>
            <p class="text-site-text-grey">mail@gmail.com</p>
        </div>

    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style scoped>

</style>