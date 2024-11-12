<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <h1 class="text-site-blue text-xl font-semibold">الاستفسارات
                </h1>
                <button @click="modalVisible = true" class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center gap-2 my-8">
                    <PlusIcon />
                    <span class="font-bold">إضافة تصنيف للاستفسارات</span>
                </button>
                <div class="flex justify-end mt-2">
                    <button id="menu2-activator" class="flex justify-between w-1/2 items-center px-4 py-2 border border-[#BDBDBD] rounded-xl">
                        <span>إظهار تصنيفات الاستفسارات</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                        </svg>
                    </button>
                    <v-menu activator="#menu2-activator" :close-on-content-click="false">
                        <div class="bg-white shadow-md rounded-md">
                            <div class="px-8 py-4">
                                <SearchComponent
                                placeholder="البحث"
                                bg="bg-white"
                                api="api/v1/location/?search="
                                @resultSearch="searchResult" />
                            </div>
                            <div v-for="(text,index) in ['النقل','الإعاشة']" :key="index" class="w-full py-2">
                                <div class="flex w-full items-center p-4 justify-between gap-3 mb-3 cursor-pointer py-1">
                                    <div class="flex gap-3 items-center">
                                        <button>
                                            <DeleteIcon />
                                        </button>
                                        <button>
                                            <EditIcon />
                                        </button>
                                    </div>
                                    <div>{{text}}</div>
                                </div>
                                <hr>
                            </div>
                        </div>
                    </v-menu> 
                </div>
                <hr class="my-2">
                <div class="flex items-center gap-5 my-10">
                    <button id="menu-activator" class="flex flex-col items-center gap-1 ">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0V2H17L11 11V18H7V11L1 2H0V0H18Z" fill="#5FC1CF"/>
                        </svg>
                        <p class="text-site-blue">صنف ب</p>
                    </button>
                    <v-menu activator="#menu-activator" :close-on-content-click="false">
                        <div class="bg-white shadow-md rounded-md">
                            <p class="text-site-blue font-bold rtl-d p-3">التصنيف</p>
                            <div class="flex gap-10 items-center px-10 pt-1 mb-3 justify-end flex-wrap gap-y-5 w-[23rem]">
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">الكل</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">الإعاشة</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">التسكين</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                            </div>
                            <hr>
                            <p class="text-site-blue font-bold rtl-d p-3">حالة الرد</p>
                            <div class="flex gap-10 items-center px-10 pt-1 mb-3 justify-end flex-wrap gap-y-5 w-[23rem]">
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">الكل</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">تم الرد</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">لم يتم الرد</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                            </div>
                            <hr>
                            <p class="text-site-blue font-bold rtl-d p-3">الموقع</p>
                            <div class="flex gap-10 items-center px-10 pt-1 mb-3 justify-end flex-wrap gap-y-5 w-[23rem]">
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">الكل</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">باقة (4) الخيام المطورة</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">باقة (4) الخيام المطورة</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                            </div>
                            <hr>
                            <p class="text-site-blue font-bold rtl-d p-3">اسم الفرع</p>
                            <div class="flex gap-10 items-center px-10 pt-1 mb-3 justify-end flex-wrap gap-y-5 w-[23rem]">
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">الكل</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">جدة</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">المدينة المنورة</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                            </div>
                            <hr>
                        </div>
                    </v-menu> 
                    <div class="relative w-3/6">
                       <SearchComponent
                       placeholder="ابحث باسم الحاج -الاستفسار - التصنيف -مرسل الرد"
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
                            <th scope="col">اسم الحاج</th>
                            <th scope="col">الاستفسار</th>
                            <th scope="col">التصنيف</th>
                            <th scope="col">مرسل الرد</th>
                            <th scope="col">حالة الرد</th>
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
                            <td>
                                <p class=" text-site-dark-blue font-semibold">BDUL HAMEED MUHAMMAD SIDDIQ</p>
                            </td>
                            <td><p>هل يمكنكم إرسال جدول الرحلة اليومي؟ أود معرفة تفاصيل الأنشطة والمواعيد لضمان الاستعداد المناسب.</p></td>
                            <td>النقل</td>
                            <td>
                                <p class=" text-site-dark-blue font-semibold">خالد عبد الله </p>
                            </td>
                            <td class="bg-red-500 bg-opacity-25 text-red-500">لم يتم الرد</td>
                            <td class="">
                                <div class="flex items-center justify-center gap-2 border-0 relative w-[7rem]">
                                    <RouterLink v-if="index != 3" :to="'/communication-inquery/1'" class="flex items-center gap-1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.0686 11.636C2.8026 7.194 6.8836 4 11.9996 4C17.1156 4 21.1966 7.194 22.9316 11.636C23.0231 11.87 23.0231 12.13 22.9316 12.364C21.1966 16.806 17.1156 20 11.9996 20C6.8836 20 2.8026 16.806 1.0686 12.364C0.977133 12.13 0.977133 11.87 1.0686 11.636ZM11.9996 15C12.7953 15 13.5583 14.6839 14.1209 14.1213C14.6835 13.5587 14.9996 12.7956 14.9996 12C14.9996 11.2044 14.6835 10.4413 14.1209 9.87868C13.5583 9.31607 12.7953 9 11.9996 9C11.204 9 10.4409 9.31607 9.87828 9.87868C9.31567 10.4413 8.9996 11.2044 8.9996 12C8.9996 12.7956 9.31567 13.5587 9.87828 14.1213C10.4409 14.6839 11.204 15 11.9996 15Z" fill="#1495A7"/>
                                        </svg>
                                        <span class="text-[#008093] text-base text-nowrap">عرض</span>
                                    </RouterLink >
                                    <RouterLink v-else to='/communication-inquery/add' class="flex items-center px-4 py-2 text-white bg-site-dark-blue rounded-3xl">
                                        <span class="text-lg font-semibold">إرسال رد</span>
                                    </RouterLink >
                                </div>
                            </td>
                        </tr>
                    </template>
                </TableComponent>
                <Dialog v-model:visible="modalVisible" modal closeIcon="!hidden" :closeOnEscape="true" class="bg-white rtl-d p-5 relative" :pt="{mask:'bg-[#00000042]',pcCloseButton:'!hidden !opacity-0'}" :style="{ width: '70%' }">
                    <template #container="{ closeCallback }">
                        <h1 class="text-center text-3xl font-bold mb-5 text-site-blue">إضافة تصنيف للاستفسارات</h1>
                        <div class="w-full px-10 pb-20 pt-10">
                            <p class="text-black font-semibold w-[50%] mb-3">اسم التصنيف</p>
                            <input
                            name="" 
                            type="text" 
                            class="w-full relative border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="مثال : النقل">
                        </div>

                        <div class="w-full flex justify-between text-2xl font-bold px-10">
                        <button @click="switchTagsToText = true" class=" bg-site-blue text-white px-8 py-4 rounded-2xl">
                                إضافة
                        </button>
                        <button @click="closeCallback" class="text-site-text-grey">
                            الغاء
                        </button>
                    </div>
                    </template> 
                </Dialog>
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
import { ref, onMounted, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import TableComponent from '../../../components/Base/tableComponent.vue';
import { useGetRequest } from '../../../composables/useRequest';
import PageLoader from '../../../components/icon/PageLoader.vue';
import SearchComponent from '../../../components/Base/SearchComponent.vue';
import PaginationComponent from '../../../components/Base/PaginationComponent.vue';
import PlusIcon from '../../../components/icon/PlusIcon.vue';
import Select from 'primevue/select';
import DeleteIcon from '../../../components/icon/DeleteIcon.vue';
import EditIcon from '../../../components/icon/EditIcon.vue';

const loadPage = ref(false)
const viewAll = ref(true)
const locations = ref(null)
const nextPage = ref(false)
const previousPage = ref(false)
const route = useRoute()
onMounted(async ()=>{
    if(route.params.id != 'all')
        viewAll.value = false
/*     const {Data, Error} = await useGetRequest('api/v1/location/')
    locations.value = Data.value.data.result
    nextPage.value = Data.value.data.next ? true : false
    previousPage.value = Data.value.data.previous ? true : false */
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
}

const modalVisible = ref(false)

</script>