<template>
    <div class="flex flex-col items-center w-full">
            <h1 class="text-2xl font-bold text-site-blue text-center mb-5">تنشيط الحساب</h1>
            <p class="text-2xl font-bold text-black text-center mb-5 px-4">ادخل بريدك الإلكتروني وقم بإنشاء كلمة مرور لحسابك الرئيسي</p>
            <div class="form-input w-[80%] px-5 rtl-d">
                <div>
                    <label class="font-bold" for="email">البريد الإلكتروني <span class="text-red-500">*</span></label>
                    <input 
                     v-model="user.email"
                     name="email" 
                     type="text" 
                     class="w-full relative border p-2 rounded-xl my-3 text-sm"
                     :class="requestConditions.error?.email != null ? 'border-red-500' : ''"
                     placeholder="مثال:mail@gmail.com">
                    <span v-show="requestConditions.error?.email" class="bg-white text-site-text-grey px-2 absolute text-xs w-max right-0 -translate-x-[40px] translate-y-[2px]">البريد الإلكتروني غير متاح</span>
                </div>
                <div>
                    <label class="font-bold" for="username">اسم المستخدم<span class="text-red-500">*</span></label>
                    <input 
                     v-model="user.username"
                     name="username" 
                     type="text" 
                     class="w-full relative border p-2 rounded-xl my-3 text-sm"
                     :class="requestConditions.error?.username != null ? 'border-red-500' : ''"
                     placeholder="مثال:omar ali">
                    <span v-show="requestConditions.error?.username" class="bg-white text-site-text-grey px-2 absolute text-xs w-max right-0 -translate-x-[40px] translate-y-[2px]"> اسم المستخدم غير متاح</span>
                </div>
                <div>
                    <label class="font-bold" for="password">كلمة المرور<span class="text-red-500">*</span></label>
                    <input 
                     v-model="user.password"
                     ref="togglePasswordButton"
                     name="password" 
                     type="password" 
                     class="w-full relative border p-2 rounded-xl my-3 text-sm"
                     :class="requestConditions.error?.password != null ? 'border-red-500' : ''"
                     placeholder="*******">
                     <span v-show="requestConditions.error?.password" class="bg-white text-site-text-grey px-2 absolute text-xs w-max right-0 -translate-x-[40px] translate-y-[2px]">كلمة المرور يجب ان تكون باللغة وتتضمن حرف كبير</span>
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
                <div>
                    <label class="font-bold" for="rePassword">تأكيد كلمة المرور<span class="text-red-500">*</span></label>
                    <input 
                     v-model="user.confirm_password"
                     ref="toggleRePasswordButton"
                     name="rePassword" 
                     type="password"
                     class="w-full relative border p-2 rounded-xl mt-3 text-sm"
                     :class="requestConditions.error?.confirm_password != null ? 'border-red-500' : ''"
                     placeholder="*******">
                    <!-- <input 
                     v-model="user.confirm_password"
                     ref="toggleRePasswordButton"
                     name="rePassword" 
                     type="password"
                     class="w-full relative border p-2 rounded-xl mt-3 text-sm"
                     :class="requestConditions.error?.confirm_password != null ? 'border-red-500' : ''"
                     placeholder="*******"
                     @focus="showRepasswordLabel = true"
                     @blur="showRepasswordLabel = false"> -->
                     <span v-show="requestConditions.error?.confirm_password" class="bg-white text-site-text-grey px-2 absolute text-xs w-max right-0 -translate-x-[40px] translate-y-[2px]">كلمة المرور غير متطابقة</span>
                     <button  @click="toggleRePassword" class="absolute translate-x-[30px] translate-y-[20px]">
                        <svg v-show="!rePasswordVisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#DADADA" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                        <svg v-show="rePasswordVisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#DADADA" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                     </button>
<!--                      <p v-show="showRepasswordLabel" class="p-3 text-sm" :class="requestConditions.error?.confirm_password != null ? 'text-red-500' : 'text-site-blue'">. يجب ان تتضمن كلمة المرور 8 احرف على الأقل، حرف كبير واحد (A-Z)، رقمين على الأقل (0-9) ، وعلامة رمز واحدة (%,#,@,!)</p>
 -->                     <p class="p-3 text-sm" :class="requestConditions.error?.confirm_password != null ? 'text-red-500' : 'text-site-blue'">. يجب ان تتضمن كلمة المرور 8 احرف على الأقل، حرف كبير واحد (A-Z)، رقمين على الأقل (0-9) ، وعلامة رمز واحدة (%,#,@,!)</p>
                </div>
            </div>
            <button @click="createUser" class="w-[80%] mx-auto py-4 bg-site-blue text-white rounded-xl mt-10 font-semibold flex justify-center items-center">
                <span v-if="!requestConditions.loading">تنشيط</span>
                <LoaderIcon v-else />
            </button> 
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { usePostRequest } from '../../composables/useRequest';
import LoaderIcon from '../icon/loaderIcon.vue';
const props = defineProps({
    message:{type: String, required: true}
})

const emit = defineEmits(['nextStep'])
const togglePasswordButton = ref(null)
const toggleRePasswordButton = ref(null)
const passwordVisible = ref(false)
const rePasswordVisible = ref(false)
const showRepasswordLabel = ref(false)
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
const requestConditions = ref({
    data: null,
    error: {
        email: null,
        username: null,
        password: null,
        confirm_password: null
    },
    loading: false,
})
const user = ref({
    code: props.message,
    email: null,
    username: null,
    password: null,
    confirm_password: null,
})
const createUser = async () => {
    requestConditions.value.loading = true
    const { Data, Error} = await usePostRequest('api/v1/create_user',
        {
            code: user.value.code,
            email: user.value.email,
            username: user.value.username,
            password: user.value.password,
            confirm_password: user.value.confirm_password,
        }
    )
    requestConditions.value.loading = false
    requestConditions.value.data = Data.value
    requestConditions.value.error = Error.value?.errors
    if(requestConditions.value.data)
        emit('nextStep',requestConditions.value.data)
}
</script>
