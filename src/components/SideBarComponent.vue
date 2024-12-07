<template>
    <div class="w-[20%] bg-white py-8 flex flex-col items-center gap-10 shadow-xl relative z-10 h-fit transition-all"
        :class="sidebarHidden ? 'w-0' : ''">
        <img src="/img/logo.png" class="" alt="logo">
        <RouterLink to="" class="text-lg font-bold text-site-text-grey"
                          :class="sidebarHidden ? 'invisible' : ''">لوحة المعلومات</RouterLink>
        <RouterLink to="/company-info" class="w-full text-lg font-bold text-site-text-grey relative flex items-center justify-center">
            <div v-if="useRoute().path.includes('company-')" class="w-[75%] h-14 left-0 bg-site-blue absolute top-1/2 -translate-y-1/2" 
                style="border-top-right-radius: 8rem;border-bottom-right-radius: 8rem;"></div>
            <span 
            class="z-10 relative"
            :class="[useRoute().path.includes('company-') ? 'text-white' : '' , sidebarHidden ? 'invisible' : '']">الشركة</span>
        </RouterLink>
        <RouterLink to="/hajj-info/all" class="w-full text-lg font-bold text-site-text-grey relative flex items-center justify-center">
            <div v-if="useRoute().path.includes('hajj-')" class="w-[75%] h-14 left-0 bg-site-blue absolute top-1/2 -translate-y-1/2"
                 style="border-top-right-radius: 8rem;border-bottom-right-radius: 8rem;"></div>
            <span
             class="z-10 relative"
             :class="[useRoute().path.includes('hajj-') ? 'text-white' : '', sidebarHidden ? 'invisible' : '']">الحجاج</span>
        </RouterLink>
        <RouterLink to="/communication-send" class="w-full text-lg font-bold text-site-text-grey relative flex items-center justify-center">
            <div v-if="useRoute().path.includes('communication-')" class="w-[75%] h-14 left-0 bg-site-blue absolute top-1/2 -translate-y-1/2"
                 style="border-top-right-radius: 8rem;border-bottom-right-radius: 8rem;"></div>
            <span
             class="z-10 relative"
             :class="[useRoute().path.includes('communication-') ? 'text-white' : '', sidebarHidden ? 'invisible' : '']">التواصل</span>
        </RouterLink>
        <RouterLink to="/bed-tent-view" class="w-full text-lg font-bold text-site-text-grey relative flex items-center justify-center">
            <div v-if="useRoute().path.includes('bed-')" class="w-[75%] h-14 left-0 bg-site-blue absolute top-1/2 -translate-y-1/2"
                 style="border-top-right-radius: 8rem;border-bottom-right-radius: 8rem;"></div>
            <span
             class="z-10 relative"
             :class="[useRoute().path.includes('bed-') ? 'text-white' : '', sidebarHidden ? 'invisible' : '']">التسكين</span>
        </RouterLink>
        <RouterLink to="" class="text-lg font-bold text-site-text-grey" :class="sidebarHidden ? 'invisible' : ''">المواصلات</RouterLink>
        <RouterLink to="" class="text-lg font-bold text-site-text-grey" :class="sidebarHidden ? 'invisible' : ''">ادوات الإدارة والتنظيم</RouterLink>
        <RouterLink to="" class="text-lg font-bold text-site-text-grey" :class="sidebarHidden ? 'invisible' : ''">إدارة المستخدمين</RouterLink>
        <div class="profile flex flex-col items-center" :class="sidebarHidden ? 'invisible' : ''">
            <div class="bg-[#D2E3E8] size-16 rounded-full flex justify-center items-center">
                <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2188 14.375C13.2188 17.0437 14.302 19.6032 16.2301 21.4903C18.1582 23.3773 20.7732 24.4375 23.5 24.4375C26.2268 24.4375 28.8418 23.3773 30.7699 21.4903C32.698 19.6032 33.7812 17.0437 33.7812 14.375C33.7812 11.7063 32.698 9.14682 30.7699 7.25974C28.8418 5.37265 26.2268 4.3125 23.5 4.3125C20.7732 4.3125 18.1582 5.37265 16.2301 7.25974C14.302 9.14682 13.2188 11.7063 13.2188 14.375ZM38.1875 41.6875H7.34375C6.95421 41.6875 6.58063 41.536 6.30519 41.2665C6.02974 40.9969 5.875 40.6312 5.875 40.25V35.9375C5.875 34.0313 6.64871 32.2031 8.02593 30.8552C9.40315 29.5073 11.2711 28.75 13.2188 28.75H33.7812C35.7289 28.75 37.5968 29.5073 38.9741 30.8552C40.3513 32.2031 41.125 34.0313 41.125 35.9375V40.25C41.125 40.6312 40.9703 40.9969 40.6948 41.2665C40.4194 41.536 40.0458 41.6875 39.6562 41.6875H38.1875Z" fill="white"/>
                </svg>
            </div>
            <h1 class="text-2xl font-bold text-black my-1">{{ user.userName }}</h1>
            <p class="text-site-text-grey">{{ user.userEmail }}</p>
            <button @click="logout" class=" bg-red-600 text-white p-3 rounded-xl font-bold my-3">
                <span>تسجيل الخروج</span>
            </button>
        </div>
        <button @click="toggleSide" 
        class="sidebar-toggler py-5 px-4 flex justify-center items-center rounded-md bg-site-blue text-white absolute bottom-96 -translate-x-1/3 left-0"
        :class="sidebarHidden ? '-translate-x-[120%]' : ''">
            <span v-show="!sidebarHidden" style="line-height: 0;">></span>
            <span v-show="sidebarHidden" style="line-height: 0;"><</span>
        </button>
    </div>
</template>

<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';
import { ref } from 'vue';
const user = useUserStore()

const sidebarHidden = ref(false)
const emit = defineEmits(['toggleSidebar'])
const toggleSide = () => {
    sidebarHidden.value = !sidebarHidden.value
    emit('toggleSidebar',sidebarHidden.value)
}
const router = useRouter()
const logout = async () => {
    user.signOut()
    router.push('/')
}
</script>

<style scoped>

</style>