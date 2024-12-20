<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <h1 class="text-site-blue text-xl font-semibold mb-5">اختيار السرير في خيمة منى </h1>
                <hr>
                <div class="w-full flex justify-between items-center my-8">
                    <div class="flex items-center bg-site-blue text-white w-[40%] py-2 px-5 gap-24">
                        <DoorIcon />
                        <p class="text-3xl font-semibold ">المدخل</p>
                    </div>
                    <div class="flex items-center bg-site-blue text-white w-[40%] py-2 px-5 gap-24">
                        <DoorIcon />
                        <p class="text-3xl font-semibold ">المدخل</p>
                    </div>
                </div>
                <div class="w-full flex justify-evenly items-center flex-wrap gap-y-8">
                    <div v-for="(bed,index) in beds" :key="index" class="flex flex-col items-center w-[30%] gap-5">
                        <SmallBedIcon class=" bg-site-text-grey p-2 bg-opacity-65" v-if=" index > 2 && index < 6" />
                        <BedIcon v-else />
                        <p class="text-2xl text-center font-semibold">رقم السرير : 3</p>
                        <p class="text-2xl text-center font-semibold"
                            :class="index % 2 == 0 ? 'text-green-800' : 'text-red-800'">
                            <span v-show="index % 2 == 0">متاح</span>
                            <span v-show="index % 2 != 0">غير متاح</span>
                        </p>
                    </div>
                </div>
                <div class="w-full flex justify-between items-center my-8">
                    <div class="flex items-center bg-site-blue text-white w-[40%] py-2 px-5 gap-24">
                        <ACIcon />
                        <p class="text-3xl font-semibold ">التكييف</p>
                    </div>
                    <div class="flex items-center bg-site-blue text-white w-[40%] py-2 px-5 gap-24">
                        <ACIcon />
                        <p class="text-3xl font-semibold ">التكييف</p>
                    </div>
                </div>
                <hr>
                <div class="flex items-center justify-end">
                    <button  class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center my-8">
                        <span class="font-bold text-xl px-16 py-1">تأكيد</span>
                    </button>
                </div>
            </div>
        </div>
        <div v-else class=" flex justify-center mt-52">
            <PageLoader />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useGetRequest } from '../../../../composables/useRequest';
import PageLoader from '../../../../components/icon/PageLoader.vue';
import DoorIcon from '../../../../components/icon/DoorIcon.vue';
import BedIcon from '../../../../components/icon/BedIcon.vue';
import ACIcon from '../../../../components/icon/ACIcon.vue';
import SmallBedIcon from '../../../../components/icon/SmallBedIcon.vue';

const loadPage = ref(false)
const viewAll = ref(true)
const beds = ref([{text: ''},{text: ''},{text: ''},{text: ''},{text: ''},{text: ''},{text: ''},{text: ''},{text: ''},])
const locations = ref(null)
const nextPage = ref(false)
const previousPage = ref(false)
const pages = ref(0)
const route = useRoute()
const routeParams = computed(()=> route.params.id)
onMounted(async ()=>{
    if(route.params.id != 'all')
        viewAll.value = false
/*     const {Data, Error} = await useGetRequest('api/v1/location/')
    locations.value = Data.value.data.result
    nextPage.value = Data.value.data.next ? true : false
    previousPage.value = Data.value.data.previous ? true : false   
        pages.value = Data.value.data.count / 15 */
    loadPage.value = true
})
watch(routeParams,()=>{
    if(routeParams.value != 'all')
        viewAll.value = false
    else
        viewAll.value = true
})

const trainStatuses = ref([
    {id: 2, name: 'غير متوفر'},
    {id: 1, name: 'متوفر'},
])
const trainStatusFilter = ref()
// watch filters values to send request when they change
watch(trainStatusFilter, async () => {
/*     const {Data} = await useGetRequest('api/v1/location/?department='+trainStatusFilter.value)
    locations.value = Data.value.data.result */
})
const searchResult = (result) => {
    locations.value = result
}
// pagination
const chnagePage = async (newPage) => {
    const {Data} = await useGetRequest('api/v1/location/?page='+newPage)
    locations.value = Data.value.data.result
    nextPage.value = Data.value.data.next ? true : false
    previousPage.value = Data.value.data.previous ? true : false   
        pages.value = Data.value.data.count / 15
}

const randomizeNumber = ()=>{
    for(let i = 0;i<beds.value.length;i++) {
        beds.value[i].text = i+1
    }
}
</script>

<style scoped>

</style>