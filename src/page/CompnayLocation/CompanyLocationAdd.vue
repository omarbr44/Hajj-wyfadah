<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-10 pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">إضافة موقع جديد</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-y-4">
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اسم الموقع <span class="text-red-500">*</span></p>
                        <input 
                        v-model="locationObj.name_ar"
                        name="location-name" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder=" مثال : باقة ٩ العزيزية">
                        <p v-if="requestConditions?.error?.name_ar" class="text-red-500 mt-1">{{ requestConditions.error.name_ar }}</p>
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">السعة<span class="text-red-500">*</span></p>
                        <input 
                        v-model="locationObj.capacity"
                        name="location-size" 
                        type="number" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال : 1032 ">
                        <p v-if="requestConditions?.error?.capacity" class="text-red-500 mt-1">{{ requestConditions.error.capacity }}</p>
                    </div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">رقم المخيم<span class="text-red-500">*</span></p>
                        <input 
                        v-model="locationObj.number_location"
                        name="number" 
                        type="number" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال : 7121 ">
                        <p v-if="requestConditions?.error?.number_location" class="text-red-500 mt-1">{{ requestConditions.error.number_location }}</p>
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">رقم الواتس<span class="text-red-500">*</span></p>
                        <input 
                        v-model="locationObj.phone"
                        name="whatsnumber" 
                        type="number" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال : 56877869">
                        <p v-if="requestConditions?.error?.phone" class="text-red-500 mt-1">{{ requestConditions.error.phone }}</p>
                    </div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">عدد الرجال</p>
                        <input 
                        v-model="locationObj.number_man"
                        name="man-number" 
                        type="number" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال : 99">
                        <p v-if="requestConditions?.error?.number_man" class="text-red-500 mt-1">{{ requestConditions.error.number_man }}</p>
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">عدد النساء</p>
                        <input 
                        v-model="locationObj.number_women"
                        name="woman-number" 
                        type="number" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال : 99">
                        <p v-if="requestConditions?.error?.number_women" class="text-red-500 mt-1">{{ requestConditions.error.number_women }}</p>
                    </div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">تحديد الإدارة</p>
                        <input 
                        v-model="locationObj.number_management"
                        name="managment-number" 
                        type="number" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال : 99">
                        <p v-if="requestConditions?.error?.number_management" class="text-red-500 mt-1">{{ requestConditions.error.number_management }}</p>
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">تحديد الخدمات</p>
                        <input 
                        v-model="locationObj.number_services"
                        name="service-number" 
                        type="number" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال : 88">
                        <p v-if="requestConditions?.error?.number_services" class="text-red-500 mt-1">{{ requestConditions.error.number_services }}</p>
                    </div>
                    <div class="">
                        <p class="text-black font-semibold mb-3">هل يتوفر مع  هذا الموقع خدمة القطار ؟ </p>
                        <div class="flex items-center p-2">
                            <input
                            v-model="locationObj.have_train"
                            name="train-option" 
                            type="radio"
                            :value="true"
                            class="relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl size-4">
                            <label class="ml-5 mr-2" >نعم</label>
                            <input 
                            v-model="locationObj.have_train"
                            name="train-option" 
                            type="radio"
                            :value="false"
                            class="relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl size-4">
                            <label class="mr-2">لا</label>

                        </div>
                    </div>
                </div>
                <h1 class="text-xl font-bold text-site-blue my-5">موقع منى</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-y-4">
                    <div class="w-[45%]">
                        <div class="" >
                            <p class="text-black font-semibold w-[50%] mb-3 mt-5">رابط موقع منى</p>
                            <div class="relative">
                                <input 
                                v-model="locationObj.url_location_munaa"
                                name="link" 
                                type="text" 
                                class="w-full bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                                placeholder="اضف رابط الموقع من خرائط قوقل">
                                <LocationIcon />
                            </div>
                            <p v-if="requestConditions?.error?.url_location_munaa" class="text-red-500 mt-1">{{ requestConditions.error.url_location_munaa }}</p>
                        </div>
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">عنوان منى</p>
                        <textarea
                        v-model="locationObj.address_munaa"
                         name=""
                         rows="6" 
                         class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                         placeholder="مثال : مخيم رقم D19 (6-5) فئة (هـ) مقابل محطة مزدلفة 3
