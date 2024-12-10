<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-10 pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">ربط مجموعة جديدة</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-y-4">
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">المجموعة الحالية</p>
                        <input 
                        disabled
                        v-model="groupData.name_ar"
                        name="" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="28858326">
                        <p v-if="requestConditions?.error?.name_ar" class="text-red-500 mt-1">{{ requestConditions.error.name_ar }}</p>
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">المجموعة المراد الربط بها<span class="text-red-500">*</span></p>
                        <Select v-model="link_group_value" @update:model-value="onInput" editable :options="filtedGroups" optionLabel="name_ar" 
                                    placeholder="المجموعات" overlayClass="!bg-white rtl-d p-2 overflow-auto" labelClass="!bg-[#f9f9f9]" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                    :pt="{overlay:' shadow-xl'}">
                                    <template #value="slotProps">
                                        <span v-if="slotProps.value">{{ slotProps.value.name_ar }}</span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="flex items-center gap-3 mb-3 cursor-pointer py-1 hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                            <div>{{ slotProps.option.name_ar }}</div>
                                        </div>
                                    </template>
                                    <template #dropdownicon>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                        </svg>
                                    </template>
                                    <template #header>
                                        <div class="font-medium"></div>
                                    </template>
                        </Select>
                        <p v-if="requestConditions?.error?.link_group" class="text-red-500 mt-1">{{ requestConditions.error.link_group }}</p>
                    </div>
                    <div class="w-full flex items-center justify-end my-10 text-lg font-bold">
                    <button @click="addLink" class=" bg-site-blue text-white py-3 px-10 rounded-lg">
                        <span v-if="!requestConditions.loading">
                            ربط 
                        </span>
                        <LoaderIcon v-else />
                    </button>
                </div>
                </div>
                <h1 class="text-xl font-bold text-site-blue my-5">المجموعات المرتبطة مع المجموعة ( {{ groupData.name_ar }} )</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl">
                    <div class=" w-[40%] mx-5 my-5">
                        <SearchComponent
                           api=""
                            />
<!--                         <SearchComponent
                           api=""
                           @resultSearch="searchResult" /> -->
                    </div>
                    <TableComponent class=" overflow-auto mx-8"
                    :modalVisible="modalVisible"
                    @closeModal="modalVisible = false"
                    :deleteLink="deleteLink"
                    :canDelete="true">
                    <template v-slot:header>
                        <tr>
                            <th scope="col">المجموعة المرتبطة</th>
                            <th scope="col">العمليات</th>
                        </tr>
                    </template>
                    <template v-slot:body>
                        <tr v-for="(group,index) in groupLinks" >
                            <td>{{ group.link_group }}</td>
                            <td class="flex items-center justify-center">
                                <button @click="showDeleteModal(group)" class="flex items-center gap-2">
                                    <DeleteIcon />
                                    <span class="text-[#FF3F3F]">حذف</span>
                                </button>
                            </td>
                        </tr>
                    </template>
                    <template v-slot:delete-modal-1>
                        <h1 class="text-center text-3xl font-bold mb-5">هل أنت متأكد أنك ترغب في حذف إرتباط  المجموعة {{groupData.name_ar}} المرتبطة 
                            بالمجموعة {{deletedGroup}} ؟                       </h1>
                        <p class="text-center mb-8"> سيتم إزالة الارتباط بين المجموعتين، يرجى مراجعة هذا القرار بعناية لضمان عدم تأثير سلبي على سير العمل.
                        </p>
                    </template>
                </TableComponent>
                </div>
            </div>
        </div>
        <div v-else class=" flex justify-center mt-52">
            <PageLoader />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import LoaderIcon from '../../../components/icon/loaderIcon.vue';
import { useGetRequest, usePostRequest, useGetRequestPaginationFalse } from '../../../composables/useRequest';
import { useRoute, useRouter } from 'vue-router';
import PageLoader from '../../../components/icon/PageLoader.vue';
import Select from 'primevue/select';
import SearchComponent from '../../../components/Base/SearchComponent.vue';
import DeleteIcon from '../../../components/icon/DeleteIcon.vue';
import TableComponent from '../../../components/Base/tableComponent.vue';
import {debounce} from 'lodash';

const router = useRouter()
const route = useRoute()
const loadPage = ref(false)
const deletedGroup = ref()
const groupLink = ref({
    group: route.params.id,
    link_group: null,
})
const groupLinks = ref()
const groups = ref()
const filtedGroups = ref()
const groupData = ref()
const requestConditions = ref({
    data: null,
    error: null,
    loading: false,
})

onMounted(async ()=>{
        const {Data:groupdata} = await useGetRequest('api/v1/group/'+route.params.id)
        groupData.value = groupdata.value.data
        const {Data, Error} = await useGetRequestPaginationFalse('api/v1/group/?pagination=false')
        groups.value = Data.value.data
        filtedGroups.value = groups.value
        const {Data:linkss} = await useGetRequest('api/v1/links/?group='+route.params.id)
        groupLinks.value = linkss.value.data.result
        loadPage.value = true
})
const deleteLink = ref(null)
const modalVisible = ref(false)

const showDeleteModal = (group) => {
    deletedGroup.value = group.link_group
    modalVisible.value = true
    deleteLink.value = 'api/v1/links/'+group.id+'/'
}

const link_group_value = ref()

// search method
const onInput =debounce(async function()  {
    if(typeof link_group_value.value == 'object') {
            groupLink.value.link_group = link_group_value.value.id
            link_group_value.value = link_group_value.value.name_ar
        }
        filtedGroups.value = groups.value.filter(el => el.name_ar.includes(link_group_value.value))
},200) 

const addLink = async () => {
    requestConditions.value.loading = true
    /* groupLink.value.link_group = link_group_value.value
    groupLink.value.link_group = groupLink.value?.link_group?.id */
        const { Data, Error } = await usePostRequest('api/v1/links/',groupLink.value)
        requestConditions.value.error = Error?.value?.errors
        requestConditions.value.data = Data.value
    if(Error.value != null) {
        requestConditions.value.loading = false
    }
    else {
        requestConditions.value.loading = false
        const {Data:linkss} = await useGetRequest('api/v1/links/?group='+route.params.id)
        groupLinks.value = linkss.value.data.result
    }
}
</script>

<style scoped>
input[data-pc-section="label"] {
    background-color: none !important;
}
</style>