<template>
<div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <h1 class="text-site-blue text-xl font-semibold mb-10">جنسيات المجموعات</h1>
                <button @click="openModal('add')" class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center gap-2 my-8">
                    <PlusIcon />
                    <span class="font-bold">إضافة جنسية مجموعة</span>
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
                            <th scope="col">المجموعة المنظمة</th>
                            <th scope="col">الجنسية</th>
                            <th scope="col">العمليات</th>
                        </tr>
                    </template>
                    <template v-slot:body>
                        <tr v-for="(group,index) in groupNations" :key="index">
                            <td>{{group.name_ar}}</td>
                            <td>{{ group.name_nationalitie }}</td>
                            <td class="flex items-center justify-center gap-5">
                                <button @click="openModal(group.id)" class="flex items-center gap-2">
                                    <EditIcon />
                                    <span class="text-[#46814F]">تعديل</span>
                                </button >
                                <button @click="showDeleteModal(group.id)" class="flex items-center gap-2">
                                    <DeleteIcon />
                                    <span class="text-[#FF3F3F]">حذف</span>
                                </button>
                            </td>                        </tr>
                    </template>
                    <template v-slot:delete-modal-1>
                        <h1 class="text-center text-3xl font-bold mb-5">هل أنت متأكد أنك ترغب في حذف جنسية المجموعة  
                            المحددة؟                       </h1>
                        <p class="text-center mb-8">سيتم إزالة مجموعة الجنسية المحددة من النظام، ولا يمكن استعادة بيانات المجموعة بعد الحذف.</p>
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
                        <h1 class="text-center text-3xl font-bold mb-5 text-site-blue">تعديل جنسية مجموعة</h1>
                        <div class="w-full p-4 pt-4 pb-32 border border-[#DADADA] rounded-2xl flex flex-wrap gap-y-4 ">
                            <div class="w-[45%]">
                                <p class="text-black font-semibold w-[50%] mb-3">المجموعة المنظمة<span class="text-red-500">*</span></p>
                                <Select v-model="groupNationsObject.nationalitie" filter :options="nations" optionLabel="name_ar" 
                                    placeholder="" overlayClass="!bg-white rtl-d p-2 overflow-y-auto" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                    :pt="{overlay:' shadow-xl'}">
                                    <template #value="slotProps">
                                        <span v-if="slotProps.value">{{ slotProps.value.name_ar }}</span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="w-full cursor-pointer">
                                            <div
                                             class="flex items-center justify-between rounded-md p-2 my-2"
                                             >
                                                <div>{{ slotProps.option.name_ar }}</div>
                                            </div>
                                            <hr>
                                        </div>
                                    </template>
                                    <template #dropdownicon>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                        </svg>
                                    </template>
                                    <template #header>
                                        <hr>
                                    </template>
                                </Select>
                                <p v-if="requestConditions?.error?.nationalitie" class="text-red-500 mt-1">{{ requestConditions.error.nationalitie }}</p>
                            </div>
                        <div class="w-[8%]"></div>
                        <div class="w-[45%]">
                                <p class="text-black font-semibold w-[50%] mb-3">الجنسية<span class="text-red-500">*</span></p>
                                <MultiSelect v-model="groupNationsObject.name_ar" filter :options="nations" optionLabel="name_ar" 
                                    placeholder="" overlayClass="!bg-white rtl-d p-2 overflow-y-auto" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                    :pt="{overlay:' shadow-xl'}">
                                    <template #value="slotProps">
                                        <span v-if="slotProps.value.length">{{ slotProps.value.map(el => el.name_ar) }}</span>
                                    </template>
                                    <template #option="slotProps">
                                        <div @click="slotProps.option.selected = !slotProps.option.selected" class="w-full cursor-pointer">
                                            <div
                                             class="flex items-center justify-between rounded-md p-2 my-2"
                                             :class="slotProps.option.selected ? 'bg-site-blue bg-opacity-30' : ''">
                                                <div>{{ slotProps.option.name_ar }}</div>
                                                <svg v-show="slotProps.option.selected" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.08594 12L4.6901 8.875L9.89844 15.125L20.3151 2.625L22.9193 5.75L9.89844 21.375L2.08594 12Z" fill="#008093" stroke="#008093" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                            <hr>
                                        </div>
                                    </template>
                                    <template #dropdownicon>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                        </svg>
                                    </template>
                                    <template #header>
                                        <!-- <div class="mx-5 my-5">
                                            <SearchComponent
                                            api=""
                                            @resultSearch="searchResult" />
                                        </div> -->
                                        <hr>
                                    </template>
