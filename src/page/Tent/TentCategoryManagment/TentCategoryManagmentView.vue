<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <button @click="addModalVisible = true" class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center gap-2 my-8">
                    <PlusIcon />
                    <span class="font-bold">إضافة تصنيف للخيام</span>
                </button>
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
                            <th scope="col">التصنيف</th>
                            <th scope="col">العمليات</th>
                        </tr>
                    </template>
                    <template v-slot:body>
                        <tr v-for="index in 5" >
                            <td>حجاج</td>
                            <td class="flex items-center justify-center gap-5">
                                <button @click="addModalVisible = true" class="flex items-center gap-2">
                                    <EditIcon />
                                    <span class="text-[#46814F]">تعديل</span>
                                </button >
                                <button @click="showDeleteModal(1)" class="flex items-center gap-2">
                                    <DeleteIcon />
                                    <span class="text-[#FF3F3F]">حذف</span>
                                </button>
                            </td>
                        </tr>
                    </template>
                    <template v-slot:delete-modal-1>
                        <h1 class="text-center text-3xl font-bold mb-5">هل أنت متأكد أنك ترغب في حذف هذه التصنيف   </h1>
                        <p class="text-center mb-8">سيؤدي حذف التصنيف إلى إزالة جميع المعلومات والبيانات المتعلقة به، وقد يؤثر على سير العمل والأنشطة الخاصة بالشركة. يرجى التحقق من تأثيرات هذا الإجراء والتأكد من قرارك.
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
            <Dialog v-model:visible="addModalVisible" modal closeIcon="!hidden" :closeOnEscape="true" class="bg-white rtl-d p-5 relative" :pt="{mask:'bg-[#00000042]',pcCloseButton:'!hidden !opacity-0'}" :style="{ width: '70%' }">
                    <template #container="{ closeCallback }">
                        <h1 class="text-center text-3xl font-bold mb-5 text-site-blue">إضافة تصنيف خيام جديد</h1>
                        <div class="w-full p-4 pt-8 border border-[#DADADA] rounded-2xl flex flex-col items-center justify-center">
                            <div class="w-[80%]">
                                <p class="text-black font-semibold w-[50%] mb-3">اسم التصنيف<span class="text-red-500">*</span></p>
                                <input 
                                name="" 
                                type="text" 
                                class="w-full relative border border-[#BDBDBD] p-2 rounded-xl"
                                placeholder="ادخل اسم التصنيف او نوع الخيمة">
                                <p v-if="requestConditions?.error?.name_ar" class="text-red-500 mt-1">{{ requestConditions.error.name_ar }}</p>
                            </div>
                        <div class="flex items-center justify-between my-2 text-lg font-bold mt-16 w-full">
                            <button @click="deleteItem" class="bg-site-blue text-white py-2 px-7 rounded-lg flex justify-center items-center">
                                <span v-if="true">اضافة</span>
                                <LoaderIcon v-else />
                            </button>
                            <button @click="closeCallback" class="text-red-500 py-4 px-8">إلغاء</button>
                        </div>
                        </div> 
                    </template> 
                </Dialog>
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
import LoaderIcon from '../../../components/icon/loaderIcon.vue';

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
const addModalVisible = ref(false)

</script>

<style scoped>
.dp__input {
    background: #f9f9f9 !important;
}
</style>