<template>
    <div id="non-print">
        <NavBarComponent />
        <div v-if="loadPage" class="flex justify-stretch">
            <div class="w-[80%] rtl-d px-5 bg-[#f9f9f9] pt-28">
                <h1 class="text-site-blue text-xl font-semibold">الإدارات التابعة للشركة </h1>
                <RouterLink to="company-departments-add/add" class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center gap-2 my-8">
                    <PlusIcon />
                    <span class="font-bold">أضف إدارة جديدة</span>
                </RouterLink>
                <TableComponent
                :modalVisible="modalVisible"
                @closeModal="modalVisible = false"
                :deleteLink="deleteLink"
                :canDelete="true">
                    <template v-slot:header>
                        <tr>
                            <th scope="col">الإدارة</th>
                            <th scope="col">عدد الموظفين</th>
                            <th scope="col">مدير الإدارة</th>
                            <th scope="col">العمليات</th>
                        </tr>
                    </template>
                    <template v-slot:body>
                        <tr v-for="(department,index) in departmentObj" :key="index">
                            <th scope="row">{{ department.name_ar }}</th>
                            <td>{{ department.employe_count }} موظف</td>
                            <td class="text-site-blue cursor-pointer" @click="print()">{{ department.name_manager }}</td>
                            <td class="flex items-center justify-center gap-5">
                                <RouterLink :to="'company-departments-add/'+department.id" class="flex items-center gap-2">
                                    <EditIcon />
                                    <span class="text-[#46814F]">تعديل</span>
                                </RouterLink >
                                <button @click="showDeleteModal(department.id)" class="flex items-center gap-2">
                                    <DeleteIcon />
                                    <span class="text-[#FF3F3F]">حذف</span>
                                </button>
                            </td>
                        </tr>
                    </template>
                    <template v-slot:delete-modal-1>
                        <h1 class="text-center text-3xl font-bold mb-5">هل أنت متأكد أنك ترغب في حذف الإدارة المحددة؟</h1>
                        <p class="text-center mb-8">سيتم حذف الإدارة بأكملها، وستتم إزالة جميع البيانات المتعلقة بهذه الإدارة. و لا يمكن استعادة هذه المعلومات بعد الحذف.</p>
                    </template>
                    <template v-slot:delete-modal-2>
                        <h1 class="text-xl font-bold mb-5">نعتذر، لا يمكن حذف هذه الإدارة في الوقت الحالي. يبدو أنها مرتبطة بموظفين أو تم تعيين مدير عليها. يرجى اتخاذ الخطوات التالية قبل محاولة الحذف:
                        </h1>
                        <p class="mb-8">
                            1. تحقق من فصل جميع الموظفين المرتبطين بالإدارة.
                            <br>
                            2. تأكد من عدم تعيين مدير على هذه الإدارة.
                            <br>
                            3. بعد الانتهاء من الخطوات السابقة، يمكنك محاولة حذف الإدارة.
                        </p>
                        <p>يرجى ملاحظة أن عملية الحذف ستؤدي إلى إزالة جميع البيانات ذات الصلة ولا يمكن استعادتها بعد الحذف.</p>                              
                    </template>
                </TableComponent>
            </div>
            <SideBarComponent />
        </div>
        <div v-else class=" flex justify-center mt-52">
            <PageLoader />
        </div>
    </div>
    <div id="print" class="hidden">
        <h1 class=" text-center text-4xl font-bold text-red-800 mt-60">
            شركة عبدالله صالح الكاف
            <br>
            لخدمات حجاج الداخل
        </h1>
        <div class="flex items-center gap-5 my-7 justify-center">
            <div class="w-[200px] h-[300px] bg-site-text-grey"></div>
            <div class="w-[300px] h-[200px] bg-site-text-grey"></div>
        </div>
        <h1 class=" text-center text-3xl font-bold mb-3">
            ابوبكر عبدالعزيز الكثيري
        </h1>
        <h1 class=" text-center text-xl font-bold mb-3">
            الوظيفة: مسؤول التسجيل والنظام
        </h1>
        <h1 class=" text-center text-xl font-bold mb-3">
            صالحة لغاية: 15/12/1444
        </h1>
    </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import TableComponent from '../../components/Base/tableComponent.vue';
import NavBarComponent from '../../components/Company/NavBarComponent.vue';
import PlusIcon from '../../components/icon/PlusIcon.vue';
import EditIcon from '../../components/icon/EditIcon.vue'
import DeleteIcon from '../../components/icon/DeleteIcon.vue'
import SideBarComponent from '../../components/SideBarComponent.vue';
import { useGetRequest } from '../../composables/useRequest';
import PageLoader from '../../components/icon/PageLoader.vue';

const loadPage = ref(false)
const departmentObj = ref(null)
onMounted(async ()=>{
    const {Data, Error} = await useGetRequest('api/v1/department_company/')
    departmentObj.value = Data.value.data.result
    loadPage.value = true
})

const modalVisible = ref(false)
const deleteLink = ref(null)
const showDeleteModal = (id) => {
    modalVisible.value = true
    deleteLink.value = 'api/v1/department_company/'+id+'/'
}

const print = ()=>{
    window.print()
}
</script>

<style scoped>

</style>