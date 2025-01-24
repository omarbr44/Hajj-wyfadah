<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <RouterLink to="cardsmanagment-add/add" class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center gap-2 my-8">
                    <PlusIcon />
                    <span class="font-bold">إضافة تصميم بطاقة جديد</span>
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
                            <th scope="col">اسم البطاقة</th>
                            <th scope="col">الطول</th>
                            <th scope="col">العرض</th>
                            <th scope="col">اللون</th>
                            <th scope="col">تصميم البطاقة</th>
                            <th scope="col">العمليات</th>
                        </tr>
                    </template>
                    <template v-slot:body>
                        <tr v-for="index in 5" >
                            <td>بطاقة برنامج 4</td>
                            <td>9 cm</td>
                            <td>5 cm</td>
                            <td>
                                <div class=" size-14 my-2 px-1 bg-site-blue rounded-sm mx-auto"></div>
                                <p class=" text-lg text-center">#5FC1CF</p>
                            </td>
                            <td>
                                <img src="/img/card1.png" alt="card" class="mx-auto">
                            </td>
                            <td class="">
                                <div class="flex items-center justify-center gap-5">
                                    <RouterLink :to="'cardsmanagment-add/1'" class="flex items-center gap-2">
                                        <EditIcon />
                                        <span class="text-[#46814F]">تعديل</span>
                                    </RouterLink >
                                    <button @click="showDeleteModal(1)" class="flex items-center gap-2">
                                        <DeleteIcon />
                                        <span class="text-[#FF3F3F]">حذف</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </template>
                    <template v-slot:delete-modal-1>
                        <h1 class="text-center text-3xl font-bold mb-5">هل انت متأكد من رغبتك في حذف هذا النوع ؟</h1>
                        <p class="text-center mb-8">سيؤدي حذف نوع المستخدم المحدد  إلى إزالة جميع المعلومات والبيانات المتعلقة به، وقد يؤثر على سير العمل والأنشطة الخاصة بالشركة. يرجى التحقق من تأثيرات هذا الإجراء والتأكد من قرارك.
</p>
                    </template>
                    <template v-slot:delete-modal-2>
                        <h1 class="text-center text-3xl font-bold mb-5">لا يمكنك حذف نوع المستخدم هذا !
                        </h1>
                        <p class="text-center mb-8">نوع المستخدم الحالي مرتبط بمستخدم معين يجب تعديل صلاحيات المستخدمين المرتبطن بهذا النوع لتتمكن من حذف نوع المستخدم 
</p>
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
const showDeleteModal = (id) => {
    modalVisible.value = true
    deleteLink.value = 'api/v1/group/'+id+'/'
}
const modalVisible = ref(false)

</script>

<style scoped>
.dp__input {
    background: #f9f9f9 !important;
}
</style>