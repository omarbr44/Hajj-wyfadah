<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div>
            <div class="rtl-d px-10 pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">إضافة بطاقة جديدة</h1>
                <hr>
                <div class="w-full flex gap-5">
                    <div class="w-1/2 p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-4">
                        <h1 class="text-xl font-bold text-site-blue">التنسيق</h1>
                        <div class="w-full">
                            <p class="text-black font-semibold w-[50%] mb-3">عنوان البطاقة <span class="text-red-500">*</span></p>
                            <input 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="ادخل اسم او عنوان لتصميم هذه البطاقة">
                            <p v-if="requestConditions?.error?.name_ar" class="text-red-500 mt-1">{{ requestConditions.error.name_ar }}</p>
                        </div>
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3">العرض <span class="text-red-500">*</span></p>
                            <input 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="0">
                            <p v-if="requestConditions?.error?.info_branch" class="text-red-500 mt-1">{{ requestConditions.error.info_branch }}</p>
                        </div>
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3">الطول <span class="text-red-500">*</span></p>
                            <input 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="0">
                            <p v-if="requestConditions?.error?.info_branch" class="text-red-500 mt-1">{{ requestConditions.error.info_branch }}</p>
                        </div>
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3">اللون الرئيسي <span class="text-red-500">*</span></p>
                            <input 
                            v-model="color"
                            type="color"
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] h-16 p-2 rounded-xl"
                            >
                            <p v-if="requestConditions?.error?.info_branch" class="text-red-500 mt-1">{{ requestConditions.error.info_branch }}</p>
                        </div>
                        <div class="w-[48%] flex items-center gap-4">
                            <p class="text-black text-sm font-semibold">إدراج تصميم بطاقة خاص</p>
                            <button @click="Fileinput.click()">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_613_1598)">
                                <rect x="-18" y="-5" width="61" height="35" rx="2" fill="#5FC1CF"/>
                                <path d="M11 16V7.85L8.4 10.45L7 9L12 4L17 9L15.6 10.45L13 7.85V16H11ZM6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.19667 19.0217 4.00067 18.5507 4 18V15H6V18H18V15H20V18C20 18.55 19.8043 19.021 19.413 19.413C19.0217 19.805 18.5507 20.0007 18 20H6Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_613_1598">
                                <rect width="24" height="24" rx="3" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </button>
                            <input 
                            ref="Fileinput"
                            type="file"
                            class="hidden"
                            >
                        </div>
                        <p class="text-black font-semibold w-[50%]">تصميم البطاقة <span class="text-red-500">*</span></p>
                        <div class="w-full flex justify-evenly">
                            <div>
                                <img src="/img/card1.png" alt="card1">
                                <p class="text-center">النموذج ( 1 )</p>
                            </div>
                            <div>
                                <img src="/img/card2.png" alt="card1">
                                <p class="text-center mt-2">النموذج ( 2 )</p>
                            </div>
                            <div>
                                <img src="/img/card3.png" alt="card1">
                                <p class="text-center mt-2">النموذج ( 3 )</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <h1 class="text-xl font-bold text-site-blue mb-5">البطاقة</h1>
                        <DigitalIdCard :color="color" class="w-full" />
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
import DigitalIdCard from '../../../components/HajjPages/DigitalId/DigitalIdCard.vue';

const router = useRouter()
const route = useRoute()
const user = useUserStore()
const loadPage = ref(false)
const color = ref()
const Fileinput = ref(null)

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