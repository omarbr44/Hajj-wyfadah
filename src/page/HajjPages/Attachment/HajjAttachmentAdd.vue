<template>
    <div class="w-[80%] bg-[#f9f9f9]" >
        <div v-if="loadPage">
            <div class="rtl-d px-10 pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">إضافة مرفق</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-4 gap-y-10">
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
                            <p class="text-black font-semibold w-[50%] mb-3">المرفق<span class="text-red-500">*</span></p>
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