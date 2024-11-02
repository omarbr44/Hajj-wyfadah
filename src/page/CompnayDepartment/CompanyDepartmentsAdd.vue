<template>
    <div>
        <NavBarComponent />
        <div v-if="loadPage" class="flex justify-stretch">
            <div class="w-[80%] rtl-d px-10 bg-[#f9f9f9] pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">معلومات الإدارة</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap">
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اسم الإدارة <span class="text-red-500">*</span></p>
                        <input
                        v-model="departmentObj.name_ar"
                        name="department-name" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال: نقل السيارات">
                        <p v-if="requestConditions?.error?.name_ar" class="text-red-500 mt-1">{{ requestConditions.error.name_ar }}</p>
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اسم مدير الإدارة <span class="text-[#DADADA]">( اختياري )</span></p>
                        <Select v-model="departmentObj.manager" :options="employees" optionLabel="name" 
                                    placeholder="" overlayClass="!bg-white rtl-d p-2" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                    :pt="{overlay:' shadow-xl'}">
                                    <template #value="slotProps">
                                        <span v-if="slotProps.value">{{ slotProps.value.name }}</span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="flex items-center gap-3 mb-3 cursor-pointer py-1 hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                            <div>{{ slotProps.option.name }}</div>
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
                </div>
                <h1 class="text-xl font-bold text-site-blue my-5">معلومات مدير الإدارة <span class="text-[#DADADA]">( اختياري )</span></h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl">
                    <button @click="toggleSection" class="flex items-center gap-2 mb-5">
                        <ArrowUpIcon v-show="sectioIsHide" />
                        <span v-show="sectioIsHide" class="text-site-text-grey">إظهارالمعلومات</span>
                        <ArrowDownIcon v-show="!sectioIsHide" />
                        <span v-show="!sectioIsHide" class="text-site-text-grey">إخفاءالمعلومات</span>
                    </button>
                    <div ref="hideSection" class="h-0 flex flex-wrap gap-4 gap-y-10 w-full overflow-hidden">
                        <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اسم الموظف <span class="text-red-500">*</span></p>
                        <input 
                        v-model="employeeObj.name"
                        name="emloyee-name" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال: خالد عبد الله">
                        <p v-if="requestConditions2?.error?.name" class="text-red-500 mt-1">{{ requestConditions2.error.name }}</p>
                        </div>
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3">المسمى الوظيفي<span class="text-red-500">*</span></p>
                            <input 
                            v-model="employeeObj.job_title"
                            name="emloyee-title" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="مثال: مدير عام">
                            <p v-if="requestConditions2?.error?.job_title" class="text-red-500 mt-1">{{ requestConditions2.error.job_title }}</p>
                        </div>
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3"> رقم الجوال <span class="text-red-500">*</span></p>
                            <input 
                            v-model="employeeObj.phone"
                            name="department-phone" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="مثال: 509873476">
                            <p v-if="requestConditions2?.error?.phone" class="text-red-500 mt-1">{{ requestConditions2.error.job_title }}</p>
                        </div>
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3">البريد الإلكتروني <span class="text-red-500">*</span></p>
                            <input 
                            v-model="employeeObj.email"
                            name="department-email" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="مثال: mail@gmail.com">
                            <p v-if="requestConditions2?.error?.email" class="text-red-500 mt-1">{{ requestConditions2.error.job_title }}</p>
                        </div>
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3">رقم الهوية  <span class="text-red-500">*</span></p>
                            <input 
                            v-model="employeeObj.id_number"
                            name="department-id" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="مثال: 1090875684">
                            <p v-if="requestConditions2?.error?.id_number" class="text-red-500 mt-1">{{ requestConditions2.error.job_title }}</p>
                        </div>
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3">الراتب <span class="text-[#DADADA]">( اختياري )</span></p>
                            <input 
                            v-model="employeeObj.salary"
                            name="salary" 
                            type="number" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="مثال: 1090875684">
                            <p v-if="requestConditions2?.error?.salary" class="text-red-500 mt-1">{{ requestConditions2.error.job_title }}</p>
                        </div>
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3">تاريخ البدء <span class="text-[#DADADA]">( اختياري )</span></p>
                            <VueDatePicker v-model="employeeObj.start_data" format="MM/dd/yyyy" :enable-time-picker="false" auto-apply></VueDatePicker>
                            <p v-if="requestConditions2?.error?.start_data" class="text-red-500 mt-1">{{ requestConditions2.error.job_title }}</p>
                        </div>
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3">تاريخ الانتهاء <span class="text-[#DADADA]">( اختياري )</span></p>
                            <VueDatePicker v-model="employeeObj.end_data" format="MM/dd/yyyy" :enable-time-picker="false" auto-apply></VueDatePicker>
                            <p v-if="requestConditions2?.error?.end_data" class="text-red-500 mt-1">{{ requestConditions2.error.job_title }}</p>
                        </div>
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3">العنوان <span class="text-[#DADADA]">( اختياري )</span></p>
                            <input 
                            v-model="employeeObj.address"
                            name="address" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="مثال : رقم المبنى (8782)، نهاوند، الواحة">
                            <p v-if="requestConditions2?.error?.address" class="text-red-500 mt-1">{{ requestConditions2.error.job_title }}</p>
                        </div>
                        <div class="flex gap-2 items-center w-[48%]">
                        <p class="text-black font-semibold w-[50%]">صورة الموظف <span class="text-red-500">*</span></p>
                        <FileInputComponent
                         @changeFile="changeFile" />
                        </div>
                    </div>
                </div>
                <div class="mt-5">
                    <h1 class="text-xl font-bold text-site-blue mb-5">الموظفين التابعين للإدارة الجديدة  ( اختياري ) </h1>
                    <FileInputComponent
                     />
                    <div class="flex items-center justify-between mt-2">
                        <p class="text-site-blue text-sm">- ارفع ملف بصيغة Excel يتضمن بيانات جميع الموظفين التابعين للإدارة الجديدة</p>
                        <a href="" download class="flex gap-3">
                            <p class=" text-site-blue">تنزيل ملف اكسيل للتعبئة</p>
                            <DownloadIcon />
                        </a>
                    </div>
                </div>
                <div class="flex items-center justify-between my-10 text-lg font-bold">
                    <button @click="addDepartment" class=" bg-site-blue text-white py-3 px-10 rounded-lg">
                        <span v-if="!requestConditions.loading">
                            إضافة 
                        </span>
                        <LoaderIcon v-else />
                    </button>
                    <RouterLink to="/company-departments" class="text-red-700 py-4 px-8 ">
                        إلغاء
                    </RouterLink>
                </div>
            </div>
            <SideBarComponent />
        </div>
        <div v-else class=" flex justify-center mt-52">
            <PageLoader />
        </div>
    </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import NavBarComponent from '../../components/Company/NavBarComponent.vue';
import SideBarComponent from '../../components/SideBarComponent.vue';
import ArrowUpIcon from '../../components/icon/ArrowUpIcon.vue';
import ArrowDownIcon from '../../components/icon/ArrowDownIcon.vue';
import DownloadIcon from '../../components/icon/DownloadIcon.vue';
import FileInputComponent from '../../components/Base/FileInputComponent.vue';
import { useGetRequest, usePatchRequest, usePostRequest } from '../../composables/useRequest';
import { useRoute, useRouter } from 'vue-router';
import PageLoader from '../../components/icon/PageLoader.vue';
import { useUserStore } from '../../stores/user';
import Select from 'primevue/select';
import LoaderIcon from '../../components/icon/loaderIcon.vue';
import moment from 'moment';
import { serialize } from 'object-to-formdata';

const router = useRouter()
const route = useRoute()
const user = useUserStore()
const loadPage = ref(false)
const employees = ref(null)
const departmentObj = ref({
    subscriber_company: user.userCompantId,
    company_employe: [],
    manager: null,
    name_ar: null,
    name_en: null,
})
const employeeObj = ref({
    subscriber_company: user.userCompantId,
    name: null,
    job_title: null,
    phone: null,
    email: null,
    id_number: null,
    salary: null,
    start_data: new Date(),
    end_data: new Date(),
    image: null,
    address: null,
    status: 1,
})
const requestConditions = ref({
    data: null,
    error: null,
    loading: false,
})
const requestConditions2 = ref({
    data: null,
    error: null,
    loading: false,
})

onMounted(async ()=>{
    const {Data, Error} = await useGetRequest('api/v1/company_employe')
    employees.value = Data.value.data.result
    if(route.params.id != 'add') {
        const {Data, Error} = await useGetRequest('api/v1/department_company/'+route.params.id)
        departmentObj.value = Data.value.data
        // get manager object by id so it work with Select element
        departmentObj.value.manager = employees.value.filter( el => el.id == departmentObj.value.manager )[0] 
        loadPage.value = true
    }
    else {
        loadPage.value = true
    }
})
const addDepartment = async () => {
    requestConditions2.value.error = null
    requestConditions.value.loading = true
    departmentObj.value.manager = departmentObj.value?.manager?.id
    // check if manager is selected from dropdown or created from scratch 
    if(departmentObj.value.manager)
        departmentObj.value.company_employe.push(departmentObj.value.manager)
    else if(employeeObj.value.name) {
       await addEmployee()
    }
    if(requestConditions2.value.error == null) {
        if(route.params.id == 'add') {
            const { Data, Error } = await usePostRequest('api/v1/department_company/',departmentObj.value)
            requestConditions.value.error = Error?.value?.errors
        }
        else {
            const { Data, Error } = await usePatchRequest('api/v1/department_company/'+route.params.id+'/',departmentObj.value)
            requestConditions.value.error = Error?.value?.errors
        }
        requestConditions.value.loading = false
        if(requestConditions.value.error == null) {
            router.push('/company-departments')
        } 
    }
}
const addEmployee = async () => {
    employeeObj.value.start_data = moment(employeeObj.value.start_data).format("YYYY-MM-DD")
    employeeObj.value.end_data = moment(employeeObj.value.end_data).format("YYYY-MM-DD")
    const formData = serialize(employeeObj.value)
    const { Data, Error } = await usePostRequest('api/v1/company_employe/',formData)
    requestConditions2.value.error = Error?.value?.errors
    if(requestConditions2.value.error == null) {
        // assign created employee to manager and add to depatment employee
        departmentObj.value.manager = Data.value.id
        departmentObj.value.company_employe.push(departmentObj.value.manager)
    }
    else {
        requestConditions.value.loading = false
    }
}
const changeFile = (file) => {
    employeeObj.value.image = file
}
const hideSection = ref(null)
const sectioIsHide = ref(true)
const toggleSection = () => {
    if(hideSection.value.classList.contains('h-0')) {
        hideSection.value.classList.add('h-auto')
        hideSection.value.classList.remove('h-0')
        sectioIsHide.value = false
    }
    else {
        hideSection.value.classList.add('h-0')
        hideSection.value.classList.remove('h-auto')
        sectioIsHide.value = true
    }
}
</script>

<style>
.dp__input {
    background: #f9f9f9 !important;
}
</style>