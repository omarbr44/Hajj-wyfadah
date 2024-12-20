<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-10 pt-28">
                    <h1 class="text-xl font-bold text-site-blue mb-5">المعلومات الشخصية</h1>
                    <div class="w-full p-4 py-8 border border-[#DADADA] rounded-2xl flex flex-wrap gap-y-6">
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">اسم الحاج</p>
                            <input 
                            disabled
                            v-model="hajjInfo.name"
                            name="" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="ABDUL HAMEED MUHAMMAD SIDDIQ">
                        </div>
                        <div class="w-[8%]"></div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]"> اسم الحاج الاخير</p>
                            <input 
                            disabled
                            v-model="hajjInfo.last_name"
                            name="" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder=" SIDDIQ">
                        </div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">رقم الجوال</p>
                            <input 
                            disabled
                            v-model="hajjInfo.phone"
                            name="" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="58939022">
                        </div>
                        <div class="w-[8%]"></div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">رقم الهوية</p>
                            <input 
                            disabled
                            v-model="hajjInfo.id_number"
                            name="" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="2523673982">
                        </div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">الجنسية</p>
                            <input 
                            disabled
                            v-model="hajjInfo.name_nationalitie"
                            name="" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="سعودي">
                        </div>
                        <div class="w-[8%]"></div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">الجنس</p>
                            <input 
                            disabled
                            v-model="hajjInfo.gender"
                            name="" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="ذكر">
                        </div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">المدينة</p>
                            <input 
                            disabled
                            v-model="hajjInfo.name_city"
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
                            disabled
                            v-model="hajjInfo.name_status_pilgrim"
                            name="" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="تم إصدار التصريح">
                        </div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">المخيم</p>
                            <input 
                            disabled
                            v-model="hajjInfo.name_camp"
                            name="" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="باقة (1) D-19 الخيام المطورة">
                        </div>
                        <div class="w-[8%]"></div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">بطاقة الحاج</p>
                            <div class="relative w-full">
                                <input 
                                disabled
                                value="طباعة"
                                name="" 
                                type="text" 
                                class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl text-site-blue"
                                placeholder="باقة (1) D-19 الخيام المطورة">
                                <svg class=" absolute bottom-[13px] left-3" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.0011 3.84603H4.00113V0.616028H14.0011V3.84603ZM14.6161 8.11603C14.8995 8.11603 15.1371 8.02003 15.3291 7.82803C15.5211 7.63603 15.6168 7.39836 15.6161 7.11503C15.6161 6.83169 15.5205 6.59436 15.3291 6.40303C15.1378 6.21169 14.9001 6.11569 14.6161 6.11503C14.3328 6.11503 14.0955 6.21103 13.9041 6.40303C13.7128 6.59503 13.6168 6.83236 13.6161 7.11503C13.6161 7.39836 13.7121 7.63603 13.9041 7.82803C14.0961 8.02003 14.3335 8.11569 14.6161 8.11503V8.11603ZM13.0011 15V10.462H5.00113V15H13.0011ZM14.0011 16H4.00113V12H0.578125V6.61503C0.578125 6.04836 0.770458 5.57336 1.15512 5.19003C1.53979 4.80669 2.01413 4.61503 2.57813 4.61503H15.4241C15.9908 4.61503 16.4658 4.80669 16.8491 5.19003C17.2325 5.57336 17.4241 6.04836 17.4241 6.61503V12H14.0011V16Z" fill="#48b4c3"/>
                                </svg>
                            </div>
                        </div>

                    </div>
                    <h1 class="text-xl font-bold text-site-blue my-5">معلومات الحجز</h1>
                    <div class="w-full p-4 py-8 border border-[#DADADA] rounded-2xl flex flex-wrap gap-y-6">
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">رقم الحجز</p>
                            <input 
                            disabled
                            v-model="hajjInfo.booking_number"
                            name="" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="ABDUL HAMEED MUHAMMAD SIDDIQ">
                        </div>
                        <div class="w-[8%]"></div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">الباقة</p>
                            <input 
                            disabled
                            v-model="hajjInfo.program"
                            name="" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="باقة 1 - جدة">
                        </div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">رقم الباقة</p>
                            <input 
                            disabled
                            v-model="hajjInfo.name_ar"
                            name="" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="78939022">
                        </div>
                        <div class="w-[8%]"></div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">الجنس</p>
                            <input 
                            disabled
                            v-model="hajjInfo.gender"
                            name="" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="ذكر">
                        </div>
                        <div class="w-full flex justify-center">
                            <div class="w-[45%] flex gap-2 items-center">
                                <p class="text-site-blue font-semibold w-[40%]">رقم التصريح</p>
                                <input 
                                disabled
                                v-model="hajjInfo.package_number"
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
                            disabled
                            v-model="hajjInfo.mona_tent_number"
                            name="" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="28858326">
                        </div>
                        <div class="w-[8%]"></div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">رقم المقعد في منى</p>
                            <input 
                            disabled
                            v-model="hajjInfo.mona_seat_number"
                            name="" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="باقة 1 - جدة">
                        </div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">خيمة مزدلفة</p>
                            <input 
                            disabled
                            v-model="hajjInfo.muztalifa_tent_number"
                            name="" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="7031638">
                        </div>
                        <div class="w-[8%]"></div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">رقم المقعد في مزدلفة</p>
                            <input
                            disabled 
                            v-model="hajjInfo.muztalifa_seat_number"
                            name="" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="3982">
                        </div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">خيمة 
                                عرفة</p>
                            <input 
                            disabled
                            v-model="hajjInfo.arafat_tent_number"
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
                            disabled
                            v-model="hajjInfo.arafat_seat_number"
                            name="" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="7031638">
                        </div>
                        <div class="w-[45%] flex gap-2 items-center">
                            <p class="text-site-blue font-semibold w-[40%]">الباص</p>
                            <input 
                            disabled
                            v-model="hajjInfo.name_transport"
                            name="" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="8">
                        </div>
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
import { useUserStore } from '../../../stores/user';
import LoaderIcon from '../../../components/icon/loaderIcon.vue';
import { useGetRequest, usePatchRequest, usePostRequest } from '../../../composables/useRequest';
import { useRoute, useRouter } from 'vue-router';
import PageLoader from '../../../components/icon/PageLoader.vue';
import PrintIcon from '../../../components/icon/PrintIcon.vue';
const router = useRouter()
const route = useRoute()
const user = useUserStore()
const loadPage = ref(false)
 const hajjInfo = ref({
    age: null, 
    arafat_seat_number: null, 
    arafat_tent_number: null, 
    booking_number: null, 
    camp: null, 
    city: null, 
    create_at: null, 
    date_booking: null, 
    date_of_birth: null, 
    gender: null, 
    id: null, 
    id_number: null, 
    last_name: null, 
    mona_seat_number: null,
    mona_tent_number: null,
    muztalifa_seat_number: null, 
    muztalifa_tent_number: null, 
    name: null,
    name_camp: null, 
    name_city: null,
    name_nationalitie: null,
    name_status_pilgrim: null,
    name_transport: null,
    nationalitie: null,
    package_number: null,
    phone: null,
    program: null,
    status_pilgrim: null,
    subscriber_company: null,
    transport: null,
    transport_number: null
}) 
const requestConditions = ref({
    data: null,
    error: null,
    loading: false,
})

onMounted(async ()=>{
/*     if(route.params.id != 'add') {
        const {Data, Error} = await useGetRequest('api/v1/pilgrim/'+route.params.id)
        hajjInfo.value = Data.value.data
        hajjInfo.value.gender = hajjInfo.value.gender == 1 ? 'ذكر' : (hajjInfo.value.gender == 2 ? 'انثى' : '')
        loadPage.value = true
    }
    else {
        loadPage.value = true
    } */
    loadPage.value = true
})

</script>

<style>
.dp__input {
    background: #f9f9f9 !important;
}
</style>