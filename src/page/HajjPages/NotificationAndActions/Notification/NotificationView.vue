<template>
    <div class="w-[80%] bg-[#f9f9f9] min-h-screen">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <h1 class="text-site-blue text-xl font-semibold">التنبيهات والإشعارات</h1>
                <hr>
                <div class="flex items-center gap-5 mb-10">
                    <button id="menu-activator" class="flex flex-col items-center gap-1">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0V2H17L11 11V18H7V11L1 2H0V0H18Z" fill="#5FC1CF"/>
                        </svg>
                        <p class="text-site-blue">صنف ب</p>
                    </button>
                    <v-menu activator="#menu-activator" :close-on-content-click="false">
                        <div class="bg-white shadow-md rounded-md">
                            <p class="text-site-blue font-bold rtl-d p-3">الموقع</p>
                            <div class="flex gap-10 items-center px-10 pt-1 mb-1 justify-end flex-wrap gap-y-5 w-[23rem]">
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">الكل</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">باقة (4) الخيام المطورة</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                                <div class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">باقة (٣) الخيام العزيزية</label>
                                    <input id="default-radio-1" type="radio" value="" v-model="trainStatusFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                            </div>
                            <hr>
                            <p class="text-site-blue font-bold rtl-d p-3">اسم الفرع</p>
                            <div class="flex gap-10 items-center px-10 pt-1 mb-1 justify-end flex-wrap gap-y-5 w-[23rem]">
                                <div v-for="(programm,index) in programs" :key="index" class="flex items-center">
                                    <label for="default-radio-1" class="mx-1 text-sm font-medium text-gray-900 dark:text-gray-300">{{ programm.name_ar }}</label>
                                    <input id="default-radio-1" type="radio" :value="programm.id" v-model="program" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </div>
                            </div>
                        </div>
                    </v-menu> 
                    <div class="w-[40%] relative">
                       <SearchComponent
                       api="api/v1/pilgrim/?search="
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
                            <th scope="col">نوع الإشعار</th>
                            <th scope="col">محتوى الإشعار</th>
                            <th scope="col">تاريخ الإرسال</th>
                            <th scope="col">العمليات</th>
                        </tr>
                    </template>
                    <template v-slot:body>
                        <tr v-for="index in 5" :key="index">
                            <td>
                                <div class="flex items-center gap-3">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.23064 6.89567C2.66797 8.45701 2.66797 10.9717 2.66797 15.9997C2.66797 21.0277 2.66797 23.5423 4.23064 25.1037C5.79197 26.6663 8.30664 26.6663 13.3346 26.6663H18.668C23.696 26.6663 26.2106 26.6663 27.772 25.1037C29.3346 23.5423 29.3346 21.0277 29.3346 15.9997C29.3346 10.9717 29.3346 8.45701 27.772 6.89567C26.2106 5.33301 23.696 5.33301 18.668 5.33301H13.3346C8.30664 5.33301 5.79197 5.33301 4.23064 6.89567ZM24.7693 10.0263C24.939 10.2301 25.0208 10.4928 24.9968 10.7568C24.9728 11.0209 24.8449 11.2646 24.6413 11.4343L21.7133 13.8743C20.5306 14.861 19.5733 15.6583 18.7266 16.2023C17.8466 16.769 16.9893 17.1263 16.0013 17.1263C15.0133 17.1263 14.156 16.7677 13.2746 16.2023C12.4293 15.6583 11.472 14.8597 10.2893 13.8757L7.3613 11.4357C7.15744 11.2659 7.02935 11.0222 7.00522 10.758C6.98109 10.4938 7.0629 10.2309 7.23264 10.027C7.40237 9.82314 7.64614 9.69506 7.91032 9.67093C8.1745 9.6468 8.43744 9.7286 8.6413 9.89834L11.5213 12.297C12.7653 13.333 13.628 14.0503 14.3586 14.5197C15.064 14.973 15.5426 15.1263 16.0026 15.1263C16.4626 15.1263 16.9413 14.9743 17.6466 14.5197C18.376 14.0503 19.24 13.333 20.484 12.297L23.3626 9.89701C23.5665 9.7275 23.8294 9.6459 24.0934 9.67015C24.3575 9.6944 24.5997 9.82253 24.7693 10.0263Z" fill="#008093"/>
                                    </svg>
                                    <p class=" text-site-dark-blue font-bold">رسالة</p>
                                </div>
                            </td>
                            <td>
                                نتشرف بإعلامكم بأنه قد حان وقت الاستعداد لرحلتكم المباركة إلى بيت الله الحرام في موسم الحج لهذا العام. نود أن نشكركم على اختياركم شركتنا لتنظيم هذه الرحلة الروحانية الهامة.
                            </td>
                            <td>
                                2/05/2024
                            </td>
                            <td class="">
                                    <RouterLink :to="'/hajjpage-notifications-distiribution'" class="flex items-center gap-1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.0686 11.636C2.8026 7.194 6.8836 4 11.9996 4C17.1156 4 21.1966 7.194 22.9316 11.636C23.0231 11.87 23.0231 12.13 22.9316 12.364C21.1966 16.806 17.1156 20 11.9996 20C6.8836 20 2.8026 16.806 1.0686 12.364C0.977133 12.13 0.977133 11.87 1.0686 11.636ZM11.9996 15C12.7953 15 13.5583 14.6839 14.1209 14.1213C14.6835 13.5587 14.9996 12.7956 14.9996 12C14.9996 11.2044 14.6835 10.4413 14.1209 9.87868C13.5583 9.31607 12.7953 9 11.9996 9C11.204 9 10.4409 9.31607 9.87828 9.87868C9.31567 10.4413 8.9996 11.2044 8.9996 12C8.9996 12.7956 9.31567 13.5587 9.87828 14.1213C10.4409 14.6839 11.204 15 11.9996 15Z" fill="#46814F"/>
                                        </svg>
                                        <span class="text-[#46814F] font-semibold text-nowrap">إظهار الكل</span>
                                    </RouterLink >
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
import { ref, onMounted, watch, computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import TableComponent from '../../../../components/Base/tableComponent.vue';
import PageLoader from '../../../../components/icon/PageLoader.vue';
import SearchComponent from '../../../../components/Base/SearchComponent.vue';
import PaginationComponent from '../../../../components/Base/PaginationComponent.vue';
import { useGetRequest,usePostRequest } from '../../../../composables/useRequest';
import { serialize } from 'object-to-formdata';

const loadPage = ref(false)
const viewAll = ref(true)

const hajjsInfo = ref(null)
const nextPage = ref(false)
const previousPage = ref(false)
const pages = ref(0)
const hajjFileinput = ref(null)
const route = useRoute()
const routeParams = computed(()=> route.params.id)
onMounted(async ()=>{
/*     if(route.params.id != 'all')  {
        viewAll.value = false
        const {Data, Error} = await useGetRequest('api/v1/group/'+route.params.id)
        hajjsInfo.value = Data.value.data.pilgrims_details
        nextPage.value = Data.value.data.next ? true : false
        previousPage.value = Data.value.data.previous ? true : false   
        pages.value = Data.value.data.count / 15   
    }
    else {
        const {Data, Error} = await useGetRequest('api/v1/pilgrim/')
        hajjsInfo.value = Data.value.data.result
        nextPage.value = Data.value.data.next ? true : false
        previousPage.value = Data.value.data.previous ? true : false   
        pages.value = Data.value.data.count / 15 
        pages.value = Data.value.data.count / 15  
    }
    const {Data:Data1} = await useGetRequest('api/v1/program/')
    programs.value = Data1.value.data.result */
    loadPage.value = true
})
watch(routeParams,()=>{
    if(routeParams.value != 'all')
        viewAll.value = false
    else
        viewAll.value = true
})

const programs = ref(null)
const program = ref(null)
// watch filters values to send request when they change
watch(program, async () => {
    const {Data} = await useGetRequest('api/v1/pilgrim/?program='+program.value)
    hajjsInfo.value = Data.value.data.result
})
const errorObj = ref()
const changeHajjFile = async (file) => {
    loadPage.value = false
    const formData = serialize({'file_info_pilgrims':file})
    const {Data, Error} = await usePostRequest('api/v1/pilgrim_import/', formData)
    console.log(Error.value)
    errorObj.value = Error.value.errors
    loadPage.value = true
}

const searchResult = (result) => {
    hajjsInfo.value = result
}
// pagination
const chnagePage = async (newPage) => {
    const {Data} = await useGetRequest('api/v1/pilgrim/?page='+newPage)
    hajjsInfo.value = Data.value.data.result
    nextPage.value = Data.value.data.next ? true : false
    previousPage.value = Data.value.data.previous ? true : false   
    pages.value = Data.value.data.count / 15
}
const deleteLink = ref(null)
const showDeleteModal = (id) => {
    modalVisible.value = true
    deleteLink.value = 'api/v1/pilgrim/'+id+'/'
}
const modalVisible = ref(false)

</script>

<style scoped>

</style>