<!--                                     <template #footer>
                                        <div class="mx-5 my-5">
                                            <SearchComponent
                                            api=""
                                            @resultSearch="searchResult" />
                                        </div>
                                        <hr>
                                    </template> -->
                                </MultiSelect>
                                <p v-if="requestConditions?.error?.name_ar" class="text-red-500 mt-1">{{ requestConditions.error.name_ar }}</p>
                        </div>
                        <div class="flex items-center justify-between my-2 text-lg font-bold mt-16 w-full">
                            <button @click="addGroupNations" class="bg-site-blue text-white py-2 px-7 rounded-lg flex justify-center items-center">
                                <span v-if="!requestConditions.loading">اضافة</span>
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
import TableComponent from '../../../components/Base/tableComponent.vue';
import { useGetRequest, useDeleteRequest, usePatchRequest, usePostRequest } from '../../../composables/useRequest';
import PageLoader from '../../../components/icon/PageLoader.vue';
import SearchComponent from '../../../components/Base/SearchComponent.vue';
import PaginationComponent from '../../../components/Base/PaginationComponent.vue';
import PlusIcon from '../../../components/icon/PlusIcon.vue';
import EditIcon from '../../../components/icon/EditIcon.vue'
import DeleteIcon from '../../../components/icon/DeleteIcon.vue'
import MultiSelect from 'primevue/multiselect';
import Select from 'primevue/select';
import { useUserStore } from '../../../stores/user';
import LoaderIcon from '../../../components/icon/loaderIcon.vue';

const user = useUserStore()

const groupNationsObject = ref({
    name_ar: [],
    nationalitie:  null
})
const objectEdit = ref('add')
const requestConditions = ref({
    data: null,
    error: null,
    loading: false,
})

const groupNations = ref([])
const loadPage = ref(false)
const locations = ref(null)
const nextPage = ref(false)
const previousPage = ref(false)
const pages = ref(0)
const nations = ref()

onMounted(async ()=>{
    const {Data:group_nationalities,} = await useGetRequest('api/v1/group_nationalities/')
    groupNations.value = group_nationalities.value.data.result
    nextPage.value = group_nationalities.value.data.next ? true : false
    previousPage.value = group_nationalities.value.data.previous ? true : false   
    pages.value = group_nationalities.value.data.count / 15
    const {Data, Error} = await useGetRequest('api/v1/nationalitie/')
    nations.value = Data.value.data.result
    loadPage.value = true
})

const searchResult = (result) => {
    locations.value = result
}
// pagination
const chnagePage = async (newPage) => {
    const {Data} = await useGetRequest('api/v1/group_nationalities/?page='+newPage)
    groupNations.value = Data.value.data.result
    nextPage.value = Data.value.data.next ? true : false
    previousPage.value = Data.value.data.previous ? true : false   
        pages.value = Data.value.data.count / 15
}

const addGroupNations = async () => {
    requestConditions.value.loading = true

    const objectSend = {
        subscriber_company: user.userCompantId,
        nationalitie: groupNationsObject.value?.nationalitie?.id,
        name_ar: '{ ' + groupNationsObject.value?.name_ar.map(e => e.name_ar).join(', ') + ' }'
    }

    if(objectEdit.value == 'add') {
        const { Data, Error } = await usePostRequest('api/v1/group_nationalities/',objectSend)
        requestConditions.value.error = Error?.value?.errors
        requestConditions.value.data = Data.value
    }
    else {
        const { Data, Error } = await usePatchRequest('api/v1/group_nationalities/'+objectEdit.value+'/',objectSend)
        requestConditions.value.error = Error?.value?.errors
        requestConditions.value.data = Data.value
    }
    if(requestConditions.value.error != null) {
        requestConditions.value.loading = false
    }
    else {
        addModalVisible.value = false
        groupNationsObject.value.name_ar = []
        groupNationsObject.value.nationalitie = null
        requestConditions.value.loading = false
    }
}
const deleteLink = ref(null)
const showDeleteModal = (id) => {
    modalVisible.value = true
    deleteLink.value = 'api/v1/group_nationalities/'+id+'/'
}

const modalVisible = ref(false)
const addModalVisible = ref(false)

const openModal = async (id) => {
    objectEdit.value = id
    addModalVisible.value = true
    if(objectEdit.value != 'add') {
        const {Data,} = await useGetRequest('api/v1/group_nationalities/'+id)
        groupNationsObject.value.nationalitie = nations.value.filter( el => el.id == Data.value.data.nationalitie )[0]
    }
}
</script>
<style>
div[data-pc-name="pcfiltercontainer"] {
    display: flex !important;
    align-items: center !important;
}
input[data-pc-name="pcfilter"] {
    width: 100% !important;
    border: 1px solid #BDBDBD  !important;
    padding: 0.5rem 2.5rem;
    border-radius: 4rem;}
span[data-pc-name="pcfiltericoncontainer"] {
    right: 26px !important;
    position: absolute !important;
}
</style>
