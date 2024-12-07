<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <h1 class="text-site-blue text-xl font-semibold mb-5">تحضير ترتيب الاسرة للخيمة 5</h1>
                <span class="text-site-blue font-semibold">الموقع : باقة (4) سكن العزيزية</span>
                <span class="text-site-blue font-semibold mx-5">مكان الخيمة : مزدلفة</span>
                <span class="text-site-blue font-semibold">السعة : 9 اسرة</span>
                <button @click="randomizeNumber" class="my-5 block">
                    <span class=" bg-site-blue text-white font-semibold rounded-full px-4 py-2" >ترقيم الي</span>
                </button>
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
                        <BedIcon />
                        <input
                        v-model="bed.text"
                        type="text" 
                        class=" h-24 w-44 text-center bg-[#f9f9f9] border border-site-blue p-2 rounded-lg font-extrabold text-xl"
                        placeholder="ادخل رقم السرير">
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
                        <span class="font-bold text-xl px-16 py-1">حفظ</span>
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
import { useGetRequest } from '../../../composables/useRequest';
import PageLoader from '../../../components/icon/PageLoader.vue';
import DoorIcon from '../../../components/icon/DoorIcon.vue';
import BedIcon from '../../../components/icon/BedIcon.vue';
import ACIcon from '../../../components/icon/ACIcon.vue';

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