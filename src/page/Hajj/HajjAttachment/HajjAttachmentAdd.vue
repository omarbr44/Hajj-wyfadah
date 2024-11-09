<template>
    <div class="w-[80%] bg-[#f9f9f9]" >
        <div v-if="loadPage">
            <div class="rtl-d px-10 pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">إضافة مرفق للحاج</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-4 gap-y-10">
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اسم الحاج<span class="text-red-500">*</span></p>
                        <Select v-model="departmentObj" :options="[{name:'خالد عبد الله'},{name:'خالد عبد الله'},{name:'خالد عبد الله'},{name:'خالد عبد الله'},]" optionLabel="name_ar" 
                                    placeholder="يرجى اختيار اسم الحاج من القائمة " overlayClass="!bg-white rtl-d p-2" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
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
                                        <div class="mx-5 my-5">
                                            <SearchComponent
                                            api=""
                                            @resultSearch="searchResult" />
                                        </div>
                                    </template>
                        </Select>
                        <p v-if="requestConditions?.error?.name" class="text-red-500 mt-1">{{ requestConditions.error.name }}</p>
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">عنوان المرفق<span class="text-red-500">*</span></p>
                        <input 
                        v-model="employeeObj.job_title"
                        name="emloyee-title" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال : صورة الجواز او الصورة الشخصية ">
                        <p v-if="requestConditions?.error?.job_title" class="text-red-500 mt-1">{{ requestConditions.error.job_title }}</p>
                    </div>
                    <div class="flex justify-end w-full" >
                        <div class="w-full">
                            <p class="text-black font-semibold w-[50%] mb-3">مرفق الحاج<span class="text-red-500">*</span></p>
                            <FileInputComponent
                             @changeFile="changeFile" />
                        </div>
                    </div>
                    <div class="w-full flex items-center justify-between my-10 text-lg font-bold">
                        <button @click="addEmployee" class=" bg-site-blue text-white py-3 px-10 rounded-lg">
                            <span v-if="!requestConditions.loading">
                                إضافة 
                            </span>
                            <LoaderIcon v-else />
                        </button>
                        <RouterLink to="/company-employee" class="text-red-700 py-4 px-8 ">
                            إلغاء
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class=" flex justify-center mt-52">
            <PageLoader />
        </div>
    </div>
</template>

<script setup>
import FileInputComponent from '../../../components/Base/FileInputComponent.vue';
import Select from 'primevue/select';
import { onMounted, ref } from 'vue';
import { useUserStore } from '../../../stores/user';
import LoaderIcon from '../../../components/icon/loaderIcon.vue';
import { useGetRequest, usePatchRequest, usePostRequest } from '../../../composables/useRequest';
import { useRoute, useRouter } from 'vue-router';
import PageLoader from '../../../components/icon/PageLoader.vue';
import { serialize } from 'object-to-formdata';
import SearchComponent from '../../../components/Base/SearchComponent.vue';

const router = useRouter()
const route = useRoute()
const user = useUserStore()
const loadPage = ref(false)
const employeeObj = ref({
    subscriber_company: user.userCompantId,
    name: null,
    job_title: null,
    phone: null,
    email: null,
    image: null,
    id_number: null,
    salary: null,
    start_data: new Date(),
    end_data: new Date(),
    address: null,
    status: 1,
})
const requestConditions = ref({
    data: null,
    error: null,
    loading: false,
})
const departments = ref(null)
const departmentObj = ref(null)
onMounted(async ()=>{
    /* const {Data, Error} = await useGetRequest('api/v1/department_company')
    departments.value = Data.value.data.result
    if(route.params.id != 'add') {
        const {Data, Error} = await useGetRequest('api/v1/company_employe/'+route.params.id)
        employeeObj.value = Data.value.data
        employeeObj.value.status = statuses.value.filter( el => el.id == employeeObj.value.status )[0] 
        loadPage.value = true
    }
    else {
        loadPage.value = true
    } */
    loadPage.value = true

})
const addEmployee = async () => {
    requestConditions.value.loading = true
    // turn dates to correct format
    employeeObj.value.start_data = moment(employeeObj.value.start_data).format("YYYY-MM-DD")
    employeeObj.value.end_data = moment(employeeObj.value.end_data).format("YYYY-MM-DD")

    employeeObj.value.status = employeeObj.value.status?.id

    // If there is already file stored as url then we need to convert it to file
    if(typeof employeeObj.value.image == 'string') {
        // make a new parser
        const parser = new DOMParser();
        // convert text into file
        employeeObj.value.image = parser.parseFromString(employeeObj.value.image,'image/svg+xml');
    }
    const formData = serialize(employeeObj.value)
    if(route.params.id == 'add') {
        const { Data, Error } = await usePostRequest('api/v1/company_employe/',formData)
        requestConditions.value.error = Error?.value?.errors
        requestConditions.value.data = Data.value
    }
    else {
        const { Data, Error } = await usePatchRequest('api/v1/company_employe/'+route.params.id+'/',formData)
        requestConditions.value.error = Error?.value?.errors
        requestConditions.value.data = Data.value
    }
    if(requestConditions.value.error != null) {
        requestConditions.value.loading = false
    }
    else if(departmentObj.value) {
        addToDepartment(requestConditions.value.data.id)
    }
    else {
        router.push('/company-employee')
    }
}
const changeFile = (file) => {
    employeeObj.value.image = file
}
</script>

<style scoped>

</style>