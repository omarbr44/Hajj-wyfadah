<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-10 pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">بطاقة الحاج</h1>
                <hr>
            </div>
            <div class="flex justify-center py-10">
                <DigitalIdCard ref="componentRef" />
            </div>
                <button @click="handlePrint"  class="text-lg font-bold bg-site-blue text-white py-3 px-10 rounded-lg m-10">
                    طباعة
                </button>
        </div>
        <div v-else class=" flex justify-center mt-52">
            <PageLoader />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useUserStore } from '../../../stores/user';
import { useGetRequest, usePatchRequest, usePostRequest } from '../../../composables/useRequest';
import { useRoute, useRouter } from 'vue-router';
import PageLoader from '../../../components/icon/PageLoader.vue';
import DigitalIdCard from '../../../components/HajjPages/DigitalId/DigitalIdCard.vue';
import { useVueToPrint } from "vue-to-print";

const componentRef = ref();

const { handlePrint } = useVueToPrint({
      content: componentRef,
      documentTitle: "AwesomeFileName",
    });
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
