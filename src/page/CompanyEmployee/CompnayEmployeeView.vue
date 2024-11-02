<template>
    <div id="non-print">
        <NavBarComponent />
        <div v-if="loadPage" class="flex justify-stretch">
            <div class="w-[80%] rtl-d px-5 bg-[#f9f9f9] pt-28">
                <h1 class="text-site-blue text-xl font-semibold">إدارة الموظفين </h1>
                <RouterLink to="company-employee-add/add" class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center gap-2 my-8">
                    <PlusIcon />
                    <span class="font-bold">إضافة موظف</span>
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
                            <p class="text-site-blue font-bold rtl-d p-3">الإدارة</p>
                            <div class="flex gap-10 items-center px-10 pt-1 mb-1 justify-end flex-wrap gap-y-5 w-[23rem]">
                                <div class="flex items-center">
                                    <label for="all" class="mr-2 text-site-blue">الكل</label>
                                    <Checkbox v-model="departmentFilter" inputId="all" name="Checkbox" value="all" />
                                </div>
                                <div v-for="(department,index) in departments" :key="index" class="flex items-center">
                                    <label for="ingredient1" class="mr-2 text-site-blue">{{department.name_ar}}</label>
                                    <Checkbox v-model="departmentFilter" inputId="Checkbox" name="Checkbox" :value="department.name_ar" />
                                </div>
                            </div>
                            <hr>
                            <p class="text-site-blue font-bold rtl-d p-3">حالة التفعيل</p>
                            <div class="flex gap-10 items-center p-10 pt-1 justify-end">
                                <div class="flex items-center">
                                    <label for="ingredient1" class="mr-2 text-site-blue">غير مكتمل</label>
                                    <Checkbox v-model="pizza1" inputId="ingredient1" name="pizza2" value="Cheese2" />
                                </div>
                                <div class="flex items-center">
                                    <label for="ingredient1" class="mr-2 text-site-blue">المكتمل</label>
                                    <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
                                </div>
                                <div class="flex items-center">
                                    <label for="ingredient1" class="mr-2 text-site-blue">الكل</label>
                                    <Checkbox v-model="pizza2" inputId="ingredient1" name="pizza1" value="Cheese1" />
                                </div>
                            </div>
                        </div>
                    </v-menu> 
                    <div class="w-[40%] relative">
                        <input 
                            type="text" 
                            class="w-full bg-[#f9f9f9] border border-[#BDBDBD] p-2 px-10 rounded-3xl"
                        > 
                        <SearchIcon class=" absolute right-4 top-1/2 -translate-y-1/2"/>
                    </div> 
                </div>
                <TableComponent 
                :modalVisible="modalVisible"
                :canDelete="true"
                :deleteLink="deleteLink"
                @closeModal="modalVisible = false"
                >
                    <template v-slot:header>
                        <tr>
                            <th scope="col">الاسم</th>
                            <th scope="col">رقم الجوال</th>
                            <th scope="col">المسمى الوظيفي</th>
                            <th scope="col">الإدارة</th>
                            <th scope="col">التفعيل</th>
                            <th scope="col">طباعة بطاقة الموظف</th>
                            <th scope="col">العمليات</th>
                        </tr>
                    </template>
                    <template v-slot:body>
                        <tr v-for="(employee,index) in employeeObj" :key="index">
                            <th scope="row">{{ employee.name }}</th>
                            <td>{{ employee.phone }}</td>
                            <td>{{ employee.job_title }}</td>
                            <td>{{ employee.name_department }}</td>
                            <td class="text-white">
                                <span 
                                class="rounded-2xl p-2"
                                :class="employee.status == 1 ? 'bg-site-text-grey' : ( employee.status == 2 ? 'bg-green-900' : 'bg-red-700')" >{{ employee.name_status }}</span>
                            </td>
                            <td class="text-white">
                                <button @click="print" class="bg-gray-800 rounded-2xl py-1 w-[80%] mx-auto flex items-center justify-center gap-1">
                                    <PrintIcon />
                                    <span>طباعة البطاقة</span>
                                </button>
                            </td>
                            <td class="flex items-center justify-center gap-5">
                                <RouterLink :to="'company-employee-add/'+employee.id" class="flex items-center gap-2">
                                    <EditIcon />
                                    <span class="text-[#46814F]">تعديل</span>
                                </RouterLink >
                                <button @click="showDeleteModal(employee.id)" class="flex items-center gap-2">
                                    <DeleteIcon />
                                    <span class="text-[#FF3F3F]">حذف</span>
                                </button>
                            </td>
                        </tr>
                    </template>
                    <template v-slot:delete-modal-1>
                        <h1 class="text-center text-3xl font-bold mb-5">هل أنت متأكد أنك ترغب في حذف الموظف المحدد؟</h1>
                        <p class="text-center mb-8">سيتم إزالة جميع البيانات المتعلقة بالموظف من النظام، ولا يمكن استعادة هذه البيانات بعد الحذف.</p>
                    </template>
                    <template v-slot:delete-modal-2>
                        <h1 class="text-xl font-bold mb-5">عذرًا، لا يمكن حذف الموظف حاليًا. يظهر أن لديه دور حيوي في إدارة المستخدمين داخل النظام، وهو أحد الموظفين الذين يمتلكون صلاحية في هذا السياق. يرجى اتخاذ الخطوات التالية قبل محاولة الحذف:
                        </h1>
                        <p class="mb-8">
                            1. تحقق من تعيين موظف بديل لإداء مهامه بالنظام.
                            <br>
                            2. تأكد من عدم تعيين مهام إضافية للموظف بالنظام.
                            <br>
                            3. بعد الانتهاء من الخطوات السابقة، يمكنك محاولة حذف الموظف.
                            <br>
                        </p>
                        <p>يرجى ملاحظة أن عملية الحذف ستؤدي إلى إزالة جميع البيانات ذات الصلة ولا يمكن استعادتها بعد الحذف.</p>                              
                    </template>
                </TableComponent>
            </div>
            <SideBarComponent />
        </div>
        <div v-else class=" flex justify-center mt-52">
            <PageLoader />
        </div>
    </div>
    <div id="print" class="hidden">
        <h1 class=" text-center text-4xl font-bold text-red-800 mt-60">
            شركة عبدالله صالح الكاف
            <br>
            لخدمات حجاج الداخل
        </h1>
        <div class="flex items-center gap-5 my-7 justify-center">
            <div class="w-[200px] h-[300px] bg-site-text-grey"></div>
            <div class="w-[300px] h-[200px] bg-site-text-grey"></div>
        </div>
        <h1 class=" text-center text-3xl font-bold mb-3">
            ابوبكر عبدالعزيز الكثيري
        </h1>
        <h1 class=" text-center text-xl font-bold mb-3">
            الوظيفة: مسؤول التسجيل والنظام
        </h1>
        <h1 class=" text-center text-xl font-bold mb-3">
            صالحة لغاية: 15/12/1444
        </h1>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import TableComponent from '../../components/Base/tableComponent.vue';
