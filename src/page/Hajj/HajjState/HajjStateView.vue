<template>
<div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <h1 class="text-site-blue text-xl font-semibold mb-10">حالات الحجاج</h1>
                <div class="flex items-center gap-5 mb-10">
                    <button id="menu-activator" class="flex flex-col items-center gap-1">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0V2H17L11 11V18H7V11L1 2H0V0H18Z" fill="#5FC1CF"/>
                        </svg>
                        <p class="text-site-blue">صنف ب</p>
                    </button>
                    <v-menu activator="#menu-activator" :close-on-content-click="false">
                        <div class="bg-white shadow-md rounded-md">
                            <p class="text-site-blue font-bold rtl-d p-3">حالة تسجيل الدخول في نظام الويب</p>
                            <div class="flex gap-10 items-center px-10 pt-1 mb-1 justify-end flex-wrap gap-y-5 w-[23rem]">
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">الكل</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">تم تسجيل الدخول</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">غير مسجل الدخول</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                            </div>
                            <hr>
                            <p class="text-site-blue font-bold rtl-d p-3">حالة تسجيل الدخول في تطبيق الجوال</p>
                            <div class="flex gap-10 items-center px-10 pt-1 mb-1 justify-end flex-wrap gap-y-5 w-[23rem]">
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">الكل</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">تم تسجيل الدخول</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">غير مسجل الدخول</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                            </div>
                            <p class="text-site-blue font-bold rtl-d p-3">المجموعات</p>

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
                deleteLink=""
                :canDelete="true">
                    <template v-slot:header>
                        <tr>
                            <th scope="col">الحاج</th>
                            <th scope="col">رقم
                                الهوية</th>
                            <th scope="col">رقم 
                                حجز الوزارة</th>
                            <th scope="col">حالة دخول نظام الويب</th>
                            <th scope="col">رقم 
                                الجوال</th>
                            <th scope="col">حالة دخول تطبيق الجوال</th>
                            <th scope="col">محادثة الواتس اب</th>
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
                            <td>khalid saad abduallah</td>
                            <td>112320</td>
                            <td>22435</td>
                            <td class="bg-green-300 text-green-600 font-bold">تم تسجيل الدخول</td>
                            <td>
                                <RouterLink to="" class="text-site-blue font-bold" >50789766</RouterLink>
                            </td>
                            <td class=" bg-red-300 text-red-600 font-bold" >غير مسجل دخول بالتطبيق</td>
                            <td class="bg-[#e2f1f3]">
                                <a href="https://wa.me/552196312" class="text-site-blue font-bold" >دردشة الواتس اب</a>
                            </td>
                        </tr>
                    </template>
                    <template v-slot:delete-modal-1>
                        <h1 class="text-center text-3xl font-bold mb-5">هل أنت متأكد أنك ترغب في إلغاء توزيع الباص  
                            المجموعة  28858326  ؟                        </h1>
                        <p class="text-center mb-8">إلغاء توزيع الباص سيعني عدم تخصيص وسيلة نقل للمجموعة في الوقت الحالي. يرجى التأكد من تقديم هذا القرار بعناية، حيث لا يمكن التراجع عن هذه العملية بعد تنفيذها.</p>
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
import { RouterLink } from 'vue-router';
import TableComponent from '../../../components/Base/tableComponent.vue';
import { useGetRequest } from '../../../composables/useRequest';
import PageLoader from '../../../components/icon/PageLoader.vue';
import SearchComponent from '../../../components/Base/SearchComponent.vue';
import PaginationComponent from '../../../components/Base/PaginationComponent.vue';

const loadPage = ref(false)
const locations = ref(null)
const nextPage = ref(false)
const previousPage = ref(false)
const pages = ref(0)

onMounted(async ()=>{
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
/* const chnagePage = async (newPage) => {
    const {Data} = await useGetRequest('api/v1/location/?page='+newPage)
    locations.value = Data.value.data.result
    nextPage.value = Data.value.data.next ? true : false
    previousPage.value = Data.value.data.previous ? true : false   
        pages.value = Data.value.data.count / 15
} */
const modalVisible = ref(false)

</script>

<style scoped>

</style>