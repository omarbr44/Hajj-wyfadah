<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <h1 class="text-site-blue text-xl font-semibold">تحضير ترتيب الأسرة في الخيام</h1>
                <hr>
                <div class="flex items-center gap-5 mb-10">
                    <button id="menu-activator" class="flex flex-col items-center gap-1">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0V2H17L11 11V18H7V11L1 2H0V0H18Z" fill="#5FC1CF"/>
                        </svg>
                        <p class="text-site-blue">صنف ب</p>
                    </button>
                    <v-menu activator="#menu-activator" :close-on-content-click="false">
                        <div class="bg-white shadow-md rounded-md">
                            <p class="text-site-blue font-bold rtl-d p-3">الموقع</p>
                            <div class="flex gap-10 items-center px-10 pt-1 mb-1 justify-end flex-wrap gap-y-5 w-[23rem]">
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">الكل</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">باقة (4) الخيام المطورة</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">باقة (٣) الخيام العزيزية</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                            </div>
                            <hr>
                            <p class="text-site-blue font-bold rtl-d p-3">مكان الخيمة</p>
                            <div class="flex gap-10 items-center px-10 pt-1 mb-1 justify-end flex-wrap gap-y-5 w-[23rem]">
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">الكل</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">عرفات</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">مزدلفة</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                            </div>
                            <hr>
                            <p class="text-site-blue font-bold rtl-d p-3">حالة تحضير ترتيب الأسرة</p>
                            <div class="flex gap-10 items-center px-10 pt-1 mb-1 justify-end flex-wrap gap-y-5 w-[23rem]">
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">الكل</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">تم تحضير ترتيب الأسرة</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">لم يتم التحضير ترتيب الأسرة</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                            </div>
                        </div>
                    </v-menu> 
                    <div class="w-[40%] relative">
                       <SearchComponent
                       api="api/v1/location/?search="
                       @resultSearch="searchResult" />
                    </div> 
                </div>
                <TableComponent class=" overflow-auto"
                :modalVisible="modalVisible"
                @closeModal="modalVisible = false"
                :deleteLink="deleteLink"
                :canDelete="true">
                    <template v-slot:header>
                        <tr>
                            <th scope="col">رقم الخيمة</th>
                            <th scope="col">مكان الخيمة</th>
                            <th scope="col">الموقع</th>
                            <th scope="col">حالة تحضير الأسرة</th>
                            <th scope="col">الاختيار اليدوي للحجاج</th>
                            <th scope="col">العمليات</th>
                        </tr>
                    </template>
                    <template v-slot:body>
                        <!-- <tr v-for="(location,index) in locations" :key="index">
                            <th scope="row">{{ location.name_ar }}</th>
                            <td>{{ location.capacity }}</td>
                            <td>{{ location.number_management }}</td>
                            <td></td>
                            <td>{{ location.number_man }}</td>
                            <td>{{ location.number_women }}</td>
                            <td 
                            class="font-bold"
                            :class="location.have_train == true ? 'text-green-700 bg-green-300' : 'text-red-700 bg-red-300'">
                                <span v-if="location.have_train">متواجد</span>
                                <span v-else>غير متواجد</span>
                            </td>
                            <td class="flex items-center justify-center gap-5">
                                <RouterLink :to="'company-location-add/'+location.id" class="flex items-center gap-2">
                                    <EditIcon />
                                    <span class="text-[#46814F]">تعديل</span>
                                </RouterLink >
                                <button @click="showDeleteModal(location.id)" class="flex items-center gap-2">
                                    <DeleteIcon />
                                    <span class="text-[#FF3F3F]">حذف</span>
                                </button>
                            </td>
                        </tr> -->
                        <tr v-for="index in 5" >
                            <td 
                            class="text-white underline text-lg font-semibold"
                            :class=" index % 2 ==0 ? 'bg-site-blue' : 'bg-[#FF3F3F]' ">
                                <p class="w-52">الخيمة 5</p>
                            </td>
                            <td>عرفات</td>
                            <td>باقة (4) الخيام المطورة</td>
                            <td class="bg-green-500 bg-opacity-30 text-green-600" >تم التحضير</td>
                            <td>
                                <span class="bg-green-500 bg-opacity-30 text-green-600 rounded-full px-4 py-2" >تم التفعيل</span>
                            </td>
                            <td class="">
                                <div class="flex items-center justify-center gap-2 border-0 relative w-[17rem]">
                                    <RouterLink v-if="index % 2 ==0" :to="'/bed-tent-add/1'" class="flex items-center gap-1">
                                        <EditIcon />
                                        <span class="text-[#46814F] text-base text-nowrap">تعديل</span>
                                    </RouterLink >
                                    <RouterLink v-else to="/bed-tent-add/1" class="flex items-center gap-1 rounded-2xl bg-black bg-opacity-80 p-2">
                                        <span class="text-white text-nowrap">تحضير ترتيب الأسرة</span>
                                    </RouterLink>
                                </div>
                            </td>
                        </tr>
                    </template>
                </TableComponent>
                <PaginationComponent
                 class="mt-5"
                 :next="nextPage"
                 :previous="previousPage"
                 @changePage="chnagePage" />
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
import TableComponent from '../../../components/Base/tableComponent.vue';
import EditIcon from '../../../components/icon/EditIcon.vue'
import { useGetRequest } from '../../../composables/useRequest';
import PageLoader from '../../../components/icon/PageLoader.vue';
import SearchComponent from '../../../components/Base/SearchComponent.vue';
import PaginationComponent from '../../../components/Base/PaginationComponent.vue';

const loadPage = ref(false)
const viewAll = ref(true)
const locations = ref(null)
const nextPage = ref(false)
const previousPage = ref(false)
const route = useRoute()
const routeParams = computed(()=> route.params.id)
onMounted(async ()=>{
    if(route.params.id != 'all')
        viewAll.value = false
/*     const {Data, Error} = await useGetRequest('api/v1/location/')
    locations.value = Data.value.data.result
    nextPage.value = Data.value.data.next ? true : false
    previousPage.value = Data.value.data.previous ? true : false */
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
}
</script>

<style scoped>

</style>