<template>
    <div class="w-[80%] bg-[#f9f9f9] rtl-d px-5 pt-28">
        <h1 class="text-[#008093] px-6 my-6 text-lg font-semibold">بوابة ارسال الرسائل</h1>
        <div class="border border-[#DADADA] rounded-xl flex  justify-between items-center px-5 py-16 w-full text-center">
            <div class="w-[48%]">
                <p class="text-black font-semibold w-[50%] mb-3 text-start">الرصيد الحالي</p>
                <div class="relative">
                    <input 
                    name="" 
                    type="text" 
                    class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                    placeholder="أدخل اسم المستخدم">
                    <svg class="absolute bottom-[10px] left-2 " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_407_793)">
                        <path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 15C11.7348 15 11.4804 15.1054 11.2929 15.2929C11.1054 15.4804 11 15.7348 11 16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15ZM12 6C11.7551 6.00003 11.5187 6.08996 11.3356 6.25272C11.1526 6.41547 11.0357 6.63975 11.007 6.883L11 7V13C11.0003 13.2549 11.0979 13.5 11.2728 13.6854C11.4478 13.8707 11.687 13.9822 11.9414 13.9972C12.1958 14.0121 12.4464 13.9293 12.6418 13.7657C12.8373 13.6021 12.9629 13.3701 12.993 13.117L13 13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6Z" fill="#D8D8D8"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_407_793">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div class="w-[48%]">
                <div class="w-3/4 mr-auto">
                    <p class="text-black font-semibold w-[50%] mb-3 text-start ">كود الخصم</p>
                    <button class="bg-[#008093] p-3 text-white flex items-center justify-between gap-2 rounded-xl w-full">
                        <p class="font-bold text-lg"></p>
                        <p class="font-bold text-lg">WAFADA2023</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.25 2.625H8.25C7.95163 2.625 7.66548 2.74353 7.4545 2.9545C7.24353 3.16548 7.125 3.45163 7.125 3.75V7.125H3.75C3.45163 7.125 3.16548 7.24353 2.9545 7.4545C2.74353 7.66548 2.625 7.95163 2.625 8.25V20.25C2.625 20.5484 2.74353 20.8345 2.9545 21.0455C3.16548 21.2565 3.45163 21.375 3.75 21.375H15.75C16.0484 21.375 16.3345 21.2565 16.5455 21.0455C16.7565 20.8345 16.875 20.5484 16.875 20.25V16.875H20.25C20.5484 16.875 20.8345 16.7565 21.0455 16.5455C21.2565 16.3345 21.375 16.0484 21.375 15.75V3.75C21.375 3.45163 21.2565 3.16548 21.0455 2.9545C20.8345 2.74353 20.5484 2.625 20.25 2.625ZM14.625 19.125H4.875V9.375H14.625V19.125ZM19.125 14.625H16.875V8.25C16.875 7.95163 16.7565 7.66548 16.5455 7.4545C16.3345 7.24353 16.0484 7.125 15.75 7.125H9.375V4.875H19.125V14.625Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <h1 class="text-[#008093] px-6 my-6 text-lg font-semibold">إعدادات الرسائل المبرمجة</h1>
        <div class="border border-[#DADADA] rounded-xl flex flex-wrap gap-6 gap-y-16 items-center justify-center py-16 w-full text-center">
            <div class="flex gap-2 items-center justify-center w-[30%]">
                <p class="font-semibold text-[#008093]">الغاء تسجيل الرسائل</p>
                <div class="checkbox-wrapper-6">
                    <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                    <label class="tgl-btn" for="cb1-6" />
                </div>
            </div>
            <div class="flex gap-2 items-center justify-center w-[30%]">
                <p class="font-semibold text-[#008093]">تفعيل التطبيق</p>
                <div class="checkbox-wrapper-6">
                    <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                    <label class="tgl-btn" for="cb1-6" />
                </div>
            </div>
            <div class="flex gap-2 items-center justify-center w-[30%]">
                <p class="font-semibold text-[#008093]">إظهار الخيمة</p>
                <div class="checkbox-wrapper-6">
                    <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                    <label class="tgl-btn" for="cb1-6" />
                </div>
            </div>
            <div class="flex gap-2 items-center justify-center w-[30%]">
                <p class="font-semibold text-[#008093]">إظهار الحافلات</p>
                <div class="checkbox-wrapper-6">
                    <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                    <label class="tgl-btn" for="cb1-6" />
                </div>
            </div>
            <div class="flex gap-2 items-center justify-center w-[30%]">
                <p class="font-semibold text-[#008093]">إيقاف الملاحظات</p>
                <div class="checkbox-wrapper-6">
                    <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                    <label class="tgl-btn" for="cb1-6" />
                </div>
            </div>
            <div class="flex gap-2 items-center justify-center w-[30%]">
                <p class="font-semibold text-[#008093]">تعليق إرسال 
                    الرسائل</p>
                <div class="checkbox-wrapper-6">
                    <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                    <label class="tgl-btn" for="cb1-6" />
                </div>
            </div>
            <div class="flex gap-2 items-center justify-center w-full">
                <p class="font-semibold text-[#008093]">إظهار الكارت</p>
                <div class="checkbox-wrapper-6">
                    <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                    <label class="tgl-btn" for="cb1-6" />
                </div>
            </div>
        </div>
        <h1 class="text-[#008093] px-6 my-6 text-lg font-semibold">معلومات بوابة الرسائل</h1>
        <div class="border border-[#DADADA] rounded-xl flex flex-wrap gap-6 items-center px-5 py-16 w-full text-center">
            <div class="w-[48%]">
                <p class="text-black font-semibold w-[50%] mb-3 text-start">اسم المستخدم<span class="text-red-500">*</span></p>
                <input 
                name="" 
                type="text" 
                class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                placeholder="أدخل اسم المستخدم">
            </div>
            <div class="w-[48%]">
                <p class="text-black font-semibold w-[50%] text-start mb-3">كلمة المرور<span class="text-red-500">*</span></p>
                <input 
                name="" 
                type="text" 
                class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                placeholder="************">
            </div>
            <div class="flex items-center justify-end mt-10 text-lg font-bold w-full">
                <RouterLink to="/communication-login" class="bg-red-500 bg-opacity-50 text-white py-3 px-10 rounded-lg">تسجيل الخروج</RouterLink>
            </div>
        </div>
        <p class="w-3/4 text-[#DADADA] my-6 font-medium"> بمجرد تسجيل دخولكم، سيتم ربط نظام وفادة ببوابة إرسال الرسائل، مما يتيح لكم إدارة وإرسال الرسائل بسهولة وفاعلية. استمتعوا بتجربة متكاملة للتواصل عبر نظام وفادة.</p>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>