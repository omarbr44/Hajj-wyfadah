<template>
    <div class="flex flex-col items-center w-full">
            <div class="form-input w-[80%] px-5 rtl-d">
                <div>
                    <label class="font-bold" for="email">البريد الإلكتروني</label>
                    <input 
                     v-model="user.email"
                     name="email" 
                     type="text" 
                     class="w-full relative border p-2 rounded-xl my-3 text-sm focus:border-site-blue"
                     :class="requestConditions.error?.email != null ? 'border-red-500' : ''"
                     placeholder="مثال:mail@gmail.com">
                     <span v-show="requestConditions.error?.email" class="bg-white text-site-text-grey px-2 absolute text-xs w-max right-0 -translate-x-[40px] translate-y-[2px]">البريد الإلكتروني غير متاح</span>
                </div>
                <div>
                    <label class="font-bold" for="password">كلمة المرور</label>
                    <input 
                     v-model="user.password"
                     ref="togglePasswordButton"
                     name="password" 
                     type="password" 
                     class="w-full relative border p-2 rounded-xl my-3 text-sm focus:border-site-blue"
                     :class="requestConditions.error?.password != null ? 'border-red-500' : ''"
                     placeholder="*******">
                     <span v-show="requestConditions.error?.password" class="bg-white text-site-text-grey px-2 absolute text-xs w-max right-0 -translate-x-[40px] translate-y-[2px]">كلمة المرور خاطئة</span>
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
                <p class="text-sm text-right mt-4   ">هل نسيت كلمة المرور ؟ <RouterLink to="/passwordresubmit-email" class="text-site-blue font-normal cursor-pointer">إعادة تعيين كلمة المرور</RouterLink ></p>
                <button @click="loginRequest" class="w-full mx-auto py-4 bg-site-blue text-white rounded-xl mt-10 font-semibold flex justify-center items-center">
                    <span v-if="!requestConditions.loading">تسجيل الدخول</span>
                    <LoaderIcon v-else />
                </button>
                <p v-if="requestConditions.message" class="text-red-500 text-center mt-3">{{ requestConditions.message }}</p>
<!--                 <p class="text-red-500 text-center mt-3">تبقت محاولة واحدة لك لإدخال كلمة المرور الصحيحة !</p>
                <p class="text-red-500 text-sm text-center mt-3 hidden">تم تجميد حسابك بناء على عدة محاولات تسجيل دخول خاطئة.
                    <br>
                    يمكنك المحاولة مرة اخرى بعد 15 دقيقة
                </p> -->
            </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { usePostRequest } from '../../composables/useRequest';
import LoaderIcon from '../icon/loaderIcon.vue';
import router from '../../router';
import { useUserStore } from '../../stores/user';

const userStore = useUserStore()
const togglePasswordButton = ref(null)
const passwordVisible = ref(false)
const togglePassword = () => {  

    if (togglePasswordButton.value.type === "password") {
        togglePasswordButton.value.type = "text";
        passwordVisible.value = true
    } else {
        togglePasswordButton.value.type = "password";
        passwordVisible.value = false
    }
}
const requestConditions = ref({
    data: null,
    error: {
        email: null,
        password: null,
    },
    loading: false,
    message: null,
})
const user = ref({
    email: null,
    password: null,
})
const loginRequest = async () => {
    requestConditions.value.loading = true
    const { Data, Error} = await usePostRequest('api/v1/login',
        {
            email: user.value.email,
            password: user.value.password,
        }
    )
    requestConditions.value.loading = false
    requestConditions.value.data = Data.value
    if(Error.value?.errors)
        requestConditions.value.error = Error.value?.errors
    else 
        requestConditions.value.message = Error.value?.message
    if(requestConditions.value.data) {
        userStore.signIn(requestConditions.value.data.authtoken,requestConditions.value.data.is_superuser,requestConditions.value.data.username,requestConditions.value.data.email)
        router.push('company-info')
    }

}
</script>
