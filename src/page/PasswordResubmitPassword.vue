<template>
    <div class="h-screen w-full flex justify-center items-center p-5 lg:px-16 bg-[#F8F8F8] relative overflow-hidden">
        <img class="absolute h-full right-0 top-0 translate-x-[200px] -translate-y-[230px]" src="../assets/img/Ellipse.png" alt="">
        <img class="absolute h-full left-0 bottom-0 -translate-x-[200px] translate-y-[230px]" src="../assets/img/Ellipse.png" alt="">
        <div class="flex flex-col items-center lg:w-1/2 w-full lg:px-20 px-5 mt-10 sm:mt-5">
            <h1 class="text-4xl sm:text-2xl text-site-blue font-bold my-5">إعادة تعيين كلمة المرور</h1>
            <p class=" text-site-text-grey font-medium mb-10 sm:mb-5 text-center px-12 sm:px-4">ادخل كلمة المرور الجديدة</p>
            <div class="rtl-d w-full">
                    <label class="font-bold" for="password">كلمة المرور<span class="text-red-500">*</span></label>
                    <input 
                     ref="togglePasswordButton"
                     name="password" 
                     type="password" 
                     class="w-full relative border p-2 rounded-xl my-3 text-sm bg-[#F8F8F8] focus:border-site-blue"
                     :class="PasswordError == true ? 'border-red-500' : ''"
                     placeholder="*******">
                     <span v-show="PasswordError" class="bg-white text-site-text-grey px-2 absolute text-xs w-max right-0 -translate-x-[40px] translate-y-[2px]">كلمة المرور يجب ان تكون باللغة وتتضمن حرف كبير</span>
                     <button  @click="togglePassword" class="absolute translate-x-[30px] translate-y-[20px]">
                        <svg v-show="!passwordVisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#DADADA" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                        <svg v-show="passwordVisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#DADADA" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                     </button>
            </div>
            <div class="rtl-d w-full">
                <label class="font-bold" for="rePassword">تأكيد كلمة المرور<span class="text-red-500">*</span></label>
                <input 
                    ref="toggleRePasswordButton"
                    name="rePassword" 
                    type="password"
                    class="w-full relative border p-2 rounded-xl mt-3 text-sm bg-[#F8F8F8] focus:border-site-blue"
                    :class="rePasswordError == true ? 'border-red-500' : ''"
                    placeholder="*******"
                    @focus="showRepasswordLabel = true"
                    @blur="showRepasswordLabel = false">
                    <span v-show="rePasswordError" class="bg-white text-site-text-grey px-2 absolute text-xs w-max right-0 -translate-x-[40px] translate-y-[2px]">كلمة المرور غير متطابقة</span>
                    <button  @click="toggleRePassword" class="absolute translate-x-[30px] translate-y-[20px]">
                    <svg v-show="!rePasswordVisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#DADADA" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                    <svg v-show="rePasswordVisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#DADADA" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    </button>
                    <p  class="p-3 text-sm text-red-500">. يجب ان تتضمن كلمة المرور 8 احرف على الأقل، حرف كبير واحد (A-Z)، رقمين على الأقل (0-9) ، وعلامة رمز واحدة (%,#,@,!)</p>
            </div>
            <RouterLink to="/signin" class="w-full mx-auto py-4  bg-site-blue text-white rounded-xl sm:mt-5 mt-10 mb-10 font-semibold flex justify-center items-center">
                    <span>ارسل</span>
            </RouterLink> 
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
const PasswordError = ref(false)
const rePasswordError = ref(false)
const togglePasswordButton = ref(null)
const toggleRePasswordButton = ref(null)
const passwordVisible = ref(false)
const rePasswordVisible = ref(false)
const togglePassword = () => {  

    if (togglePasswordButton.value.type === "password") {
        togglePasswordButton.value.type = "text";
        passwordVisible.value = true
    } else {
        togglePasswordButton.value.type = "password";
        passwordVisible.value = false
    }
}
const toggleRePassword = () => {  

    if (toggleRePasswordButton.value.type === "password") {
        toggleRePasswordButton.value.type = "text";
        rePasswordVisible.value = true
    } else {
        toggleRePasswordButton.value.type = "password";
        rePasswordVisible.value = false
    }
}
</script>

<style scoped>

</style>