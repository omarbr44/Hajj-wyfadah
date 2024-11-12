<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-10 pt-28">
                <h1 v-if="route.params.id == 'add'" class="text-xl font-bold text-site-blue mb-5">إرسال رد</h1>
                <h1 v-else class="text-xl font-bold text-site-blue mb-5">عرض الاستفسار</h1>
                <hr>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-y-4">
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اسم الحاج</p>
                        <input 
                        v-model="locationObj.name_ar"
                        name="" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="ABDUL HAMEED MUHAMMAD SIDDIQ">
                        <p v-if="requestConditions?.error?.name_ar" class="text-red-500 mt-1">{{ requestConditions.error.name_ar }}</p>
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">رقم الجوال</p>
                        <input 
                        v-model="locationObj.name_ar"
                        name="" 
                        type="number" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="50889829">
                        <p v-if="requestConditions?.error?.name_ar" class="text-red-500 mt-1">{{ requestConditions.error.name_ar }}</p>
                    </div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اسم مرسل الرد</p>
                        <input 
                        v-model="locationObj.name_ar"
                        name="" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="خالد عبد الله">
                        <p v-if="requestConditions?.error?.name_ar" class="text-red-500 mt-1">{{ requestConditions.error.name_ar }}</p>
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">حالة الرد</p>
                        <input 
                        v-model="locationObj.name_ar"
                        name="" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="لم يتم الرد">
                        <p v-if="requestConditions?.error?.name_ar" class="text-red-500 mt-1">{{ requestConditions.error.name_ar }}</p>
                    </div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">محتوى رسالة  <span class=" text-site-dark-blue font-semibold">الاستفسار</span></p>
                        <textarea v-model="fromTermConditon"  class="text-black w-full h-52 p-5 rules-section rounded-2xl border border-[#BDBDBD]" placeholder="اكتب المحتوى">
                        </textarea>
                        <p v-if="requestConditions?.error?.name_ar" class="text-red-500 mt-1">{{ requestConditions.error.name_ar }}</p>
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">محتوى رسالة  <span class=" text-site-dark-blue font-semibold">الرد</span></p>
                        <textarea v-model="fromTermConditon"  class="text-black w-full h-52 p-5 rules-section rounded-2xl border border-[#BDBDBD]" placeholder="اكتب المحتوى">
                        </textarea>
                        <p v-if="requestConditions?.error?.name_ar" class="text-red-500 mt-1">{{ requestConditions.error.name_ar }}</p>
                    </div>
                    <div class="w-full flex justify-end my-10 text-lg font-bold">
                    <button v-if="route.params.id == 'add'" class="text-site-blue">إرسال الرد</button>
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
import Select from 'primevue/select';
import SearchComponent from '../../../components/Base/SearchComponent.vue';

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
/*     if(route.params.id != 'add') {
        const {Data, Error} = await useGetRequest('api/v1/location/'+route.params.id)
        locationObj.value = Data.value.data
        loadPage.value = true
    }
    else {
        loadPage.value = true
} */
   loadPage.value = true
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

<style scoped>

</style>