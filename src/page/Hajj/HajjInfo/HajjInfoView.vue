<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <h1 class="text-site-blue text-xl font-semibold">معلومات جميع الحجاج</h1>
                <div class="w-full relative">
                            <form>
                                <input @change="changeHajjFile($event.target.files[0])" ref="hajjFileinput" id="termsFileinput" type="file" style="display:none;"/>
                            </form>
                            <button @click="hajjFileinput.click()" class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center gap-2 my-8">
                                <DownloadIcon color="white" />
                                <span class="font-bold">إستيراد  الحجاج</span>
                            </button>
                            <p v-if="errorObj?.link_group" class="text-red-500 mt-1">{{ errorObj.link_group }}</p>

                </div>
                <p class=" text-site-text-grey font-medium my-5">*قم برفع ملف اكسيل لإستيراد معلومات حجاجك</p>
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
                            <th v-if="viewAll" scope="col">رقم حجز الوزراة</th>
                            <th scope="col">اسم الحاج</th>
                            <th scope="col">عمر الحاج</th>
                            <th v-if="viewAll" scope="col">خيمة 
                                منى</th>
                            <th v-if="viewAll" scope="col">مقعد
                                منى</th>
                            <th v-if="viewAll" scope="col">عرفات</th>
                            <th scope="col">رقم الباص</th>
                            <th scope="col">الجنس</th>
                            <th v-if="viewAll" scope="col">رقم المخيم</th>
                            <th scope="col">الجنسية</th>
                            <th v-if="viewAll" scope="col">رقم
                                الهوية</th>
                            <th scope="col">رقم الجوال </th>
                            <th v-if="viewAll" scope="col">المدينة</th>
                            <th v-if="!viewAll" scope="col">رقم
                                الباقة</th>
                            <th scope="col">العمليات</th>
                        </tr>
                    </template>
                    <template v-slot:body>
                        <tr v-for="(hajj,index) in hajjsInfo" :key="index">
                            <td v-if="viewAll">{{ hajj.package_number }}</td>
                            <td>{{ hajj.name }}</td>
                            <td>{{ hajj.age }}</td>
                            <td v-if="viewAll">{{ hajj.mona_tent_number }}</td>
                            <td v-if="viewAll">{{ hajj.mona_seat_number }}</td>
                            <td v-if="viewAll">{{ hajj.arafat_tent_number }}</td>
                            <td>{{ hajj.transport_number }}</td>
                            <td>{{ hajj.gender == 1 ? 'ذكر' : (hajj.gender == 2 ? 'انثى' : '') }}</td>
                            <td v-if="viewAll">{{ hajj.name_camp }}</td>
                            <td>{{ hajj.name_nationalitie }}</td>
                            <td v-if="viewAll">{{ hajj.id_number }}</td>
                            <td>{{ hajj.phone }}</td>
                            <td v-if="viewAll">{{ hajj.name_city }}</td>
                            <td v-if="!viewAll">{{ hajj.program }}</td>
                            <td class="">
                                <div class="flex items-center justify-center gap-2 border-0 relative w-[17rem]">
                                    <RouterLink :to="'/hajj-info-add/'+hajj.id" class="flex items-center gap-1">
                                        <EditIcon />
                                        <span class="text-[#46814F] text-base text-nowrap">تحديث رقم الجوال</span>
                                    </RouterLink >
                                    <button @click="showDeleteModal(1)" class="flex items-center gap-1 rounded-2xl bg-black bg-opacity-80 p-2">
                                        <span class="text-white text-nowrap">الغاء توزيع الخيمة</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </template>
                    <template v-slot:delete-modal-1>
                        <h1 class="text-center text-3xl font-bold mb-5">هل أنت متأكد أنك ترغب في إلغاء توزيع الخيمة  
                            للحاج ABDUL HAMEED MUHAMMAD SIDDIQ ؟                        </h1>
                        <p class="text-center mb-8">إلغاء توزيع الخيام سيعني عدم تخصيص مكان إقامة للحاج  في الوقت الحالي. يرجى التأكد من تقديم هذا القرار بعناية، حيث لا يمكن التراجع عن هذه العملية بعد تنفيذها.</p>
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
import EditIcon from '../../../components/icon/EditIcon.vue'
import PageLoader from '../../../components/icon/PageLoader.vue';
import SearchComponent from '../../../components/Base/SearchComponent.vue';
import PaginationComponent from '../../../components/Base/PaginationComponent.vue';
import DownloadIcon from '../../../components/icon/DownloadIcon.vue';
import { useGetRequest,usePostRequest } from '../../../composables/useRequest';
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
    if(route.params.id != 'all')  {
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
    programs.value = Data1.value.data.result
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