<template>
    <div class="w-full flex lg:flex-row flex-col-reverse items-center p-5 lg:px-16 bg-[#F8F8F8] relative">
        <img class="absolute h-full right-0 top-0 translate-x-[200px] -translate-y-[230px]" src="/img/Ellipse.png" alt="">
        <div class="lg:w-1/2 w-full">
            <img class="w-full" src="/img/passord-resubmit.png" alt="">
        </div>
        <div class="flex flex-col items-center lg:w-1/2 w-full lg:px-20 px-5 mt-10 relative z-50">
            <h1 class="text-4xl sm:text-2xl text-site-blue font-bold my-5">إعادة تعيين كلمة المرور</h1>
            <p class=" text-site-text-grey font-medium mb-10 sm:mb-5 text-center px-12 sm:px-4">ادخل بريدك الإلكتروني لإستقبال رابط تعيين كلمة المرور الجديدة</p>
            <div class="rtl-d w-[90%] sm:w-full">
                    <label class="font-bold" for="email">البريد الإلكتروني</label>
                    <input 
                     name="email" 
                     type="text" 
                     class="w-full relative border p-2 py-3 rounded-xl my-3 text-sm focus:border-site-blue bg-[#F8F8F8]"
                     :class="emailError == true ? 'border-red-500' : ''"
                     placeholder="مثال:mail@gmail.com">
                     <!-- <span v-show="emailError" class="bg-white text-site-text-grey px-2 absolute text-xs w-max right-0 -translate-x-[40px] translate-y-[2px]">البريد الإلكتروني غير متاح</span> -->
                    
            </div>
            <RouterLink to="/passwordresubmit-password" class="w-[90%] sm:w-full mx-auto py-4  bg-site-blue text-white rounded-xl sm:mt-5 mt-10 mb-10 font-semibold flex justify-center items-center">
                    <span>ارسل</span>
            </RouterLink> 
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style scoped>

</style>