<template>
<div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <RouterLink to="/hajjpage-attachment-add" class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center gap-2 my-8">
                    <PlusIcon />    
                    <span class="font-bold">إضافة مرفق</span>
                </RouterLink>
                <div class="flex items-center gap-5 mb-10">
                    <div class="w-[40%] relative">
                       <SearchComponent
                       api="api/v1/location/?search="
                       @resultSearch="searchResult" />
                    </div> 
                </div>
                <TableComponent class=" overflow-auto"
                :modalVisible="modalVisible"
                @closeModal="modalVisible = false"
                deleteLink=""
                :canDelete="true">
                    <template v-slot:header>
                        <tr>
                            <th scope="col">عنوان المرفق</th>
                            <th scope="col">المرفق</th>
                            <th scope="col">العمليات</th>
                        </tr>
                    </template>
                    <template v-slot:body>
                        <!-- <tr v-for="(location,index) in locations" :key="index">
                            <th scope="row">{{ location.name_ar }}</th>
                            <td>{{ location.capacity }}</td>
                            <td>{{ location.number_management }}</td>
                            <td></td>
                            <td>{{ location.number_man }}</td>
                            <td>{{ location.number_women }}</td>
                            <td 
                            class="font-bold"
                            :class="location.have_train == true ? 'text-green-700 bg-green-300' : 'text-red-700 bg-red-300'">
                                <span v-if="location.have_train">متواجد</span>
                                <span v-else>غير متواجد</span>
                            </td>
                            <td class="flex items-center justify-center gap-5">
                                <RouterLink :to="'company-location-add/'+location.id" class="flex items-center gap-2">
                                    <EditIcon />
                                    <span class="text-[#46814F]">تعديل</span>
                                </RouterLink >
                                <button @click="showDeleteModal(location.id)" class="flex items-center gap-2">
                                    <DeleteIcon />
                                    <span class="text-[#FF3F3F]">حذف</span>
                                </button>
                            </td>
                        </tr> -->
                        <tr v-for="(attach,index) in hajjAttachments" :key="index">
                            <td>{{ attach.type }}</td>
                            <td class="w-1/2">
                                <div class="flex flex-col items-center gap-6">
                                    <div class="flex justify-between items-center w-full">
                                        <p @click="showAttach(index)" class="text-site-blue text-lg w-1/2 text-left cursor-pointer" >إظهار المرفق</p>
                                        <button @click="showAttach(index)">
                                            <ArrowUpIcon v-show="!attach.attachShown" />
                                            <ArrowDownIcon v-show="attach.attachShown" />
                                        </button>
                                    </div>
                                    <div :id="'attach'+index" class="h-0 overflow-hidden attachment" >
                                        <svg width="311" height="166" viewBox="0 0 311 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="311" height="166" rx="15" fill="#D2E3E8"/>
                                            <path d="M132.062 61.1562C132.062 67.8281 134.874 74.2267 139.879 78.9444C144.884 83.6621 151.672 86.3125 158.75 86.3125C165.828 86.3125 172.616 83.6621 177.621 78.9444C182.626 74.2267 185.438 67.8281 185.438 61.1562C185.438 54.4844 182.626 48.0858 177.621 43.3681C172.616 38.6504 165.828 36 158.75 36C151.672 36 144.884 38.6504 139.879 43.3681C134.874 48.0858 132.062 54.4844 132.062 61.1562ZM196.875 129.438H116.812C115.801 129.438 114.832 129.059 114.117 128.385C113.402 127.711 113 126.797 113 125.844V115.062C113 110.297 115.008 105.726 118.583 102.357C122.158 98.9869 127.007 97.0938 132.062 97.0938H185.438C190.493 97.0938 195.342 98.9869 198.917 102.357C202.492 105.726 204.5 110.297 204.5 115.062V125.844C204.5 126.797 204.098 127.711 203.383 128.385C202.668 129.059 201.699 129.438 200.688 129.438H196.875Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </td>
                            <td class="flex items-center justify-center gap-5">
                                <RouterLink to="/hajjpage-attachment-add" class="flex items-center gap-2">
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
                        <h1 class="text-center text-3xl font-bold mb-5">هل أنت متأكد أنك ترغب في حذف المرفق المحدد؟
                                      </h1>
                        <p class="text-center mb-8">سيتم إزالة المرفق التابع للحاج المحدد من النظام، ولا يمكن استعادة هذا المرفق بعد الحذف.</p>
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
import { ref, onMounted } from 'vue';
import TableComponent from '../../../components/Base/tableComponent.vue';
import { useGetRequest } from '../../../composables/useRequest';
import PageLoader from '../../../components/icon/PageLoader.vue';
import SearchComponent from '../../../components/Base/SearchComponent.vue';
import PaginationComponent from '../../../components/Base/PaginationComponent.vue';
import PlusIcon from '../../../components/icon/PlusIcon.vue';
import EditIcon from '../../../components/icon/EditIcon.vue'
import ArrowUpIcon from '../../../components/icon/ArrowUpIcon.vue'
import DeleteIcon from '../../../components/icon/DeleteIcon.vue'
import ArrowDownIcon from '../../../components/icon/ArrowDownIcon.vue';
import { RouterLink } from 'vue-router';

const loadPage = ref(false)
const locations = ref(null)
const nextPage = ref(false)
const previousPage = ref(false)
const pages = ref(0)
const hajjAttachments = ref(
    [
    {
    name: 'khalid saad abduallah',
    type: 'personal image',
    attachShown: false,
    },
    {
    name: 'khalid saad abduallah',
    type: 'personal image',
    attachShown: false,
    },
    {
    name: 'khalid saad abduallah',
    type: 'personal image',
    attachShown: false,
    },
    {
    name: 'khalid saad abduallah',
    type: 'personal image',
    attachShown: false,
    },
]
)

onMounted(async ()=>{
/*     const {Data, Error} = await useGetRequest('api/v1/location/')
    locations.value = Data.value.data.result
    nextPage.value = Data.value.data.next ? true : false
    previousPage.value = Data.value.data.previous ? true : false   
        pages.value = Data.value.data.count / 15 */
    loadPage.value = true
})

const searchResult = (result) => {
    locations.value = result
}
// pagination
/* const chnagePage = async (newPage) => {
    const {Data} = await useGetRequest('api/v1/location/?page='+newPage)
    locations.value = Data.value.data.result
    nextPage.value = Data.value.data.next ? true : false
    previousPage.value = Data.value.data.previous ? true : false   
        pages.value = Data.value.data.count / 15
} */
const modalVisible = ref(false)
const deleteLink = ref(null)
const showDeleteModal = (id) => {
    modalVisible.value = true
    deleteLink.value = 'api/v1/location/'+id+'/'
}

const showAttach = (index) => {
    hajjAttachments.value[index].attachShown = !hajjAttachments.value[index].attachShown
    const attach = document.querySelector('#attach'+index)
    if(attach.classList.contains('!h-48'))
        attach.classList.remove('!h-48')
    else
        attach.classList.add('!h-48')
}
</script>

<style scoped>
.attachment {
    transition-property: height;
    transition-duration: 0.2s;
}
</style>