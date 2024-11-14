<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <h1 class="text-site-blue text-xl font-semibold">جدول الرسائل الالية
                </h1>
                <RouterLink to="/communication-schedule-add" class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center gap-2 my-8">
                    <PlusIcon />
                    <span class="font-bold">جدولة رسالة جديدة</span>
                </RouterLink>
                <hr>
                <TableComponent class=" overflow-auto"
                :modalVisible="modalVisible"
                @closeModal="modalVisible = false"
                :deleteLink="deleteLink"
                :canDelete="true">
                    <template v-slot:header>
                        <tr>
                            <th scope="col">التاريخ</th>
                            <th scope="col">الوقت</th>
                            <th scope="col">عنوان الرسالة المجدولة</th>
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
                            <td>2023-05-28</td>
                            <td>10:00 AM</td>
                            <td>توجيهات يوم عرفة</td>
                            <td class="flex items-center justify-center gap-5">
                                <RouterLink to="/communication-schedule-edit/1" class="flex items-center gap-2">
                                    <EditIcon />
                                    <span class="text-[#46814F]">تعديل</span>
                                </RouterLink  >
                                <button @click="showDeleteModal(1)" class="flex items-center gap-2">
                                    <DeleteIcon />
                                    <span class="text-[#FF3F3F]">حذف</span>
                                </button>
                            </td>   
                        </tr>
                    </template>
                </TableComponent>
                <PaginationComponent
                 class="mt-5"
                 :next="nextPage"
                 :previous="previousPage"
                 @changePage="chnagePage" />
                 <hr>
                 <h1 class="text-site-blue text-xl font-semibold mt-4">الرد الآلى لرسائل الحجاج</h1>
                 <div class="p-4">
                    <div class="flex gap-2 items-center justify-center w-[30%]">
                        <p class="font-semibold text-[#008093]">تفعيل الرد الآلى للاستفسارات</p>
                        <div class="checkbox-wrapper-6">
                            <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                            <label class="tgl-btn" for="cb1-6" />
                        </div>
                    </div>
                    <h1 class="text-site-blue text-lg font-semibold my-4">الرد الآلى لرسائل الحجاج</h1>
                    <textarea
                        class="rules-section w-full bg-white border border-[#BDBDBD] py-2 px-5 rounded-3xl h-56"
                        placeholder="ادخل محتوى الرسالة  "
                        v-model="searchFilter"
                        >

                    </textarea>
                    <div class="flex items-center justify-end">
                        <button  class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center my-8">
                            <span class="font-bold text-xl px-8 py-1">حفظ</span>
                        </button>
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
import { ref, onMounted, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import TableComponent from '../../../components/Base/tableComponent.vue';
import { useGetRequest } from '../../../composables/useRequest';
import PageLoader from '../../../components/icon/PageLoader.vue';
import PaginationComponent from '../../../components/Base/PaginationComponent.vue';
import PlusIcon from '../../../components/icon/PlusIcon.vue';
import EditIcon from '../../../components/icon/EditIcon.vue'
import DeleteIcon from '../../../components/icon/DeleteIcon.vue'

const loadPage = ref(false)
const viewAll = ref(true)
const locations = ref(null)
const nextPage = ref(false)
const previousPage = ref(false)
const route = useRoute()
onMounted(async ()=>{
    if(route.params.id != 'all')
        viewAll.value = false
/*     const {Data, Error} = await useGetRequest('api/v1/location/')
    locations.value = Data.value.data.result
    nextPage.value = Data.value.data.next ? true : false
    previousPage.value = Data.value.data.previous ? true : false */
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
}

const modalVisible = ref(false)

</script>