Camp No. ( D19 ) (6-5) (E)Opposite Muzdalifah Train Station No.3"
                        ></textarea>
                        <p v-if="requestConditions?.error?.address_munaa" class="text-red-500 mt-1">{{ requestConditions.error.address_munaa }}</p>
                    </div>
                </div>
                <h1 class="text-xl font-bold text-site-blue my-5">موقع عرفة</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-y-4">
                    <div class="w-[45%]">
                        <div >
                            <p class="text-black font-semibold w-[50%] mb-3 mt-5">رابط موقع عرفة</p>
                            <div class="relative">
                                <input 
                                v-model="locationObj.url_location_earafah"
                                name="link" 
                                type="text" 
                                class="w-full bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                                placeholder="اضف رابط الموقع من خرائط قوقل">
                                <LocationIcon />
                            </div>
                            <p v-if="requestConditions?.error?.url_location_earafah" class="text-red-500 mt-1">{{ requestConditions.error.url_location_earafah }}</p>
                        </div>
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">عنوان عرفة</p>
                        <textarea
                        v-model="locationObj.address_earafah"
                         name=""
                         rows="6" 
                         class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                         placeholder="مثال : مخيم Camp No. ( D19 ) (6-5) (E)Opposite Muzdalifah Train Station No.3"
                        ></textarea>
                        <p v-if="requestConditions?.error?.address_earafah" class="text-red-500 mt-1">{{ requestConditions.error.address_earafah }}</p>
                    </div>
                </div>
                <h1 class="text-xl font-bold text-site-blue my-5">موقع مزدلفة</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-y-4">
                    <div class="w-[45%]">
                        <div >
                            <p class="text-black font-semibold w-[50%] mb-3 mt-5">رابط موقع مزدلفة</p>
                            <div class="relative">  
                                <input
                                v-model="locationObj.url_location_muzdalifah" 
                                name="link" 
                                type="text" 
                                class="w-full bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                                placeholder="اضف رابط الموقع من خرائط قوقل">
                                <LocationIcon />
                            </div>
                            <p v-if="requestConditions?.error?.url_location_muzdalifah" class="text-red-500 mt-1">{{ requestConditions.error.url_location_muzdalifah }}</p>
                        </div>
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">عنوان مزدلفة</p>
                        <textarea
                        v-model="locationObj.address_muzdalifah" 
                         name=""
                         rows="6" 
                         class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                         placeholder="مثال : مخيم Camp No. ( D19 ) (6-5) (E)Opposite Muzdalifah Train Station No.3"
                        ></textarea>
                        <p v-if="requestConditions?.error?.address_muzdalifah" class="text-red-500 mt-1">{{ requestConditions.error.address_muzdalifah }}</p>
                    </div>
                </div>
                <div class="flex items-center justify-between my-10 text-lg font-bold">
                    <button @click="addLocation" class=" bg-site-blue text-white py-3 px-10 rounded-lg">
                        <span v-if="!requestConditions.loading">
                            إضافة 
                        </span>
                        <LoaderIcon v-else />
                    </button>
                    <RouterLink to="/company-location" class="text-red-700 py-4 px-8 ">
                        إلغاء
                    </RouterLink>
                </div>
            </div>
        </div>
        <div v-else class=" flex justify-center mt-52">
            <PageLoader />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useUserStore } from '../../stores/user';
import LoaderIcon from '../../components/icon/loaderIcon.vue';
import { useGetRequest, usePatchRequest, usePostRequest } from '../../composables/useRequest';
import LocationIcon from '../../components/icon/LocationIcon.vue';
import { useRoute, useRouter } from 'vue-router';
import PageLoader from '../../components/icon/PageLoader.vue';

const router = useRouter()
const route = useRoute()
const user = useUserStore()
const loadPage = ref(false)
const locationObj = ref({
    subscriber_company: user.userCompantId,
    name_ar: null,
    name_en: null,
    capacity: null,
    number_location: null,
    phone: null,
    number_man: null,
    number_women: null,
    number_services: null,
    number_management: null,
    have_train: null,
    url_location_munaa: null,
    address_munaa: null,
    url_location_earafah: null,
    address_earafah: null,
    url_location_muzdalifah: null,
    address_muzdalifah: null,
})
const requestConditions = ref({
    data: null,
    error: null,
    loading: false,
})

onMounted(async ()=>{
    if(route.params.id != 'add') {
        const {Data, Error} = await useGetRequest('api/v1/location/'+route.params.id)
        locationObj.value = Data.value.data
        loadPage.value = true
    }
    else {
        loadPage.value = true
    }
})

const addLocation = async () => {
    requestConditions.value.loading = true
    if(route.params.id == 'add') {
        const { Data, Error } = await usePostRequest('api/v1/location/',locationObj.value)
        requestConditions.value.error = Error?.value?.errors
        requestConditions.value.data = Data.value
    }
    else {
        const { Data, Error } = await usePatchRequest('api/v1/location/'+route.params.id+'/',locationObj.value)
        requestConditions.value.error = Error?.value?.errors
        requestConditions.value.data = Data.value
    }
    if(requestConditions.value.error != null) {
        requestConditions.value.loading = false
    }
    else {
        router.push('/company-location')
    }
}
</script>

<style>
.dp__input {
    background: #f9f9f9 !important;
}
</style>