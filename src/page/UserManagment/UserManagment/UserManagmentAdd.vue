<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div>
            <div class="rtl-d px-10 pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">إضافة مستخدم جديد</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-4 gap-y-10">
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">الاسم <span class="text-red-500">*</span></p>
                        <input 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="اكتب اسم المستخدم">
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
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">نوع المستخدم<span class="text-red-500">*</span></p>
                        <Select v-model="bransh.city" :options="cities" optionLabel="name_ar" 
                                    placeholder="اختر من القائمة" overlayClass="!bg-white rtl-d p-2" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                    :pt="{overlay:' shadow-xl'}">
                                    <template #value="slotProps">
                                        <span v-if="slotProps.value">{{ slotProps.value.name_ar }}</span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="flex items-center gap-3 mb-3 cursor-pointer py-1 hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                            <div>{{ slotProps.option.name_ar }}</div>
                                        </div>
                                    </template>
                                    <template #dropdownicon>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                        </svg>
                                    </template>
                                    <template #header>
                                        <div class="font-medium"></div>
                                    </template>
                        </Select>
                        <p v-if="requestConditions?.error?.city" class="text-red-500 mt-1">{{ requestConditions.error.city }}</p>
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اسم الفرع<span class="text-red-500">*</span></p>
                        <Select v-model="bransh.city" :options="cities" optionLabel="name_ar" 
                                    placeholder="اختر من القائمة" overlayClass="!bg-white rtl-d p-2" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                    :pt="{overlay:' shadow-xl'}">
                                    <template #value="slotProps">
                                        <span v-if="slotProps.value">{{ slotProps.value.name_ar }}</span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="flex items-center gap-3 mb-3 cursor-pointer py-1 hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                            <div>{{ slotProps.option.name_ar }}</div>
                                        </div>
                                    </template>
                                    <template #dropdownicon>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                        </svg>
                                    </template>
                                    <template #header>
                                        <div class="font-medium"></div>
                                    </template>
                        </Select>
                        <p v-if="requestConditions?.error?.city" class="text-red-500 mt-1">{{ requestConditions.error.city }}</p>
                    </div>
                    <div class="w-[48%]">
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
                    <div class="w-[48%]">
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
import { useGetRequest, usePostRequest, usePatchRequest } from '../../../composables/useRequest';
import Select from 'primevue/select';
import LocationIcon from '../../../components/icon/LocationIcon.vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '../../../stores/user';
import LoaderIcon from '../../../components/icon/loaderIcon.vue';

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