import NavBarComponent from '../../components/Company/NavBarComponent.vue';
import PlusIcon from '../../components/icon/PlusIcon.vue';
import EditIcon from '../../components/icon/EditIcon.vue'
import PrintIcon from '../../components/icon/PrintIcon.vue'
import DeleteIcon from '../../components/icon/DeleteIcon.vue'
import SideBarComponent from '../../components/SideBarComponent.vue';
import SearchIcon from '../../components/icon/SearchIcon.vue';
import { useGetRequest } from '../../composables/useRequest';
import PageLoader from '../../components/icon/PageLoader.vue';


const loadPage = ref(false)
const employeeObj = ref(null)
const departments = ref(null)
const departmentFilter = ref()
watch(departmentFilter,()=>{
    if(departmentFilter.value.length > 1)
        departmentFilter.value = departmentFilter.value.slice(0,1)
    console.log(departmentFilter.value)
})
onMounted(async ()=>{
    const {Data, Error} = await useGetRequest('api/v1/company_employe/')
    employeeObj.value = Data.value.data.result
    const {Data:departmentsValue} = await useGetRequest('api/v1/department_company/')
    departments.value = departmentsValue.value.data.result
    loadPage.value = true
})

const modalVisible = ref(false)
const deleteLink = ref(null)
const showDeleteModal = (id) => {
    modalVisible.value = true
    deleteLink.value = 'api/v1/company_employe/'+id+'/'
}
const print = ()=>{
    window.print()
}
</script>

<style >
div[data-pc-section="box"] {
    display: none !important;
}
input[type="checkbox"]:checked {
}
@media print {
  #non-print{
    display: none !important;
  }
  #print{
    display: block !important;
  }
}
</style>