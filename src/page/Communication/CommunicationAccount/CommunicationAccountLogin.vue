<template>
    <div class="w-[80%] bg-[#f9f9f9] rtl-d px-5 pt-28">
        <h1 class="text-[#008093] px-6 my-6 text-lg font-semibold">بوابة ارسال الرسائل</h1>
        <div class="border border-[#DADADA] rounded-xl flex flex-col gap-6 items-center px-5 py-16 w-full text-center">
            <h1 class="text-xl font-semibold text-[#008093]">استفد من خصم مستخدمي نظام وفادة !</h1>
            <h1 class="">قم بإدخال الكود عند تسجيلك مع بوابات الرسائل للحصول على عرض خاص بمستخدمي نظام وفادة </h1>
            <button class="bg-[#008093] p-3 text-white flex items-center gap-2 rounded-xl">
                <p class="font-bold text-lg">WAFADA2023</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.25 2.625H8.25C7.95163 2.625 7.66548 2.74353 7.4545 2.9545C7.24353 3.16548 7.125 3.45163 7.125 3.75V7.125H3.75C3.45163 7.125 3.16548 7.24353 2.9545 7.4545C2.74353 7.66548 2.625 7.95163 2.625 8.25V20.25C2.625 20.5484 2.74353 20.8345 2.9545 21.0455C3.16548 21.2565 3.45163 21.375 3.75 21.375H15.75C16.0484 21.375 16.3345 21.2565 16.5455 21.0455C16.7565 20.8345 16.875 20.5484 16.875 20.25V16.875H20.25C20.5484 16.875 20.8345 16.7565 21.0455 16.5455C21.2565 16.3345 21.375 16.0484 21.375 15.75V3.75C21.375 3.45163 21.2565 3.16548 21.0455 2.9545C20.8345 2.74353 20.5484 2.625 20.25 2.625ZM14.625 19.125H4.875V9.375H14.625V19.125ZM19.125 14.625H16.875V8.25C16.875 7.95163 16.7565 7.66548 16.5455 7.4545C16.3345 7.24353 16.0484 7.125 15.75 7.125H9.375V4.875H19.125V14.625Z" fill="white"/>
                </svg>
            </button>
        </div>
        <h1 class="text-[#008093] px-6 my-6 text-lg font-semibold">تسجيل الدخول الى البوابة</h1>
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
                <RouterLink to="communication-login/account/1" class="bg-site-blue text-white py-3 px-10 rounded-lg">تسجيل الدخول</RouterLink>
            </div>
        </div>
        <p class="w-3/4 text-[#DADADA] my-6 font-medium"> بمجرد تسجيل دخولكم، سيتم ربط نظام وفادة ببوابة إرسال الرسائل، مما يتيح لكم إدارة وإرسال الرسائل بسهولة وفاعلية. استمتعوا بتجربة متكاملة للتواصل عبر نظام وفادة.</p>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>