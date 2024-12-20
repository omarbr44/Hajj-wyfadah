<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <h1 class="text-site-blue text-xl font-semibold">جميع الرسائل</h1>
                <button @click="modalVisible = true" class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center gap-2 my-8">
                    <PlusIcon />
                    <span class="font-bold">ارسال رسالة</span>
                </button>
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
                            <th scope="col">اسم المرسل</th>
                            <th scope="col">محتوى الرسالة</th>
                            <th scope="col">تاريخ الإرسال</th>
                            <th scope="col">العمليات</th>
                        </tr>
                    </template>
                    <template v-slot:body>
                        <tr v-for="index in 5" :key="index">
                            <td>
                                Aliaa company
                            </td>
                            <td>
                                هنيئاً لكم حجاج البيت العتيق، القادمون من كل فجٍّ عميق. ندعوكم لمتابعة حساباتنا في منصات التواصل الاجتماعي تويتر و سناب وفيسبوك وانستقرام alkafhajj@ شركة عبدالله صالح الكاف لخدمات حجاج الداخل                            </td>
                            <td>
                                2/05/2024
                            </td>
                            <td class="">
                                    <RouterLink :to="'/hajjpage-messages-view'" class="flex items-center gap-1">
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
                 <Dialog v-model:visible="modalVisible" modal closeIcon="!hidden" :closeOnEscape="true" class="bg-white rtl-d p-5 relative" :pt="{mask:'bg-[#00000042]',pcCloseButton:'!hidden !opacity-0'}" :style="{ width: '70%' }">
                    <template #container="{ closeCallback }">
                        <h1 class="text-center text-3xl font-bold mb-5 text-site-blue">إرسال رسالة</h1>
                        <div class="w-1/2 my-3">
                            <p class="text-xl text-site-dark-blue font-bold mb-2">الرسالة</p>
                            <Select v-model="fromCountry" :options="[1,2]" optionLabel="name" 
                                        placeholder="إظهار تصنيفات الاستفسارات و الملاحظات" overlayClass="!bg-white rtl-d p-2" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                        :pt="{overlay:' shadow-xl'}">
                                        <template #value="slotProps">
                                            <span>إظهار تصنيفات الاستفسارات</span>
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
                            <textarea v-model="textareaValue" 
                                      class="text-black w-full min-h-56 bg-white border border-[#DADADA] rounded-md p-2 rules-section"
                            >
                            </textarea>
                        <div class="flex w-full justify-end my-3">
                            <p class=" text-[#DADADA]">عدد الاحرف في الرسالة (0)</p>
                        </div>
                        <div class="w-full flex justify-between text-2xl font-bold px-10">
                        <button @click="switchTagsToText = true" class=" bg-site-blue text-white px-8 py-4 rounded-2xl">
                                إرسال
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

const modalVisible = ref(false)

</script>

<style scoped>

</style>