<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-10 pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">معلومات التواصل للحاج</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-y-4">
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">رقم الجوال الثاني<span class="text-[#DADADA]">( اختياري )</span></p>
                        <input 
                        v-model="locationObj.name_ar"
                        name="phone" 
                        type="number" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="57534770">
                        <p v-if="requestConditions?.error?.name_ar" class="text-red-500 mt-1">{{ requestConditions.error.name_ar }}</p>
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">البريد الالكتروني<span class="text-[#DADADA]">( اختياري )</span></p>
                        <input 
                        v-model="locationObj.name_ar"
                        name="mail" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="mail@gmail.com">
                        <p v-if="requestConditions?.error?.name_ar" class="text-red-500 mt-1">{{ requestConditions.error.name_ar }}</p>
                    </div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">عمر الحاج</p>
                        <input 
                        v-model="locationObj.name_ar"
                        name="mail" 
                        type="number" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="40">
                        <p v-if="requestConditions?.error?.name_ar" class="text-red-500 mt-1">{{ requestConditions.error.name_ar }}</p>
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">المدينة<span class="text-[#DADADA]">( اختياري )</span></p>
                        <Select v-model="fromCountry" :options="[1,2]" optionLabel="name" 
                                    placeholder="اختر المدينة" overlayClass="!bg-white rtl-d p-2" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                    :pt="{overlay:' shadow-xl'}">
                                    <template #value="slotProps">
                                        <span>جدة</span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="flex items-center gap-3 mb-3 cursor-pointer py-1 hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                            <div>جدة</div>
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
                        <p v-if="requestConditions?.error?.name_ar" class="text-red-500 mt-1">{{ requestConditions.error.name_ar }}</p>
                    </div>
                    <div class="flex justify-end w-full">
                        <button @click="addLocation" class=" bg-site-blue font-bold text-white py-3 px-10 rounded-lg">
                            <span v-if="!requestConditions.loading">
                                تحديث 
                            </span>
                            <LoaderIcon v-else />
                        </button>
                    </div>
                </div>
                <h1 class="text-xl font-bold text-site-blue my-5">معلومات الحاج</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl">
                    <h1 class="text-xl font-bold text-site-blue mb-5">المعلومات الشخصية</h1>
                    <div class="w-full p-4 py-8 border border-[#DADADA] rounded-2xl flex flex-wrap gap-y-6">
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">اسم الحاج</p>
                            <input 
                            v-model="locationObj.name_ar"
                            name="" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="ABDUL HAMEED MUHAMMAD SIDDIQ">
                        </div>
                        <div class="w-[8%]"></div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]"> اسم الحاج الاخير</p>
                            <input 
                            v-model="locationObj.name_ar"
                            name="" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder=" SIDDIQ">
                        </div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">رقم الجوال</p>
                            <input 
                            v-model="locationObj.name_ar"
                            name="" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="58939022">
                        </div>
                        <div class="w-[8%]"></div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">رقم الهوية</p>
                            <input 
                            v-model="locationObj.name_ar"
                            name="" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="2523673982">
                        </div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">الجنسية</p>
                            <input 
                            v-model="locationObj.name_ar"
                            name="" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="سعودي">
                        </div>
                        <div class="w-[8%]"></div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">الجنس</p>
                            <input 
                            v-model="locationObj.name_ar"
                            name="" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="ذكر">
                        </div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">المدينة</p>
                            <input 
                            v-model="locationObj.name_ar"
                            name="" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="جدة">
                        </div>
                        <div class="w-[8%]"></div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">حالة 
                                التصريح</p>
                            <input 
                            v-model="locationObj.name_ar"
                            name="" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="تم إصدار التصريح">
                        </div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">حالة 
                                تفعيل ذهاب الحاج للمخيم</p>
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                          </div>
                        </div>
                        <div class="w-[8%]"></div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">المخيم</p>
                            <input 
                            v-model="locationObj.name_ar"
                            name="" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="باقة (1) D-19 الخيام المطورة">
                        </div>

                    </div>
                    <h1 class="text-xl font-bold text-site-blue my-5">معلومات الحجز</h1>
                    <div class="w-full p-4 py-8 border border-[#DADADA] rounded-2xl flex flex-wrap gap-y-6">
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">رقم الحجز</p>
                            <input 
                            v-model="locationObj.name_ar"
                            name="" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="ABDUL HAMEED MUHAMMAD SIDDIQ">
                        </div>
                        <div class="w-[8%]"></div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">الباقة</p>
                            <input 
                            v-model="locationObj.name_ar"
                            name="" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="باقة 1 - جدة">
                        </div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">رقم الباقة</p>
                            <input 
                            v-model="locationObj.name_ar"
                            name="" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="78939022">
                        </div>
                        <div class="w-[8%]"></div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">الجنس</p>
                            <input 
                            v-model="locationObj.name_ar"
                            name="" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="ذكر">
                        </div>
                        <div class="w-full flex justify-center">
                            <div class="w-[45%] flex gap-2 items-center">
                                <p class="text-site-blue font-semibold w-[40%]">رقم التصريح</p>
                                <input 
                                v-model="locationObj.name_ar"
                                name="" 
                                type="number" 
                                class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                                placeholder="2523673982">
                            </div>   
                        </div>
                    </div>
                    <h1 class="text-xl font-bold text-site-blue my-5">معلومات التسكين</h1>
                    <div class="w-full p-4 py-8 border border-[#DADADA] rounded-2xl flex flex-wrap gap-y-6">
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">خيمة 
                                منى</p>
                            <input 
                            v-model="locationObj.name_ar"
                            name="" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="28858326">
                        </div>
                        <div class="w-[8%]"></div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">رقم المقعد في منى</p>
                            <input 
                            v-model="locationObj.name_ar"
                            name="" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="باقة 1 - جدة">
                        </div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">خيمة مزدلفة</p>
                            <input 
                            v-model="locationObj.name_ar"
                            name="" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="7031638">
                        </div>
                        <div class="w-[8%]"></div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">رقم المقعد في مزدلفة</p>
                            <input 
                            v-model="locationObj.name_ar"
                            name="" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="3982">
                        </div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">خيمة 
                                عرفة</p>
                            <input 
                            v-model="locationObj.name_ar"
                            name="" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="7031638">
                        </div>
                        <div class="w-[8%]"></div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">رقم 
                                المقعد في عرفات</p>
                            <input 
                            v-model="locationObj.name_ar"
                            name="" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="7031638">
                        </div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">الباص</p>
                            <input 
                            v-model="locationObj.name_ar"
                            name="" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="8">
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full py-8 bg-site-text-grey text-white text-center text-3xl font-bold absolute bottom-auto z-50">
                <span class="text-green-800" >ملاحظة :</span> جنسية الحاج غير قابلة للتعديل
            </div>
        </div>
        <div v-else class=" flex justify-center mt-52">
            <PageLoader />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useUserStore } from '../../../stores/user';
import LoaderIcon from '../../../components/icon/loaderIcon.vue';
import { useGetRequest, usePatchRequest, usePostRequest } from '../../../composables/useRequest';
import { useRoute, useRouter } from 'vue-router';
import PageLoader from '../../../components/icon/PageLoader.vue';
import Select from 'primevue/select';
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