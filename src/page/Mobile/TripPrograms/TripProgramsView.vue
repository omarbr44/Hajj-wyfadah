<template>
    <div class="w-[80%] bg-[#f9f9f9]">
            <div v-if="loadPage">
                <div class="rtl-d px-5 pt-28">
                    <h1 class="text-site-blue text-xl font-semibold mb-10">برامج الرحلة</h1>
                    <RouterLink to="mobile-tripprograms-add/add" class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center gap-2 my-8">
                        <PlusIcon />
                        <span class="font-bold">أضف برنامج جديدة</span>
                    </RouterLink>
                    <TableComponent class=" overflow-auto"
                    :modalVisible="modalVisible"
                    @closeModal="modalVisible = false"
                    deleteLink=""
                    :canDelete="true">
                        <template v-slot:header>
                            <tr>
                                <th scope="col">اسم البرنامج</th>
                                <th scope="col">تفاصيل البرنامج</th>
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
                                <td>البرنامج الاول</td>
                                <td>اور وقت کے تقدس کو برقرار رکھنے کے لیے، ہم عازمین حج سے</td>
                                <td class="flex items-center justify-center gap-5">
                                    <RouterLink :to="'mobile-tripprograms-add/1'" class="flex items-center gap-2">
                                        <EditIcon />
                                        <span class="text-[#46814F]">تعديل</span>
                                    </RouterLink >
                                    <button @click="showDeleteModal(location.id)" class="flex items-center gap-2">
                                        <DeleteIcon />
                                        <span class="text-[#FF3F3F]">حذف</span>
                                    </button>
                                </td>
                            </tr>
                        </template>
                        <template v-slot:delete-modal-1>
                            <h1 class="text-center text-3xl font-bold mb-5">هل أنت متأكد أنك ترغب في إلغاء توزيع الباص  
                                المجموعة  28858326  ؟                        </h1>
                            <p class="text-center mb-8">إلغاء توزيع الباص سيعني عدم تخصيص وسيلة نقل للمجموعة في الوقت الحالي. يرجى التأكد من تقديم هذا القرار بعناية، حيث لا يمكن التراجع عن هذه العملية بعد تنفيذها.</p>
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
    import { ref, onMounted, watch } from 'vue';
    import PlusIcon from '../../../components/icon/PlusIcon.vue';
    import EditIcon from '../../../components/icon/EditIcon.vue'
    import DeleteIcon from '../../../components/icon/DeleteIcon.vue'
    import { RouterLink } from 'vue-router';
    import TableComponent from '../../../components/Base/tableComponent.vue';
    import { useGetRequest } from '../../../composables/useRequest';
    import PageLoader from '../../../components/icon/PageLoader.vue';
    import SearchComponent from '../../../components/Base/SearchComponent.vue';
    import PaginationComponent from '../../../components/Base/PaginationComponent.vue';
    
    const loadPage = ref(false)
    const locations = ref(null)
    const nextPage = ref(false)
    const previousPage = ref(false)
    const pages = ref(0)
    
    onMounted(async ()=>{
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
    /* const chnagePage = async (newPage) => {
        const {Data} = await useGetRequest('api/v1/location/?page='+newPage)
        locations.value = Data.value.data.result
        nextPage.value = Data.value.data.next ? true : false
        previousPage.value = Data.value.data.previous ? true : false   
            pages.value = Data.value.data.count / 15
    } */
    const modalVisible = ref(false)
    
    </script>
    
    <style scoped>
    
    </style>