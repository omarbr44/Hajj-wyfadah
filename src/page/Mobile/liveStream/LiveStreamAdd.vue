<template>
    <div class="w-[80%] bg-[#f9f9f9] pb-8 min-h-screen">
        <div>
            <div class="rtl-d px-10 pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">اضف بث مباشر</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl">
                    <div class="w-full flex items-center">
                        <div class="w-1/2 flex gap-8 mb-6">
                            <p class="text-black font-semibold mb-3 w-[20%]">عنوان البث</p>
                            <input 
                            type="text" 
                            class="w-[60%] relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="اكتب عنوان للبث">
                        </div>
                        <div class="w-1/2 flex gap-8 mb-6">
                            <p class="text-black font-semibold mb-3 w-[20%]">رابط البث</p>
                            <input 
                            type="text" 
                            class="w-[60%] relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="اكتب رابط للبث">
                        </div>
                    </div>                 
                    <div class="w-full flex justify-center">
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">حالة التفعيل
                                </p>
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