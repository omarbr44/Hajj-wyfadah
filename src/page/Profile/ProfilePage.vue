<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div class="w-full flex items-center justify-end p-6 bg-white border-b-4 border-site-blue">
                <div class="flex items-center gap-4">
                    <h1 class="text-site-dark-blue font-bold my-3">الحساب الشخصي</h1>
                    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.4734 31.7969C32.3746 31.9727 32.2326 32.1187 32.0615 32.2202C31.8904 32.3217 31.6964 32.3751 31.4988 32.375H4.49885C4.30147 32.3748 4.10761 32.3212 3.93675 32.2197C3.76589 32.1181 3.62404 31.9721 3.52543 31.7964C3.42683 31.6206 3.37495 31.4213 3.375 31.2185C3.37505 31.0156 3.42703 30.8163 3.52572 30.6407C5.66744 26.8351 8.96791 24.1064 12.8196 22.8128C10.9144 21.6471 9.43415 19.8709 8.6062 17.7568C7.77826 15.6428 7.6484 13.3079 8.23658 11.1107C8.82475 8.91343 10.0984 6.97538 11.862 5.59414C13.6256 4.2129 15.7816 3.46484 17.9988 3.46484C20.2161 3.46484 22.3721 4.2129 24.1357 5.59414C25.8993 6.97538 27.1729 8.91343 27.7611 11.1107C28.3493 13.3079 28.2194 15.6428 27.3915 17.7568C26.5635 19.8709 25.0833 21.6471 23.1781 22.8128C27.0298 24.1064 30.3303 26.8351 32.472 30.6407C32.5709 30.8163 32.6231 31.0156 32.6234 31.2186C32.6236 31.4215 32.5719 31.621 32.4734 31.7969Z" fill="#008093"/>
                    </svg>
                </div>
            </div>
        <div>
            <div class="rtl-d px-10 pt-10">
                <h1 class="text-xl font-bold text-site-blue mb-5">تعديل الحساب الشخصي</h1>
                <hr>
                <div class="w-full p-4 flex flex-wrap gap-4 gap-y-10">
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اسم المستخدم<span class="text-red-500">*</span></p>
                        <input 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="عبدالله">
                        <p v-if="requestConditions?.error?.name_ar" class="text-red-500 mt-1">{{ requestConditions.error.name_ar }}</p>
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">البريد الالكتروني</p>
                        <input 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="mail@gmail.com">
                        <p v-if="requestConditions?.error?.info_branch" class="text-red-500 mt-1">{{ requestConditions.error.info_branch }}</p>
                    </div>
                    <h1 class="text-xl font-bold text-site-blue">تغيير كلمة السر</h1>
                    <div class="w-full px-8 py-10 border border-[#DADADA] rounded-2xl flex flex-wrap gap-4 gap-y-10">
                        <div class="w-[48%]">
                            <label class="font-bold" for="password">كلمة السر القديمة<span class="text-red-500">*</span></label>
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
                        <div class="w-[48%]">
                            <label class="font-bold" for="password">كلمة السر الجديدة<span class="text-red-500">*</span></label>
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
                        <div class="flex justify-center w-full">
                            <div class="w-[48%]">
                                <label class="font-bold" for="rePassword">تأكيد كلمة السر الجديدة<span class="text-red-500">*</span></label>
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
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div class="flex items-center justify-between my-10 text-lg font-bold">
                    <button @click="addBransh" class=" bg-site-blue text-white py-3 px-10 rounded-lg">
                        <span v-if="!requestConditions.loading">
                            إضافة 
                        </span>
                        <LoaderIcon v-else />
                    </button>
                    <RouterLink to="/company-branshes" class="text-red-700 py-4 px-8 ">
                        إلغاء
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useGetRequest, usePostRequest, usePatchRequest } from '../../composables/useRequest';
import Select from 'primevue/select';
import LocationIcon from '../../components/icon/LocationIcon.vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '../../stores/user';
import LoaderIcon from '../../components/icon/loaderIcon.vue';

const router = useRouter()
const route = useRoute()
const user = useUserStore()
const loadPage = ref(false)
const bransh = ref({
    subscriber_company: user.userCompantId,
    name_ar: null,
    name_en: 'a',
    city: null,
    capacity: null,
    info_branch: null,
    phone: null,
    place_ar: null,
    place_en: null,
    barnch_status: null,
    data_time_gathering: null,
    url_location_gathering: null,
})
const requestConditions = ref({
    data: null,
    error: null,
    loading: false,
})
const statuses = ref([
    {id: 1, name: 'مفعل'},
    {id: 2, name: 'غير مفعل'},
])

const cities = ref()
onMounted(async ()=>{
    const {Data, Error} = await useGetRequest('api/v1/city/')
    cities.value = Data.value.data
    if(route.params.id != 'add') {
        const {Data, Error} = await useGetRequest('api/v1/branch_company/'+route.params.id)
        bransh.value = Data.value.data
        bransh.value.barnch_status = statuses.value.filter( el => el.id == bransh.value.barnch_status )[0]
        bransh.value.city = cities.value.filter( el => el.id == bransh.value.city )[0]
        loadPage.value = true
    }
    loadPage.value = true
})

const addBransh = async () => {
    requestConditions.value.loading = true
    bransh.value.city = bransh.value?.city?.id
    bransh.value.barnch_status = bransh.value?.barnch_status?.id
    if(route.params.id == 'add') {
        const { Data, Error } = await usePostRequest('api/v1/branch_company/',bransh.value)
        requestConditions.value.error = Error?.value?.errors
        requestConditions.value.data = Data.value
    }
    else {
        const { Data, Error } = await usePatchRequest('api/v1/branch_company/'+route.params.id+'/',bransh.value)
        requestConditions.value.error = Error?.value?.errors
        requestConditions.value.data = Data.value
    }
    if(requestConditions.value.error != null) {
        requestConditions.value.loading = false
    }
    else {
        router.push('/company-branshes')
    }
}

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

<style>

</style>