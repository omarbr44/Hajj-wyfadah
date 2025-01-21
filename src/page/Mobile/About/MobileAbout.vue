<template>
    <div class="w-[80%] bg-[#f9f9f9] pb-8">
        <div>
            <div class="rtl-d px-10 pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">المعلومات الخاصة بالشركة</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl">
                    <div class="w-full flex gap-8 mb-6">
                        <p class="text-black font-semibold mb-3 w-[20%]">الأسم باللغة العربية</p>
                        <input 
                        type="text" 
                        class="w-[60%] relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="شركة عبدالله صالح الكاف لخدمات حجاج الداخل">
                    </div>
                    <div class="w-full flex gap-8">
                        <p class="text-black font-semibold mb-3 w-[20%]">الوصف</p>
                        <textarea
                            class="rules-section w-[60%] bg-white border border-[#BDBDBD] py-2 px-5 rounded-xl h-52"
                        >
                        </textarea>
                    </div>
                    
                    <div class="flex justify-end my-10 text-lg font-bold">
                        <RouterLink to="/mobile-about-edit" class=" bg-site-blue text-white py-3 px-10 rounded-lg">
                                تحديث 
                        </RouterLink>
                    </div>
                </div>
                <h1 class="text-xl font-bold text-site-blue my-5">تواصل معنا</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl">
                    <div class="w-full flex gap-8">
                        <p class="text-black font-semibold mb-3 w-[20%]">تفاصيل العنوان</p>
                        <textarea
                            class="rules-section w-[60%] bg-white border border-[#BDBDBD] py-2 px-5 rounded-xl h-52"
                        >
                        </textarea>
                    </div>
                    <div class="w-full flex gap-8 mt-6">
                        <p class="text-black font-semibold mb-3 w-[20%]">احداثيات العنوان</p>
                        <input 
                        type="text" 
                        class="w-[60%] relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        >
                    </div>
                    <div class="w-full flex gap-8 my-10">
                        <div class="w-1/2 flex gap-5">
                            <p class="text-black font-semibold mb-3 w-[30%]">اسم مدير الفرع</p>
                            <input 
                            type="text" 
                            class="w-[60%] relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            >
                        </div>
                        <div class="w-1/2 flex gap-5">
                            <p class="text-black font-semibold mb-3 w-[30%]">رقم التليفون 2</p>
                            <input 
                            type="text" 
                            class="w-[60%] relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            >
                        </div>
                    </div>
                    <hr>
                    <div class="w-full flex gap-8 my-10">
                        <div class="w-1/2 flex gap-5">
                            <p class="text-black font-semibold mb-3 w-[30%]">رقم التليفون 1</p>
                            <input 
                            type="text" 
                            class="w-[60%] relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            >
                        </div>
                        <div class="w-1/2 flex gap-5">
                            <p class="text-black font-semibold mb-3 w-[30%]">رقم التليفون 2</p>
                            <input 
                            type="text" 
                            class="w-[60%] relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            >
                        </div>
                    </div>
                    
                    <div class="flex justify-end my-10 text-lg font-bold">
                        <RouterLink to="/mobile-about-contact-edit" class=" bg-site-blue text-white py-3 px-10 rounded-lg">
                                تحديث 
                        </RouterLink>
                    </div>
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