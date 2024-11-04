<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div>
            <div class="rtl-d px-5 pt-28">
                <h1 class="text-site-blue text-xl font-semibold">إدارة الفروع التابعة للحملة</h1>
                <RouterLink to="company-branshes-add" class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center gap-2 my-8">
                    <PlusIcon />
                    <span class="font-bold">إضافة فرع جديد</span>
                </RouterLink>
                <div class="flex items-center gap-5 mb-10">
                    <button id="menu-activator" class="flex flex-col items-center gap-1">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0V2H17L11 11V18H7V11L1 2H0V0H18Z" fill="#5FC1CF"/>
                        </svg>
                        <p class="text-site-blue">صنف ب</p>
                    </button>
                    <v-menu activator="#menu-activator" :close-on-content-click="false">
                        <div class="bg-white shadow-md rounded-md">
                            <p class="text-site-blue font-bold rtl-d p-6">حالة التسجيل</p>
                            <div class="flex gap-10 items-center p-10 pt-1">
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">الكل</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="statusesFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div  v-for="(status,index) in statuses" :key="index" class="flex items-center gap-1">
                                    <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{status.name}}</label>
                                    <input id="default-radio-1" type="radio" :value="status.id" v-model="statusesFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
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
                <TableComponent 
                :modalVisible="modalVisible"
                @closeModal="modalVisible = false"
                :canDelete="false">
                    <template v-slot:header>
                        <tr>
                            <th scope="col">إسم الفرع</th>
                            <th scope="col">الحافلة</th>
                            <th scope="col">سعة التسجيل</th>
                            <th scope="col">عدد الحجاج المسجلين</th>
                            <th scope="col">المتبقي</th>
                            <th scope="col">حالة التسجيل</th>
                            <th scope="col">العمليات</th>
                        </tr>
                    </template>
                    <template v-slot:body>
                        <tr>
                            <th scope="row">جدة</th>
                            <td>22</td>
                            <td>10000</td>
                            <td>900</td>
                            <td>100</td>
                            <td class="font-bold text-red-700 bg-red-300">غير مكتمل</td>
                            <td class="flex items-center justify-center gap-5">
                                <button class="flex items-center gap-2">
                                    <EditIcon />
                                    <span class="text-[#46814F]">تعديل</span>
                                </button>
                                <button @click="modalVisible = true" class="flex items-center gap-2">
                                    <DeleteIcon />
                                    <span class="text-[#FF3F3F]">حذف</span>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">جدة</th>
                            <td>22</td>
                            <td>10000</td>
                            <td>900</td>
                            <td>100</td>
                            <td class="font-bold text-green-700 bg-green-300">مكتمل</td>
                            <td class="flex items-center justify-center gap-5">
                                <button class="flex items-center gap-2">
                                    <EditIcon />
                                    <span class="text-[#46814F]">تعديل</span>
                                </button>
                                <button @click="modalVisible = true" class="flex items-center gap-2">
                                    <DeleteIcon />
                                    <span class="text-[#FF3F3F]">حذف</span>
                                </button>
                            </td>
                        </tr>
                    </template>
                    <template v-slot:delete-modal-1>
                        <h1 class="text-center text-3xl font-bold mb-5">هل أنت متأكد من رغبتك في حذف هذا الفرع؟</h1>
                        <p class="text-center mb-8">سيتم حذف الفرع بشكل دائم، وسيؤدي ذلك إلى إزالة جميع المعلومات والسجلات المتعلقة به. لا يمكن التراجع عن هذا الإجراء، وسيؤثر على جميع العمليات المتعلقة بالفرع.</p>
                    </template>
                    <template v-slot:delete-modal-2>
                        <h1 class="text-xl font-bold mb-5">عذرًا، لا يمكن حذف هذا الفرع حاليًا. يظهر أن هناك حجاج مسجلين مرتبطين بهذا الفرع. يرجى اتخاذ الخطوات التالية قبل محاولة الحذف:
                        </h1>
                        <p class="mb-8">
                            1. تأكد من فصل جميع الحجاج المسجلين لهذا الفرع.
                            <br>
                            2. بعد الانتهاء من الخطوة السابقة، يمكنك محاولة حذف الفرع.
                        </p>
                        <p>يرجى ملاحظة أن عملية الحذف ستؤدي إلى إزالة جميع البيانات ذات الصلة ولا يمكن استعادتها بعد الحذف.</p>                              
                    </template>
                </TableComponent>
                <PaginationComponent
                 :next="nextPage"
                 :previous="previousPage"
                 @changePage="chnagePage" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref, watch, onMounted } from 'vue';
import TableComponent from '../../components/Base/tableComponent.vue';
import PlusIcon from '../../components/icon/PlusIcon.vue';
import EditIcon from '../../components/icon/EditIcon.vue'
import DeleteIcon from '../../components/icon/DeleteIcon.vue'
import SearchComponent from '../../components/Base/SearchComponent.vue';
import PaginationComponent from '../../components/Base/PaginationComponent.vue';


const statuses = ref([
    {id: 2, name: 'غير مكتمل'},
    {id: 1, name: 'مكتمل'},
])
const statusesFilter = ref()
const nextPage = ref(false)
const previousPage = ref(false)

onMounted(async ()=>{
    /* const {Data, Error} = await useGetRequest('api/v1/company_employe/')
    employeeObj.value = Data.value.data.result
    nextPage.value = Data.value.data.next ? true : false
    previousPage.value = Data.value.data.previous ? true : false
    const {Data:departmentsValue} = await useGetRequest('api/v1/department_company/')
    departments.value = departmentsValue.value.data.result
    loadPage.value = true */
})
// watch filters values to send request when they change
watch(statusesFilter, async () => {
/*     const {Data} = await useGetRequest('api/v1/location/?department='+trainStatusFilter.value)
    locations.value = Data.value.data.result */
})
const searchResult = (result) => {
    locations.value = result
}
// pagination
const chnagePage = async (newPage) => {
    const {Data} = await useGetRequest('api/v1/company_employe/?page='+newPage)
    employeeObj.value = Data.value.data.result
    nextPage.value = Data.value.data.next ? true : false
    previousPage.value = Data.value.data.previous ? true : false
}

const modalVisible = ref(false)
</script>

<style >
div[data-pc-section="box"] {
    display: none;
}
</style>