<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <h1 class="text-site-blue text-xl font-semibold">معلومات جميع الحجاج</h1>
                <div class="flex items-center gap-5 my-10">
                    <button id="menu-activator" class="flex flex-col items-center gap-1">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0V2H17L11 11V18H7V11L1 2H0V0H18Z" fill="#5FC1CF"/>
                        </svg>
                        <p class="text-site-blue">صنف ب</p>
                    </button>
                    <v-menu activator="#menu-activator" :close-on-content-click="false">
                        <div class="bg-white shadow-md rounded-md">
                            <p class="text-site-blue font-bold rtl-d p-3">حالة الحجز</p>
                            <div class="flex gap-10 items-center px-10 pt-1 mb-3 justify-end flex-wrap gap-y-5 w-[23rem]">
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">الكل</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">ملغي</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">فعال</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                            </div>
                            <hr>
                            <p class="text-site-blue font-bold rtl-d p-3">الجنس</p>
                            <div class="flex gap-10 items-center px-10 pt-1 mb-3 justify-end flex-wrap gap-y-5 w-[23rem]">
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">الكل</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">ذكور</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">اناث</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                            </div>
                            <hr>
                            <p class="text-site-blue font-bold rtl-d p-3">الاستثناء</p>
                            <div class="flex gap-10 items-center px-10 pt-1 mb-3 justify-end flex-wrap gap-y-5 w-[23rem]">
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">الكل</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">نعم</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">لا</label>
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
                            <th scope="col">رقم حجز الوزراة</th>
                            <th scope="col">اسم الحاج</th>
                            <th scope="col">خيمة 
                                منى</th>
                            <th scope="col">خيمة عرفة</th>
                            <th  scope="col">رقم
                            الباقة</th>
                            <th scope="col">الجنسية</th>
                            <th scope="col">رقم
                                الهوية</th>
                            <th scope="col">رقم الجوال </th>
                            <th scope="col">حالة الحجز</th>
                            <th scope="col">عرض رسائل الحاج</th>
                            <th scope="col">إرسال ملاحظة</th>
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
                            <td>28858326</td>
                            <td><p class="w-48">ABDUL HAMEED MUHAMMAD SIDDIQ</p></td>
                            <td>34</td>
                            <td>صالون 8</td>
                            <td>3456890</td>
                            <td>هندي</td>
                            <td>23456789</td>
                            <td>507770875</td>
                            <td class="bg-red-500 bg-opacity-25 text-red-500">ملغي</td>
                            <td class="">
                            <RouterLink to="/communication-hajjmsgs/1" class=" py-2 px-4 bg-[#5FC1CF] bg-opacity-25 text-[#5FC1CF] border border-[#5FC1CF] rounded-full">عرض</RouterLink>
                            </td>
                            <td class="">
                            <button @click="modalVisible = true" class=" text-nowrap py-2 px-4 bg-black bg-opacity-70 text-white border border-black rounded-full">إضافة ملاحظة</button>
                            </td>
                            <td class="">
                                <div class="flex items-center justify-center gap-2 border-0 relative w-[6rem]">
                                    <RouterLink :to="'/hajj-info-add/add'" class="flex items-center gap-1">
                                        <EditIcon />
                                        <span class="text-[#46814F] text-base text-nowrap">تعديل</span>
                                    </RouterLink >
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
                 <Dialog v-model:visible="modalVisible" modal closeIcon="!hidden" :closeOnEscape="true" class="bg-white rtl-d p-5 relative" :pt="{mask:'bg-[#00000042]',pcCloseButton:'!hidden !opacity-0'}" :style="{ width: '70%' }">
                    <template #container="{ closeCallback }">
                        <h1 class="text-center text-3xl font-bold mb-5 text-site-blue">إرسال ملاحظة</h1>
                        <div class="w-1/2 my-3">
                            <Select v-model="fromCountry" :options="[1,2]" optionLabel="name" 
                                        placeholder="إظهار تصنيفات الاستفسارات و الملاحظات" overlayClass="!bg-white rtl-d p-2" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                        :pt="{overlay:' shadow-xl'}">
                                        <template #value="slotProps">
                                            <span>إظهار تصنيفات الاستفسارات و الملاحظات</span>
                                        </template>
                                        <template #option="slotProps">
                                            <div class="flex w-full items-center gap-3 mb-3 cursor-pointer p-3 hover:bg-site-blue hover:text-white">
                                                <div>الإعاشة</div>
                                            </div>
                                        </template>
                                        <template #dropdownicon>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                            </svg>
                                        </template>
                                        <template #header>
                                            <div class="font-medium"></div>
                                        </template>
                            </Select>
                        </div>
                        <div class="flex items-center flex-wrap gap-3 px-3 py-4 w-full bg-white border border-site-blue rounded-2xl rounded-b-none">
                            <p class="font-bold text-lg text-site-blue">الملاحظة</p>
                            <div v-show="!hajjStatus" class="bg-site-blue py-1 px-2 flex justify-evenly items-center text-white w-40 rounded-full">
                                <button @click="toggleTag('add')" class="bg-white px-2 rounded-full text-site-blue text-3xl pb-1" style="line-height: 1;">+</button>
                                <span>اسم الحاج</span>
                                <span></span>
                            </div>
                            <div v-show="!welcome" class="bg-site-blue py-1 px-2 flex justify-evenly items-center text-white w-40 rounded-full">
                                <button @click="toggleTag('add','welcome')" class="bg-white px-2 rounded-full text-site-blue text-3xl pb-1" style="line-height: 1;">+</button>
                                <span>التحية</span>
                                <span></span>
                            </div>
                            <div v-show="!email" class="bg-site-blue py-1 px-2 flex justify-evenly items-center text-white w-48 rounded-full">
                                <button @click="toggleTag('add','email')" class="bg-white px-2 rounded-full text-site-blue text-3xl pb-1" style="line-height: 1;">+</button>
                                <span>البريد الالكتروني</span>
                                <span></span>
                            </div>
                            <div v-show="!footer" class="bg-site-blue py-1 px-2 flex justify-evenly items-center text-white w-48 rounded-full">
                                <button @click="toggleTag('add','footer')" class="bg-white px-2 rounded-full text-site-blue text-3xl pb-1" style="line-height: 1;">+</button>
                                <span>خاتمة الرسالة</span>
                                <span></span>
                            </div>
                        </div>
                        <div class="bg-white border border-[#DADADA]">
                            <div class="p-2">
                            <div v-show="hajjStatus && !switchTagsToText" class=" relative bg-site-blue text-white rounded-3xl px-6 py-2 mb-2 w-fit">
                                <span>اسم الحاج</span>
                                <span @click="toggleTag('remove')" class="cursor-pointer absolute top-0 right-0 bg-red-600 rounded-full flex justify-center items-center text-white px-[5px] py-0" style="line-height: 1.2;">x</span>
                            </div>
                            <p v-show="hajjStatus && switchTagsToText" class="text-[#008093] font-semibold my-1">الى الحاج: خالد</p>
                            <div v-show="welcome && !switchTagsToText" class=" relative bg-site-blue text-white rounded-3xl px-6 py-2 mb-2 w-fit">
                            <span>التحية</span>
                            <span @click="toggleTag('remove')" class="cursor-pointer absolute top-0 right-0 bg-red-600 rounded-full flex justify-center items-center text-white px-[5px] py-0" style="line-height: 1.2;">x</span>
                            </div>
                            <p v-show="welcome && switchTagsToText" class="text-[#008093] font-semibold my-1">الى الحاج: خالد</p>
                            </div>
                            <textarea v-model="textareaValue" 
                                      class="text-black w-full min-h-20 p-2 rules-section"
                            >
                            </textarea>
                            <div class="bg-white p-2">
                            <div v-show="email && !switchTagsToText" class=" relative bg-site-blue text-white rounded-3xl px-6 py-2 mb-2 w-fit">
                                <span>البريد الالكتروني</span>
                                <span @click="toggleTag('remove','email')" class="cursor-pointer absolute top-0 right-0 bg-red-600 rounded-full flex justify-center items-center text-white px-[5px] py-0" style="line-height: 1.2;">x</span>
                            </div>
                            <p v-show="email && switchTagsToText" class="text-[#008093] font-semibold my-1">البريد الاكتروني : mail@mail.com</p>
                            <div v-show="footer && !switchTagsToText" class=" relative bg-site-blue text-white rounded-3xl px-6 py-2 mb-2 w-fit">
                                <span>خاتمة الرسالة</span>
                                <span @click="toggleTag('remove','footer')" class="cursor-pointer absolute top-0 right-0 bg-red-600 rounded-full flex justify-center items-center text-white px-[5px] py-0" style="line-height: 1.2;">x</span>
                            </div>
                            <p v-show="footer && switchTagsToText" class="text-[#008093] font-semibold my-1"> في حال كانت هناك أي استفسارات أو طلبات إضافية، فلا تترددوا في التواصل معنا مع اطيب التحيات.</p>
                            </div>
                        </div>
                        <div class="flex w-full justify-end my-3">
                            <p class=" text-[#DADADA]">عدد الاحرف في الرسالة (0)</p>
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
import Select from 'primevue/select';

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


const hajjStatus = ref(false)
const welcome = ref(false)
const email = ref(false)
const footer = ref(false)
const textareaValue = ref('')
const switchTagsToText = ref(false)

const toggleTag = (state,value = 'hajjStatus') => {
    if(state == 'add') {
        if(value == 'email') {
            email.value = true
            return
        }      
        else if(value == 'footer') {
            footer.value = true
            return
        }   
        if(value == 'welcome')     
            welcome.value = true
        else if(value == 'hajjStatus')     
            hajjStatus.value = true
    }
    else {
        if(value == 'email') {
            email.value = false
            return
        }   
        else if(value == 'footer') {
            footer.value = false
            return
        } 
        if(value == 'hajjStatus')     
            hajjStatus.value = false
        else if(value == 'welcome')     
            welcome.value = false
    }
}

</script>
