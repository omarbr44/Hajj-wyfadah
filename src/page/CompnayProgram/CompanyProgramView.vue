<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <h1 class="text-site-blue text-xl font-semibold">
                    معلومات البرامج الخاصة بالشركة</h1>
                <RouterLink to="company-program-add/add" class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center gap-2 my-8">
                    <PlusIcon />
                    <span class="font-bold">إضافة برنامج جديد</span>
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
                                <div class="flex items-center gap-1">
                                    <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">من الاقل الى الاكثر</label>
                                    <input id="default-radio-1" type="radio" :value="1" v-model="statusesFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center gap-1">
                                    <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">من الأكثر الى الأقل</label>
                                    <input id="default-radio-1" type="radio" :value="2" v-model="statusesFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
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
                :deleteLink="deleteLink"
                :canDelete="true">
                    <template v-slot:header>
                        <tr>
                            <th scope="col">اسم البرنامج</th>
                            <th scope="col">الموقع</th>
                            <th scope="col">اسم الفرع</th>
                            <th scope="col">السعر</th>
                            <th scope="col">رمز الوزارة</th>
                            <th scope="col">السعة</th>
                            <th scope="col">المحجوز</th>
                            <th scope="col">المتبقي</th>
                            <th scope="col">العمليات</th>
                        </tr>
                    </template>
                    <template v-slot:body>
                        <!-- <tr v-for="(department,index) in programs" :key="index">
                            <th scope="row">{{ department.name_ar }}</th>
                            <td>{{ department.employe_count }} موظف</td>
                            <td class="text-site-blue cursor-pointer" @click="print()">{{ department.name_manager }}</td>
                            <td class="flex items-center justify-center gap-5">
                                <RouterLink :to="'company-departments-add/'+department.id" class="flex items-center gap-2">
                                    <EditIcon />
                                    <span class="text-[#46814F]">تعديل</span>
                                </RouterLink >
                                <button @click="showDeleteModal(department.id)" class="flex items-center gap-2">
                                    <DeleteIcon />
                                    <span class="text-[#FF3F3F]">حذف</span>
                                </button>
                            </td>
                        </tr> -->
                        <tr>
                            <td>باقة 8 - جدة</td>
                            <td>باقة 8 - الخيام المطورة</td>
                            <td>جدة</td>
                            <td>4500</td>
                            <td>7031637</td>
                            <td>10000</td>
                            <td>10000</td>
                            <td class="font-bold text-red-700 bg-red-300">0</td>
                            <td class="flex items-center justify-center gap-5">
                                <RouterLink :to="'company-departments-add/add'" class="flex items-center gap-2">
                                    <EditIcon />
                                    <span class="text-[#46814F]">تعديل</span>
                                </RouterLink >
                                <button @click="showDeleteModal(1)" class="flex items-center gap-2">
                                    <DeleteIcon />
                                    <span class="text-[#FF3F3F]">حذف</span>
                                </button>
                            </td>
                        </tr>
                    </template>
                    <template v-slot:delete-modal-1>
                        <h1 class="text-center text-3xl font-bold mb-5">هل أنت متأكد من رغبتك في حذف هذا البرنامج؟</h1>
                        <p class="text-center mb-8">سيؤدي حذف البرنامج إلى إزالة جميع المعلومات والبيانات المتعلقة به، وقد يؤثر على سير العمل والأنشطة الخاصة بالشركة. يرجى التحقق من تأثيرات هذا الإجراء والتأكد من قرارك.</p>
                    </template>
                    <template v-slot:delete-modal-2>
                        <h1 class="text-xl font-bold mb-5">عذرًا، لا يمكن حذف هذا البرنامج حاليًا. يظهر أن هناك حجوزات مرتبطة به. يرجى اتخاذ الخطوات التالية قبل محاولة الحذف:
                        </h1>
                        <p class="mb-8">
                            1. تحقق من إلغاء جميع الحجوزات المرتبطة بهذا البرنامج.
                            <br>
                            2. بعد الانتهاء من الخطوة السابقة، يمكنك محاولة حذف البرنامج.
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
        <div v-else class=" flex justify-center mt-52">
            <PageLoader />
        </div>
    </div>
</template>

<script setup>
import { ref,onMounted, watch } from 'vue';
import { RouterLink } from 'vue-router';
import PlusIcon from '../../components/icon/PlusIcon.vue';
import EditIcon from '../../components/icon/EditIcon.vue'
import DeleteIcon from '../../components/icon/DeleteIcon.vue'
import TableComponent from '../../components/Base/tableComponent.vue';
import { useGetRequest } from '../../composables/useRequest';
import PageLoader from '../../components/icon/PageLoader.vue';
import SearchComponent from '../../components/Base/SearchComponent.vue';
import PaginationComponent from '../../components/Base/PaginationComponent.vue';

const loadPage = ref(false)
const programs = ref(null)
const nextPage = ref(false)
const previousPage = ref(false)
onMounted(async ()=>{
/*     const {Data, Error} = await useGetRequest('api/v1/department_company/')
    programs.value = Data.value.data.result 
    nextPage.value = Data.value.data.next ? true : false
    previousPage.value = Data.value.data.previous ? true : false */
    loadPage.value = true
})
const statusesFilter = ref()
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
const deleteLink = ref(null)
const showDeleteModal = (id) => {
    modalVisible.value = true
    deleteLink.value = 'api/v1/department_company/'+id+'/'
}

</script>

<style lang="scss" scoped>

</style>