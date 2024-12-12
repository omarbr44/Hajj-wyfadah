<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <RouterLink to="tent-add/add" class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center gap-2 my-8">
                    <PlusIcon />
                    <span class="font-bold">إضافة خيمة جديدة</span>
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
                            <th scope="col">رقم الخيمة</th>
                            <th scope="col">مكان الخيمة</th>
                            <th scope="col">الموقع</th>
                            <th scope="col">جنسيات المجموعات</th>
                            <th scope="col">الجنس</th>
                            <th scope="col">السعة</th>
                            <th scope="col">حالة التحضير</th>
                            <th scope="col">كشف توزيع الخيمة</th>
                            <th scope="col">العمليات</th>
                        </tr>
                    </template>
                    <template v-slot:body>
                        <tr v-for="index in 5" >
                            <td class="bg-site-blue">
                                <RouterLink class="text-white font-bold" >الخيمة 99</RouterLink>
                            </td>
                            <td>عرفات</td>
                            <td>باقة (4) - العزيزية</td>
                            <td>امريكي</td>
                            <td class="flex items-center gap-3">
                                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.283 2C6.72247 2 7.14394 2.21071 7.45469 2.58579C7.76545 2.96086 7.94002 3.46957 7.94002 4C7.94002 4.53043 7.76545 5.03914 7.45469 5.41421C7.14394 5.78929 6.72247 6 6.283 6C5.84353 6 5.42206 5.78929 5.1113 5.41421C4.80055 5.03914 4.62597 4.53043 4.62597 4C4.62597 3.46957 4.80055 2.96086 5.1113 2.58579C5.42206 2.21071 5.84353 2 6.283 2ZM5.04023 22V16H2.55469L4.70882 8.4C4.95738 7.6 5.53734 7 6.283 7C7.02866 7 7.69147 7.6 7.85717 8.4L10.0113 16L12.1654 8.4C12.414 7.6 12.994 7 13.7396 7C14.4853 7 15.1481 7.6 15.3138 8.4L17.4679 16H14.9824V22H12.4968V16H7.52577V22H5.04023ZM13.7396 2C14.1791 2 14.6006 2.21071 14.9113 2.58579C15.2221 2.96086 15.3966 3.46957 15.3966 4C15.3966 4.53043 15.2221 5.03914 14.9113 5.41421C14.6006 5.78929 14.1791 6 13.7396 6C13.3001 6 12.8787 5.78929 12.5679 5.41421C12.2572 5.03914 12.0826 4.53043 12.0826 4C12.0826 3.46957 12.2572 2.96086 12.5679 2.58579C12.8787 2.21071 13.3001 2 13.7396 2Z" fill="#5FC1CF"/>
                                </svg>
                                <span>اناث</span>
                            </td>
                            <td>580</td>
                            <td class=" bg-green-300 text-green-700">
                                تم التحضير
                            </td>
                            <td>
                                <RouterLink to="/hotelprint/1" class="flex items-center gap-1 justify-center rounded-2xl bg-black bg-opacity-80 p-2">
                                    <span class="text-white text-nowrap">طباعة</span>
                                </RouterLink>
                            </td>
                            <td class="flex items-center justify-center gap-5">
                                <RouterLink :to="'tent-add/1'" class="flex items-center gap-2">
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
                        <h1 class="text-center text-3xl font-bold mb-5">هل أنت متأكد أنك ترغب في حذف هذه الخيمة   </h1>
                        <p class="text-center mb-8">سيؤدي حذف الخيمة إلى إزالة جميع المعلومات والبيانات المتعلقة به، وقد يؤثر على سير العمل والأنشطة الخاصة بالشركة. يرجى التحقق من تأثيرات هذا الإجراء والتأكد من قرارك.
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
                        <h1 class="text-center text-3xl font-bold mb-5 text-site-blue">إضافة غرفة للفندق 90</h1>
                        <div class="w-full p-4 pt-8 border border-[#DADADA] rounded-2xl flex flex-wrap gap-y-4 ">
                            <div class="w-[45%]">
                                <p class="text-black font-semibold w-[50%] mb-3">رقم الغرفة<span class="text-red-500">*</span></p>
                                <input 
                                name="" 
                                type="number" 
                                class="w-full relative border border-[#BDBDBD] p-2 rounded-xl"
                                placeholder="ادخل رقم الغرفة">
                                <p v-if="requestConditions?.error?.name_ar" class="text-red-500 mt-1">{{ requestConditions.error.name_ar }}</p>
                            </div>
                        <div class="w-[8%]"></div>
                        <div class="w-[45%]">
                                <p class="text-black font-semibold w-[50%] mb-3">نوع الغرفة<span class="text-red-500">*</span></p>
                                <Select v-model="fromCountry" :options="['احادية']" optionLabel="name" 
                                    placeholder="" overlayClass="!bg-white rtl-d p-2" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl w-full"
                                    :pt="{overlay:' shadow-xl'}">
                                    <template #value="slotProps">
                                        <span></span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="flex items-center gap-3 mb-3 cursor-pointer py-1 hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                            <div>احادية</div>
                                        </div>
                                    </template>
                                    <template #dropdownicon>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                        </svg>
                                    </template>
                        </Select>
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