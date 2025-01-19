<template>
    <div class="w-[80%] bg-[#f9f9f9] min-h-screen py-10" >
        <div class="rtl-d px-10 pt-28">
            <h1 class="text-xl font-bold text-site-blue mb-5">كشف لتوزيع الحجاج في الخيام</h1>
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
                    <svg width="94" height="104" viewBox="0 0 94 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M63.1358 50L50.0859 94.8195L57.3636 96.793L72.9764 95.7539L72.22 66.8113L63.1358 50Z" fill="#2F2F2F"/>
                        <path d="M26.2473 35.676C25.278 36.4734 22.9353 45.6403 17.2586 58.1904C11.5819 70.7405 4.29688 87.3504 4.29688 87.3504C4.29688 87.3504 5.14875 88.6957 15.9294 92.9569C26.71 97.2181 35.618 99.087 35.618 99.087C35.618 99.087 59.632 58.0857 59.823 57.1593C60.0139 56.2249 63.8473 39.1317 63.8473 39.1317C63.8473 39.1317 48.565 37.9637 41.9409 37.3434C35.3169 36.7232 27.3783 34.7416 26.2473 35.676Z" fill="#F19F40"/>
                        <path d="M81.0721 95.6642L89.1355 94.1579C89.1355 94.1579 81.6963 77.0888 77.6279 68.4777C73.5594 59.8667 66.5388 41.5893 65.8779 40.2441C65.2169 38.8988 62.4704 38.2705 61.244 40.6629C60.0176 43.0553 49.7804 67.6964 47.8563 71.6354C45.6899 76.0658 34.924 97.8875 34.8285 99.0313C34.733 100.175 52.9529 98.2822 52.9529 98.2822L57.6529 83.098L63.3296 56.121L64.2769 56.3304L68.8154 78.3293L81.0721 95.6642Z" fill="#EC5F32"/>
                        <path d="M58.2595 97.5646C58.098 98.6118 53.2952 99.522 50.5633 99.5865C47.8241 99.659 42.9258 99.8684 42.353 99.1676C41.7802 98.4668 48.5217 91.9098 52.8545 83.3229C57.18 74.736 59.7283 68.8073 60.3598 66.431C60.9988 64.0547 62.2692 56.9419 62.7759 55.7498C63.2827 54.5576 64.3034 54.7751 64.6192 55.8867C64.935 57.0064 68.247 70.7567 69.3927 74.0352C70.5383 77.3137 75.2456 84.1526 76.6483 86.3195C78.0509 88.4863 84.9834 94.2539 85.1083 94.8097C85.2331 95.3655 80.8195 97.0652 77.8159 97.4438C75.6642 97.7096 70.6484 97.2988 70.2666 96.598C69.8847 95.8972 67.2924 77.3137 66.3377 71.1031C65.383 64.8925 63.7306 56.5875 63.7306 56.5875C63.7306 56.5875 59.978 76.5484 59.4639 81.8569C58.9572 87.1653 58.5092 95.8891 58.2595 97.5646ZM3.08594 79.3597C3.08594 79.3597 3.62203 78.7475 4.63547 78.675C5.64891 78.6106 6.54484 79.2872 6.54484 79.2872L7.19844 89.6141C7.19844 89.6141 6.42 90.3632 5.46531 90.3632C4.51063 90.3632 3.61469 89.8154 3.61469 89.8154L3.08594 79.3597ZM30.4487 89.743C30.4487 89.743 31.2786 88.9777 32.5491 88.9777C33.8195 88.9777 34.7742 89.6785 34.7742 89.6785L34.8403 100.15C34.8403 100.15 33.8195 100.779 33.0558 100.779C32.292 100.779 31.0803 100.36 31.0803 100.36L30.4487 89.743ZM87.3922 85.1434C87.3922 85.1434 88.0752 84.2734 89.2869 84.3379C90.4986 84.4023 91.1595 84.8615 91.1595 84.8615L90.5867 95.6072C90.5867 95.6072 90.1387 96.308 89.0592 96.308C87.9797 96.308 87.025 95.7522 87.025 95.7522L87.3922 85.1434Z" fill="#9C2D1B"/>
                    </svg>
                    <h1 class="text-xl font-bold ">
                        باقة (1) D-19 الخيام المطورة</h1>
                    <div class="w-full items-stretch flex">
                        <h1 class=" bg-white text-site-blue font-bold p-2 pt-3 text-center rounded-s w-1/2">
                            ذكور
                        </h1>
                        <div class=" bg-white text-site-blue font-bold p-2 text-center rounded-s w-1/2 flex items-center justify-center gap-2">
                           <span>ذكور</span>
                           <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M12.4974 3C13.3815 3 14.2293 3.31607 14.8544 3.87868C15.4795 4.44129 15.8307 5.20435 15.8307 6C15.8307 6.79565 15.4795 7.55871 14.8544 8.12132C14.2293 8.68393 13.3815 9 12.4974 9C11.6133 9 10.7655 8.68393 10.1404 8.12132C9.51525 7.55871 9.16406 6.79565 9.16406 6C9.16406 5.20435 9.51525 4.44129 10.1404 3.87868C10.7655 3.31607 11.6133 3 12.4974 3ZM9.9974 10.5H14.9974C15.8815 10.5 16.7293 10.8161 17.3544 11.3787C17.9795 11.9413 18.3307 12.7044 18.3307 13.5V21.75H15.8307V33H9.16406V21.75H6.66406V13.5C6.66406 12.7044 7.01525 11.9413 7.64037 11.3787C8.26549 10.8161 9.11334 10.5 9.9974 10.5ZM27.4974 3C28.3815 3 29.2293 3.31607 29.8544 3.87868C30.4795 4.44129 30.8307 5.20435 30.8307 6C30.8307 6.79565 30.4795 7.55871 29.8544 8.12132C29.2293 8.68393 28.3815 9 27.4974 9C26.6133 9 25.7655 8.68393 25.1404 8.12132C24.5153 7.55871 24.1641 6.79565 24.1641 6C24.1641 5.20435 24.5153 4.44129 25.1404 3.87868C25.7655 3.31607 26.6133 3 27.4974 3ZM24.9974 10.5H29.9974C30.8815 10.5 31.7293 10.8161 32.3544 11.3787C32.9795 11.9413 33.3307 12.7044 33.3307 13.5V21.75H30.8307V33H24.1641V21.75H21.6641V13.5C21.6641 12.7044 22.0153 11.9413 22.6404 11.3787C23.2655 10.8161 24.1133 10.5 24.9974 10.5Z" fill="#008093"/>
                           </svg>
                        </div>
                    </div>
                    <div class="w-[105%] items-center flex">
                        <RouterLink to="tents-reports-prparation/1" class=" bg-site-dark-blue text-white font-bold p-2 text-center rounded-s w-1/2 border-l border-white">
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