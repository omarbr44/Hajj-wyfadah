<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <h1 class="text-site-blue text-xl font-semibold">جميع رسائل الشركة
                </h1>
                <div class="flex items-center gap-5 my-10">
                    <button id="menu-activator" class="flex flex-col items-center gap-1 w-1/6">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0V2H17L11 11V18H7V11L1 2H0V0H18Z" fill="#5FC1CF"/>
                        </svg>
                        <p class="text-site-blue">صنف ب</p>
                    </button>
                    <v-menu activator="#menu-activator" :close-on-content-click="false">
                        <div class="bg-white shadow-md rounded-md">
                            <p class="text-site-blue font-bold rtl-d p-3">حالة الإرسال</p>
                            <div class="flex gap-10 items-center px-10 pt-1 mb-3 justify-end flex-wrap gap-y-5 w-[23rem]">
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">الكل</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">فشل الإرسال</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">تم الإرسال</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                            </div>
                            <hr>
                            <div class="w-full my-3"> 
                                <VueDatePicker class=" px-10" format="MM/dd/yyyy" :enable-time-picker="false" auto-apply />
                            </div>
                        </div>
                    </v-menu> 
                    <div class="flex flex-col w-full gap-5">
                        <div class="relative w-5/6">
                            <h1 class="font-bold">محتوى الرسالة</h1>
                           <SearchComponent
                           type="textarea"
                           api="api/v1/location/?search="
                           @resultSearch="searchResult" />
                        </div> 
                    <div class="relative w-5/6">
                       <SearchComponent
                       placeholder="ابحث برقم الجوال "
                       api="api/v1/location/?search="
                       @resultSearch="searchResult" />
                    </div> 
                    </div>
                </div>
                <TableComponent class=" overflow-auto"
                :modalVisible="modalVisible"
                @closeModal="modalVisible = false"
                :deleteLink="deleteLink"
                :canDelete="true">
                    <template v-slot:header>
                        <tr>
                            <th scope="col">رقم الجوال</th>
                            <th scope="col">محتوى الرسالة</th>
                            <th scope="col">تاريخ الإرسال</th>
                            <th scope="col">حالة الرسالة</th>
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
                            <td>552552552</td>
                            <td><p>هنيئاً لكم حجاج البيت العتيق، القادمون من كل فجٍّ عميق. ندعوكم لمتابعة حساباتنا في منصات التواصل الاجتماعي تويتر و سناب وفيسبوك وانستقرام alkafhajj@ شركة عبدالله صالح الكاف لخدمات حجاج الداخل</p></td>
                            <td>2023-05-28</td>
                            <td class="bg-red-500 bg-opacity-25 text-red-500">فشل الإرسال</td>
                            <td class="">
                                <div class="flex items-center justify-center gap-2 border-0 relative w-[7rem]">
                                    <RouterLink :to="'/communication-sentmsgs-detailes/1'" class="flex items-center gap-1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.0686 11.636C2.8026 7.194 6.8836 4 11.9996 4C17.1156 4 21.1966 7.194 22.9316 11.636C23.0231 11.87 23.0231 12.13 22.9316 12.364C21.1966 16.806 17.1156 20 11.9996 20C6.8836 20 2.8026 16.806 1.0686 12.364C0.977133 12.13 0.977133 11.87 1.0686 11.636ZM11.9996 15C12.7953 15 13.5583 14.6839 14.1209 14.1213C14.6835 13.5587 14.9996 12.7956 14.9996 12C14.9996 11.2044 14.6835 10.4413 14.1209 9.87868C13.5583 9.31607 12.7953 9 11.9996 9C11.204 9 10.4409 9.31607 9.87828 9.87868C9.31567 10.4413 8.9996 11.2044 8.9996 12C8.9996 12.7956 9.31567 13.5587 9.87828 14.1213C10.4409 14.6839 11.204 15 11.9996 15Z" fill="#1495A7"/>
                                        </svg>
                                        <span class="text-[#008093] text-base text-nowrap">عرض</span>
                                    </RouterLink >
                                </div>
                            </td>
                        </tr>
                    </template>
                </TableComponent>
                <PaginationComponent
                :pages="Math.ceil(pages)"
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
import { ref, onMounted, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import TableComponent from '../../../components/Base/tableComponent.vue';
import { useGetRequest } from '../../../composables/useRequest';
import PageLoader from '../../../components/icon/PageLoader.vue';
import SearchComponent from '../../../components/Base/SearchComponent.vue';
import PaginationComponent from '../../../components/Base/PaginationComponent.vue';

const loadPage = ref(false)
const viewAll = ref(true)
const locations = ref(null)
const nextPage = ref(false)
const previousPage = ref(false)
const pages = ref(0)
const route = useRoute()
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

const modalVisible = ref(false)

</script>