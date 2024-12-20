<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <h1 class="text-site-blue text-xl font-semibold">الرسائل المرسلة</h1>
                <hr>
                <div class="flex items-center gap-5 mb-10">
                    <button  class="flex flex-col items-center gap-1">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0V2H17L11 11V18H7V11L1 2H0V0H18Z" fill="#5FC1CF"/>
                        </svg>
                        <p class="text-site-blue">صنف ب</p>
                    </button>
                    <div class=" w-[80%] relative">
                        <div class="relative w-5/6">
                            <h1 class="font-bold">محتوى الرسالة</h1>
                           <SearchComponent
                           type="textarea"
                           api="api/v1/location/?search="
                           @resultSearch="searchResult" />
                        </div>
                    </div> 
                </div>
                <TableComponent class=" overflow-auto"
                :deleteLink="deleteLink"
                :canDelete="true">
                    <template v-slot:header>
                        <tr>
                            <th scope="col">محتوى الرسالة</th>
                            <th scope="col">تاريخ الإرسال</th>
                            <th scope="col">حالة الرد</th>
                            <th scope="col">العمليات</th>
                        </tr>
                    </template>
                    <template v-slot:body>
                        <tr v-for="index in 5" :key="index">
                            <td>
                                هنيئاً لكم حجاج البيت العتيق، القادمون من كل فجٍّ عميق. ندعوكم لمتابعة حساباتنا في منصات التواصل الاجتماعي تويتر و سناب وفيسبوك وانستقرام alkafhajj@ شركة عبدالله صالح الكاف لخدمات حجاج الداخل                            </td>
                            <td>
                                2/05/2024
                            </td>
                            <td class="bg-green-500 bg-opacity-25 text-green-500">تم الرد</td>
                            <td class="">
                                    <RouterLink :to="'/hajjpage-recieved-messages-view'" class="flex items-center gap-1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.0686 11.636C2.8026 7.194 6.8836 4 11.9996 4C17.1156 4 21.1966 7.194 22.9316 11.636C23.0231 11.87 23.0231 12.13 22.9316 12.364C21.1966 16.806 17.1156 20 11.9996 20C6.8836 20 2.8026 16.806 1.0686 12.364C0.977133 12.13 0.977133 11.87 1.0686 11.636ZM11.9996 15C12.7953 15 13.5583 14.6839 14.1209 14.1213C14.6835 13.5587 14.9996 12.7956 14.9996 12C14.9996 11.2044 14.6835 10.4413 14.1209 9.87868C13.5583 9.31607 12.7953 9 11.9996 9C11.204 9 10.4409 9.31607 9.87828 9.87868C9.31567 10.4413 8.9996 11.2044 8.9996 12C8.9996 12.7956 9.31567 13.5587 9.87828 14.1213C10.4409 14.6839 11.204 15 11.9996 15Z" fill="#008093"/>
                                        </svg>
                                        <span class=" text-site-dark-blue font-semibold text-nowrap">عرض</span>
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
import TableComponent from '../../../components/Base/tableComponent.vue';
import PageLoader from '../../../components/icon/PageLoader.vue';
import SearchComponent from '../../../components/Base/SearchComponent.vue';
import PaginationComponent from '../../../components/Base/PaginationComponent.vue';
import { useGetRequest,usePostRequest } from '../../../composables/useRequest';
import { serialize } from 'object-to-formdata';
import PlusIcon from '../../../components/icon/PlusIcon.vue';
import Select from 'primevue/select';

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

</script>

<style scoped>

</style>