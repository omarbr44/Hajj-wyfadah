<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-10 pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">توزيع الباصات</h1>
                <hr>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex gap-4 flex-wrap gap-y-4">
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اسم الباص</p>
                        <input 
                        disabled
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="باص ٩٩">
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">المدينة</p>
                        <input 
                        disabled
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="جدة">
                    </div>
                    <div class="w-full flex justify-center">
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3">رقم السرير</p>
                            <input 
                            disabled
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="120">
                        </div>
                    </div>
                </div>
            </div>
            <div class="rtl-d px-10 pt-12">
                <h1 class="text-xl font-bold text-site-blue mb-5">توزيع خيمة منى</h1>
                <hr>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex gap-4 flex-wrap gap-y-4">
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اسم الخيمة</p>
                        <input 
                        disabled
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="خيمة ٩٩">
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">الموقع</p>
                        <input 
                        disabled
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="باقة 1 - المطورة">
                    </div>
                    <div class="w-full flex justify-center">
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3">رقم السرير</p>
                            <input 
                            disabled
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="120">
                        </div>
                    </div>
                </div>
            </div>
            <div class="rtl-d px-10 pt-12">
                <h1 class="text-xl font-bold text-site-blue mb-5">توزيع خيمة عرفة</h1>
                <hr>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex gap-4 flex-wrap gap-y-4">
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اسم الخيمة</p>
                        <input 
                        disabled
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="خيمة ٩٩">
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">الموقع</p>
                        <input 
                        disabled
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="باقة 1 - المطورة">
                    </div>
                    <div class="w-full flex justify-center">
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3">رقم السرير</p>
                            <input 
                            disabled
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="120">
                        </div>
                    </div>
                </div>
            </div>
            <div class="rtl-d px-10 py-12">
                <h1 class="text-xl font-bold text-site-blue mb-5">توزيع خيمة مزدلفة</h1>
                <hr>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex gap-4 flex-wrap gap-y-4 relative">
                    <div v-if="true" class=" absolute top-0 left-0 w-full h-full bg-[#D9D9D9] bg-opacity-85 text-site-blue z-40 flex justify-center items-center text-3xl font-bold">
                        التوزيع لم يتم إعداده بعد سيتم إعلامك لاحقاً
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اسم الخيمة</p>
                        <input 
                        disabled
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="خيمة ٩٩">
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">الموقع</p>
                        <input 
                        disabled
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="باقة 1 - المطورة">
                    </div>
                    <div class="w-full flex justify-center">
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3">رقم السرير</p>
                            <input 
                            disabled
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="120">
                        </div>
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
import { useUserStore } from '../../../../stores/user';
import { useGetRequest, usePatchRequest, usePostRequest } from '../../../../composables/useRequest';
import { useRoute, useRouter } from 'vue-router';
import PageLoader from '../../../../components/icon/PageLoader.vue';
import Select from 'primevue/select';

const router = useRouter()
const route = useRoute()
const user = useUserStore()
const loadPage = ref(false)
const groupObj = ref({
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
        const {Data, Error} = await useGetRequest('api/v1/group/'+route.params.id)
        groupObj.value = Data.value.data
        loadPage.value = true
    }
    else {
        loadPage.value = true
    } */
    loadPage.value = true
})

const addGroup = async () => {
    requestConditions.value.loading = true
    if(route.params.id == 'add') {
        const { Data, Error } = await usePostRequest('api/v1/group/',groupObj.value)
        requestConditions.value.error = Error?.value?.errors
        requestConditions.value.data = Data.value
    }
    else {
        const { Data, Error } = await usePatchRequest('api/v1/group/'+route.params.id+'/',groupObj.value)
        requestConditions.value.error = Error?.value?.errors
        requestConditions.value.data = Data.value
    }
/*     if(requestConditions.value.error != null) {
        requestConditions.value.loading = false
    }
    else {
        router.push('/company-location')
    } */
}
</script>

<style>
.dp__input {
    background: #f9f9f9 !important;
}
</style>