<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <h1 class="text-site-blue text-xl font-semibold">اضف إشعار لتنقلات الحج
                </h1>
                <button @click="modalVisible = true" class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center gap-2 my-8">
                    <PlusIcon />
                    <span class="font-bold">اضافة إشعار تنقل</span>
                </button>
                <hr class="my-2">
                <TableComponent class=" overflow-auto"
                :modalVisible="modalVisible"
                @closeModal="modalVisible = false"
                :deleteLink="deleteLink"
                :canDelete="true">
                    <template v-slot:header>
                        <tr>
                            <th scope="col">عنوان الإشعار</th>
                            <th scope="col">نص الإشعار</th>
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
                        <tr v-for="index in 5" >
                            <td>صورنا  في الكعبة</td>
                            <td>صور الحج رقم 1</td>
                            <td class="flex items-center justify-center gap-5">
                                    <button @click="modalVisible = true" class="flex items-center gap-2">
                                        <EditIcon />
                                        <span class="text-[#46814F]">تعديل</span>
                                    </button >
                                    <button @click="showDeleteModal(location.id)" class="flex items-center gap-2">
                                        <DeleteIcon />
                                        <span class="text-[#FF3F3F]">حذف</span>
                                    </button>
                                </td>
                        </tr>
                    </template>
                </TableComponent>
                <Dialog v-model:visible="modalVisible" modal closeIcon="!hidden" :closeOnEscape="true" class="bg-white rtl-d p-5 relative" :pt="{mask:'bg-[#00000042]',pcCloseButton:'!hidden !opacity-0'}" :style="{ width: '70%' }">
                    <template #container="{ closeCallback }">
                        <h1 class="text-center text-3xl font-bold mb-5 text-site-blue">إرسال إشعار تنقل</h1>
                        <div class="w-full pb-5 pt-10">
                            <p class="text-black font-semibold w-[50%] mb-3">عنوان الإشعار</p>
                            <input
                            name="" 
                            type="text" 
                            class="w-full relative border border-[#BDBDBD] p-2 rounded-xl"
                            >
                        </div>
                        <input
                        name="" 
                        type="text" 
                        class="w-full h-56 relative border border-[#BDBDBD] p-2 rounded-xl"
                        >

                        <div class="w-full flex justify-between text-2xl font-bold mt-10 px-10">
                        <button @click="switchTagsToText = true" class=" bg-site-blue text-white px-8 py-4 rounded-2xl">
                                تأكيد
                        </button>
                        <button @click="closeCallback" class="text-site-text-grey">
                            الغاء
                        </button>
                    </div>
                    </template> 
                </Dialog>
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
import { ref, onMounted, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import TableComponent from '../../components/Base/tableComponent.vue';
import { useGetRequest } from '../../composables/useRequest';
import PageLoader from '../../components/icon/PageLoader.vue';
import SearchComponent from '../../components/Base/SearchComponent.vue';
import PaginationComponent from '../../components/Base/PaginationComponent.vue';
import PlusIcon from '../../components/icon/PlusIcon.vue';
import Select from 'primevue/select';
import DeleteIcon from '../../components/icon/DeleteIcon.vue';
import EditIcon from '../../components/icon/EditIcon.vue';

const loadPage = ref(false)
const viewAll = ref(true)
const locations = ref(null)
const nextPage = ref(false)
const previousPage = ref(false)
const pages = ref(0)
const route = useRoute()
onMounted(async ()=>{
    if(route.params.id != 'all')
        viewAll.value = false
/*     const {Data, Error} = await useGetRequest('api/v1/location/')
    locations.value = Data.value.data.result
    nextPage.value = Data.value.data.next ? true : false
    previousPage.value = Data.value.data.previous ? true : false   
        pages.value = Data.value.data.count / 15 */
    loadPage.value = true
})

const trainStatuses = ref([
    {id: 2, name: 'غير متوفر'},
    {id: 1, name: 'متوفر'},
])
const trainStatusFilter = ref()
// watch filters values to send request when they change
watch(trainStatusFilter, async () => {
/*     const {Data} = await useGetRequest('api/v1/location/?department='+trainStatusFilter.value)
    locations.value = Data.value.data.result */
})
const searchResult = (result) => {
    locations.value = result
}
// pagination
const chnagePage = async (newPage) => {
    const {Data} = await useGetRequest('api/v1/location/?page='+newPage)
    locations.value = Data.value.data.result
    nextPage.value = Data.value.data.next ? true : false
    previousPage.value = Data.value.data.previous ? true : false   
        pages.value = Data.value.data.count / 15
}

const modalVisible = ref(false)

</script>