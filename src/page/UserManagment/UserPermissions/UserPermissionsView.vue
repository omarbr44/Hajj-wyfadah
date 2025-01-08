<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <h1 class="text-site-blue text-xl font-semibold mb-10">إدارة صلاحيات المستخدمين</h1>
                <RouterLink to="userpermissions-add/add" class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center gap-2 my-8">
                    <PlusIcon />
                    <span class="font-bold">إضافة نوع مستخدم</span>
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
                :deleteLink="deleteLink"
                :canDelete="true">
                    <template v-slot:header>
                        <tr>
                            <th scope="col">نوع المستخدم</th>
                            <th scope="col">الوصف</th>
                            <th scope="col">العمليات</th>
                        </tr>
                    </template>
                    <template v-slot:body>
                        <tr v-for="index in 5" >
                            <td>superadmin</td>
                            <td>Can control in every thing</td>
                            <td class="flex items-center justify-center gap-5">
                                <RouterLink :to="'userpermissions-add/1'" class="flex items-center gap-2">
                                    <EditIcon />
                                    <span class="text-[#46814F]">تعديل</span>
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
import { ref, onMounted, watch } from 'vue';
import { RouterLink } from 'vue-router';
import TableComponent from '../../../components/Base/tableComponent.vue';
import EditIcon from '../../../components/icon/EditIcon.vue'
import { useGetRequest } from '../../../composables/useRequest';
import PageLoader from '../../../components/icon/PageLoader.vue';
import SearchComponent from '../../../components/Base/SearchComponent.vue';
import PaginationComponent from '../../../components/Base/PaginationComponent.vue';
import DeleteIcon from '../../../components/icon/DeleteIcon.vue';
import Select from 'primevue/select';
import PlusIcon from '../../../components/icon/PlusIcon.vue';

const loadPage = ref(false)
const groups = ref(null)
const nextPage = ref(false)
const previousPage = ref(false)
const pages = ref(0)

onMounted(async ()=>{
    /* const {Data, Error} = await useGetRequest('api/v1/group/')
    groups.value = Data.value.data.result
    nextPage.value = Data.value.data.next ? true : false
    previousPage.value = Data.value.data.previous ? true : false   
        pages.value = Data.value.data.count / 15 */
    loadPage.value = true
})

const searchResult = (result) => {
    groups.value = result
}
// pagination
const chnagePage = async (newPage) => {
    const {Data} = await useGetRequest('api/v1/group/?page='+newPage)
    groups.value = Data.value.data.result
    nextPage.value = Data.value.data.next ? true : false
    previousPage.value = Data.value.data.previous ? true : false   
        pages.value = Data.value.data.count / 15
}
const deleteLink = ref(null)
const modalVisible = ref(false)

</script>

<style scoped>
.dp__input {
    background: #f9f9f9 !important;
}
</style>