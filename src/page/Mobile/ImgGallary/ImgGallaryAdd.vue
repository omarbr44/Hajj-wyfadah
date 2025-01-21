<template>
    <div class="w-[80%] bg-[#f9f9f9] pb-8 min-h-screen">
        <div>
            <div class="rtl-d px-10 pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">اضافة البوم جديد</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl">
                    <div class="w-full flex gap-8 mb-6">
                        <p class="text-black font-semibold mb-3 w-[20%]">عنوان الالبوم</p>
                        <input 
                        type="text" 
                        class="w-[60%] relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="شركة عبدالله صالح الكاف لخدمات حجاج الداخل">
                    </div>
                    <div class="w-full flex gap-8 mb-6">
                        <p class="text-black font-semibold mb-3 w-[20%]">صورة الالبوم</p>
                        <FileInputComponent @changeFile="changeFile" />
                    </div> 
                    <div class="w-full flex gap-8 mb-6">
                        <p class="text-black font-semibold mb-3 w-[20%]">الوصف</p>
                        <textarea
                            class="rules-section w-[60%] bg-white border border-[#BDBDBD] py-2 px-5 rounded-xl h-52"
                        >
                        </textarea>
                    </div>                 
                </div>
                <h1 class="text-xl font-bold text-site-blue my-5">اضافة صور للالبوم</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl">
                    <div class="w-full flex gap-2 mb-6">
                        <p class="text-black font-semibold mb-3 w-[20%]">عنوان الصورة</p>
                        <input 
                        type="text" 
                        class="w-[60%] relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="شركة عبدالله صالح الكاف لخدمات حجاج الداخل">
                    </div>
                    <div class="flex gap-3 mt-10">
                        <div class="w-[40%] flex gap-2 mb-6">
                            <p class="text-black font-semibold mb-3 w-[20%]">ارفع الصوره</p>
                            <FileInputComponent @changeFile="changeFile" />
                        </div> 
                        <div class="w-[60%] flex gap-8 mb-6">
                            <p class="text-black font-semibold mb-3 w-[20%]">وصف الصورة</p>
                            <textarea
                                class="rules-section w-[60%] bg-white border border-[#BDBDBD] py-2 px-5 rounded-xl h-52"
                            >
                            </textarea>
                        </div> 
                    </div>
                    <div class="flex justify-end my-10 text-lg font-bold">
                    <button @click="addBransh" class=" bg-site-blue text-white py-3 px-10 rounded-lg">
                        <span v-if="!requestConditions.loading">
                            ارفع 
                        </span>
                        <LoaderIcon v-else />
                    </button>
                </div>
                <div class="w-full flex gap-4">
                    <div class="flex gap-4 w-[30%]">
                        <div class="flex flex-col items-center">
                            <div class="flex items-center gap-4 mb-2">
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 5.75L17.2097 17.9919" stroke="#555555" stroke-width="2" stroke-linejoin="round"/>
                                <path d="M5.5 17.9922L17.2097 5.75025" stroke="#555555" stroke-width="2" stroke-linejoin="round"/>
                                </svg>
                                <h1 class="text-lg font-semibold">صوره وقفة عرفات</h1>
                            </div>
                            <img src="/img/gallary-img.png" alt="">
                            <p class="text-center mt-4">لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم </p>
                        </div>
                    </div>
                    <div class="flex gap-4 w-[30%]">
                        <div class="flex flex-col items-center">
                            <div class="flex items-center gap-4 mb-2">
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 5.75L17.2097 17.9919" stroke="#555555" stroke-width="2" stroke-linejoin="round"/>
                                <path d="M5.5 17.9922L17.2097 5.75025" stroke="#555555" stroke-width="2" stroke-linejoin="round"/>
                                </svg>
                                <h1 class="text-lg font-semibold">صوره وقفة عرفات</h1>
                            </div>
                            <img src="/img/gallary-img.png" alt="">
                            <p class="text-center mt-4">لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم </p>
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
                    <RouterLink to="/mobile-tripprograms" class="text-red-700 py-4 px-8 ">
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
import Xicon from '../../../components/icon/Xicon.vue';

import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '../../../stores/user';
import LoaderIcon from '../../../components/icon/loaderIcon.vue';
import FileInputComponent from '../../../components/Base/FileInputComponent.vue';

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
    /* const {Data, Error} = await useGetRequest('api/v1/city/')
    cities.value = Data.value.data
    if(route.params.id != 'add') {
        const {Data, Error} = await useGetRequest('api/v1/branch_company/'+route.params.id)
        bransh.value = Data.value.data
        bransh.value.barnch_status = statuses.value.filter( el => el.id == bransh.value.barnch_status )[0]
        bransh.value.city = cities.value.filter( el => el.id == bransh.value.city )[0]
        loadPage.value = true
    } */
    loadPage.value = true
})

</script>

<style>

</style>