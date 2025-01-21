<template>
    <div class="w-[80%] bg-[#f9f9f9] pb-8 min-h-screen">
        <div>
            <div class="rtl-d px-10 pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">شروط الحملة</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl">
                    <div class="w-full flex gap-8 mb-6">
                        <p class="text-black font-semibold mb-3 w-[20%]">شروط الحملة</p>
                        <textarea
                            class="rules-section w-[60%] bg-white border border-[#BDBDBD] py-2 px-5 rounded-xl h-52"
                        >
                        </textarea>
                    </div>
                    <div class="w-full flex gap-8 mb-6">
                        <p class="text-black font-semibold mb-3 w-[20%]">رفع ملف شروط الحملة <span class="text-[#979797]">(اختياري)</span></p>
                        <FileInputComponent @changeFile="changeFile" />
                    </div>                  
                    <div class="flex justify-end my-10 text-lg font-bold">
                        <RouterLink to="/mobile-about-edit" class=" bg-site-blue text-white py-3 px-10 rounded-lg">
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