<template>
    <div class="w-[80%] bg-[#f9f9f9] min-h-screen py-10" >
        <div class="rtl-d px-10 pt-28">
            <h1 class="text-xl font-bold text-site-blue mb-5">كشف لتوزيع الحجاج في الباصات</h1>
    <hr>
    <div class="flex items-center gap-5 mb-10">
                <button id="menu-activator" class="flex flex-col items-center gap-1">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 0V2H17L11 11V18H7V11L1 2H0V0H18Z" fill="#5FC1CF"/>
                    </svg>
                    <p class="text-site-blue">صنف ب</p>
                </button>
                <v-menu activator="#menu-activator" :close-on-content-click="false">
                    <div class="bg-white shadow-md rounded-md">
                        <p class="text-site-blue font-bold rtl-d p-3">الموقع</p>
                        <div class="flex gap-10 items-center px-10 pt-1 mb-1 justify-end flex-wrap gap-y-5 w-[23rem]">
                            <div class="flex items-center">
                                <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">الكل</label>
                                <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </div>
                            <div class="flex items-center">
                                <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">باقة (4) الخيام المطورة</label>
                                <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </div>
                            <div class="flex items-center">
                                <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">باقة (٣) الخيام العزيزية</label>
                                <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </div>
                        </div>
                        <hr>
                        <p class="text-site-blue font-bold rtl-d p-3">مكان الخيمة</p>
                        <div class="flex gap-10 items-center px-10 pt-1 mb-1 justify-end flex-wrap gap-y-5 w-[23rem]">
                            <div class="flex items-center">
                                <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">الكل</label>
                                <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </div>
                            <div class="flex items-center">
                                <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">عرفات</label>
                                <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </div>
                            <div class="flex items-center">
                                <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">مزدلفة</label>
                                <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </div>
                        </div>
                        <hr>
                        <p class="text-site-blue font-bold rtl-d p-3">حالة تحضير ترتيب الأسرة</p>
                        <div class="flex gap-10 items-center px-10 pt-1 mb-1 justify-end flex-wrap gap-y-5 w-[23rem]">
                            <div class="flex items-center">
                                <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">الكل</label>
                                <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </div>
                            <div class="flex items-center">
                                <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">تم تحضير ترتيب الأسرة</label>
                                <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </div>
                            <div class="flex items-center">
                                <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">لم يتم التحضير ترتيب الأسرة</label>
                                <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </div>
                        </div>
                    </div>
                </v-menu> 
                <div class="w-[40%] relative">
                       <SearchComponent
                       api="api/v1/location/?search="
                       @resultSearch="searchResult" />
                    </div>  
            </div>
            <div class="w-full my-10 h-96 overflow-auto rules-section border border-[#979797] rounded p-4">
            <div class="w-full flex items-center justify-center flex-wrap gap-8 gap-y-4">
                <div v-for="index in 12" class="w-[30%] flex flex-col items-center gap-4 rounded-lg pt-4 text-site-dark-blue bg-site-blue bg-opacity-25">
                    <svg width="64" height="73" viewBox="0 0 64 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M58.5644 49.7823C58.5644 53.9741 57.5344 57.3674 56.2744 57.3674C55.0094 57.3674 53.9844 53.9741 53.9844 49.7823C53.9844 45.5905 55.0094 42.1914 56.2744 42.1914C57.5344 42.1914 58.5644 45.5962 58.5644 49.7823Z" fill="#2F2F2F"/>
                        <path d="M55.2812 56.6199C55.2812 56.6199 55.8913 57.732 56.5513 58.1084C58.0463 58.9582 60.1263 58.6445 61.3763 56.7055L60.7063 52.0859L56.4762 53.0041L55.2812 56.6199Z" fill="#2F2F2F"/>
                        <path d="M11.8547 59.3929C11.8547 63.8698 10.4697 67.5027 8.76969 67.5027C7.06469 67.5027 5.67969 63.8698 5.67969 59.3929C5.67969 54.9102 7.06469 51.2773 8.76969 51.2773C10.4697 51.283 11.8547 54.9102 11.8547 59.3929Z" fill="#2F2F2F"/>
                        <path d="M7.42188 66.7091C7.42188 66.7091 8.24188 67.9011 9.14188 68.3003C11.1569 69.2071 13.9569 68.8706 15.6419 66.8061L14.7369 61.8672L9.03687 62.8481L7.42188 66.7091Z" fill="#2F2F2F"/>
                        <path d="M17.4719 59.3929C17.4719 63.8698 16.0869 67.5027 14.3869 67.5027C12.6819 67.5027 11.2969 63.8698 11.2969 59.3929C11.2969 54.9102 12.6819 51.2773 14.3869 51.2773C16.0869 51.283 17.4719 54.9102 17.4719 59.3929Z" fill="#2F2F2F"/>
                        <path d="M45.3937 59.3929C45.3937 63.8698 44.0087 67.5027 42.3088 67.5027C40.6038 67.5027 39.2188 63.8698 39.2188 59.3929C39.2188 54.9102 40.6038 51.2773 42.3088 51.2773C44.0087 51.283 45.3937 54.9102 45.3937 59.3929Z" fill="#2F2F2F"/>
                        <path d="M40.9609 66.7091C40.9609 66.7091 41.7809 67.9011 42.6809 68.3003C44.6959 69.2071 47.4959 68.8706 49.1859 66.8061L48.2809 61.8672L42.5809 62.8481L40.9609 66.7091Z" fill="#2F2F2F"/>
                        <path d="M56.9981 6.96484H8.65312C3.63812 6.96484 0.078125 10.4609 0.078125 15.6051V52.299C0.078125 58.0135 4.14312 62.6502 9.15312 62.6502H36.9881C44.2981 62.6502 46.6881 61.5723 51.1581 58.2131C55.7531 54.7627 63.9981 49.0596 63.9981 44.383V15.5538C63.9981 9.83922 62.0081 6.96484 56.9981 6.96484Z" fill="#FCC21B"/>
                        <mask id="mask0_685_37449" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="6" width="64" height="57">
                        <path d="M56.9981 6.96484H8.65312C3.63812 6.96484 0.078125 10.4609 0.078125 15.6051V52.299C0.078125 58.0135 4.14312 62.6502 9.15312 62.6502H36.9881C44.2981 62.6502 46.6881 61.5723 51.1581 58.2131C55.7531 54.7627 63.9981 49.0596 63.9981 44.383V15.5538C63.9981 9.83922 62.0081 6.96484 56.9981 6.96484Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_685_37449)">
                        <path d="M-0.195312 46.8052H42.9697V63.5895H-0.195312V46.8052ZM42.9697 67.0627L65.6547 50.1529V31.2812L42.9697 46.8052V67.0627Z" fill="#ED6C30"/>
                        </g>
                        <path d="M40.0513 38.3423C40.0513 40.2586 38.6863 41.8213 37.0013 41.8213H7.70125C6.02125 41.8213 4.65625 40.2586 4.65625 38.3423V16.2484C4.65625 14.3322 6.02125 12.7695 7.70125 12.7695H36.9963C38.6813 12.7695 40.0462 14.3322 40.0462 16.2484V38.3423H40.0513Z" fill="#40C0E7"/>
                        <mask id="mask1_685_37449" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="4" y="12" width="37" height="30">
                        <path d="M40.0513 38.3423C40.0513 40.2586 38.6863 41.8213 37.0013 41.8213H7.70125C6.02125 41.8213 4.65625 40.2586 4.65625 38.3423V16.2484C4.65625 14.3322 6.02125 12.7695 7.70125 12.7695H36.9963C38.6813 12.7695 40.0462 14.3322 40.0462 16.2484V38.3423H40.0513Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask1_685_37449)">
                        <path d="M3.30469 11.4297H41.8047V21.6269H3.30469V11.4297Z" fill="#2F2F2F"/>
                        </g>
                        <mask id="mask2_685_37449" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="4" y="12" width="37" height="30">
                        <path d="M40.0513 38.3423C40.0513 40.2586 38.6863 41.8213 37.0013 41.8213H7.70125C6.02125 41.8213 4.65625 40.2586 4.65625 38.3423V16.2484C4.65625 14.3322 6.02125 12.7695 7.70125 12.7695H36.9963C38.6813 12.7695 40.0462 14.3322 40.0462 16.2484V38.3423H40.0513Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask2_685_37449)">
                        <path d="M10.1172 14.8047H34.9822V19.4242H10.1172V14.8047Z" fill="white"/>
                        </g>
                        <path d="M54.2125 27.9268C54.2125 29.4096 53.4525 31.0977 52.4575 31.7422L48.7525 34.1432C47.3825 35.0215 46.1875 34.2402 46.1875 32.3182V16.6802C46.1875 14.764 47.3875 13.207 48.7525 13.207H52.4575C53.4525 13.207 54.2125 14.4104 54.2125 15.8818V27.9268ZM60.1725 15.2716C60.1725 14.148 59.8075 13.2355 59.3375 13.2355H57.6675C57.0875 13.2355 56.5875 14.3248 56.5875 15.6594V26.5295C56.5875 27.8641 57.0875 28.6055 57.6675 28.1891L59.3375 27.0257C59.8075 26.6949 60.1725 25.5315 60.1725 24.408V15.2716Z" fill="#40C0E7"/>
                        <path d="M8.03656 57.5005C9.93366 57.5005 11.4716 55.7489 11.4716 53.5881C11.4716 51.4274 9.93366 49.6758 8.03656 49.6758C6.13946 49.6758 4.60156 51.4274 4.60156 53.5881C4.60156 55.7489 6.13946 57.5005 8.03656 57.5005Z" fill="white"/>
                        <path d="M39.5653 53.5881C39.5653 55.7496 38.0253 57.5005 36.1253 57.5005C34.2353 57.5005 32.6953 55.7496 32.6953 53.5881C32.6953 51.4209 34.2303 49.6758 36.1253 49.6758C38.0253 49.6758 39.5653 51.4209 39.5653 53.5881Z" fill="white"/>
                        <path d="M51.0109 59.392C51.0109 63.869 49.6259 67.5019 47.9259 67.5019C46.2209 67.5019 44.8359 63.869 44.8359 59.392C44.8359 54.9094 46.2209 51.2765 47.9259 51.2765C49.6259 51.2822 51.0109 54.9094 51.0109 59.392ZM62.7309 49.7823C62.7309 53.9741 61.7059 57.3674 60.4409 57.3674C59.1759 57.3674 58.1509 53.9741 58.1509 49.7823C58.1509 45.5905 59.1759 42.1914 60.4409 42.1914C61.7109 42.1914 62.7309 45.5962 62.7309 49.7823Z" fill="#2F2F2F"/>
                    </svg>
                    <h1 class="text-2xl font-bold ">
                        باقة (1) D-19 الخيام المطورة</h1>
                    <h1 class="text-lg font-bold ">جدة</h1>
                    <div class="w-[105%] items-center flex">
                        <RouterLink to="buses-reports-prparation/1" class=" bg-site-dark-blue text-white font-bold p-2 text-center rounded-s w-1/2 border-l border-white">
                            عملية التحضير
                        </RouterLink>
                        <RouterLink to="" class=" bg-site-dark-blue text-white font-bold p-2 text-center rounded-e w-1/2">
                            طباعة الكشف
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import SearchComponent from '../../../components/Base/SearchComponent.vue';

</script>

<style scoped>

</style>