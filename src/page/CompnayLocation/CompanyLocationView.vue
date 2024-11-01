<template>
    <div>
        <NavBarComponent />
        <div class="flex justify-stretch">
            <div class="w-[80%] rtl-d px-5 bg-[#f9f9f9] pt-28">
                <h1 class="text-site-blue text-xl font-semibold">مواقع المخيمات التابعة للشركة</h1>
                <RouterLink to="company-location-add" class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center gap-2 my-8">
                    <PlusIcon />
                    <span class="font-bold">إضافة موقع جديد</span>
                </RouterLink>
                <TableComponent
                :modalVisible="modalVisible"
                @closeModal="modalVisible = false"
                :canDelete="false">
                    <template v-slot:header>
                        <tr>
                            <th scope="col">اسم الموقع</th>
                            <th scope="col">السعة</th>
                            <th scope="col">إدارة الباصات</th>
                            <th scope="col">الخيام</th>
                            <th scope="col">عدد الرجال</th>
                            <th scope="col">عدد النساء</th>
                            <th scope="col">القطار</th>
                            <th scope="col">العمليات</th>
                        </tr>
                    </template>
                    <template v-slot:body>
                        <tr>
                <th scope="row">باقة (4) سكن العزيزية</th>
                <td>1124</td>
                <td>24</td>
                <td>72</td>
                <td>729</td>
                <td>580</td>
                <td class="font-bold text-green-700 bg-green-300">متوفر</td>
                <td class="flex items-center justify-center gap-5">
                    <button class="flex items-center gap-2">
                        <EditIcon />
                        <span class="text-[#46814F]">تعديل</span>
                    </button>
                    <button @click="modalVisible = true" class="flex items-center gap-2">
                        <DeleteIcon />
                        <span class="text-[#FF3F3F]">حذف</span>
                    </button>
                </td>
                </tr>
                        <tr>
                <th scope="row">باقة (4) سكن العزيزية</th>
                <td>1124</td>
                <td>24</td>
                <td>72</td>
                <td>729</td>
                <td>580</td>
                <td class="font-bold text-green-700 bg-green-300">متوفر</td>
                <td class="flex items-center justify-center gap-5">
                    <button class="flex items-center gap-2">
                        <EditIcon />
                        <span class="text-[#46814F]">تعديل</span>
                    </button>
                    <button @click="modalVisible = true" class="flex items-center gap-2">
                        <DeleteIcon />
                        <span class="text-[#FF3F3F]">حذف</span>
                    </button>
                </td>
                </tr>
                        <tr>
                <th scope="row">باقة (4) سكن العزيزية</th>
                <td>1124</td>
                <td>24</td>
                <td>72</td>
                <td>729</td>
                <td>580</td>
                <td class="font-bold text-green-700 bg-green-300">متوفر</td>
                <td class="flex items-center justify-center gap-5">
                    <button class="flex items-center gap-2">
                        <EditIcon />
                        <span class="text-[#46814F]">تعديل</span>
                    </button>
                    <button @click="modalVisible = true" class="flex items-center gap-2">
                        <DeleteIcon />
                        <span class="text-[#FF3F3F]">حذف</span>
                    </button>
                </td>
                </tr>
                        <tr>
                <th scope="row">باقة (4) سكن العزيزية</th>
                <td>1124</td>
                <td>24</td>
                <td>72</td>
                <td>729</td>
                <td>580</td>
                <td class="font-bold text-green-700 bg-green-300">متوفر</td>
                <td class="flex items-center justify-center gap-5">
                    <button class="flex items-center gap-2">
                        <EditIcon />
                        <span class="text-[#46814F]">تعديل</span>
                    </button>
                    <button @click="modalVisible = true" class="flex items-center gap-2">
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
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import TableComponent from '../../components/Base/tableComponent.vue';
import NavBarComponent from '../../components/Company/NavBarComponent.vue';
import PlusIcon from '../../components/icon/PlusIcon.vue';
import EditIcon from '../../components/icon/EditIcon.vue'
import DeleteIcon from '../../components/icon/DeleteIcon.vue'
import SideBarComponent from '../../components/SideBarComponent.vue';

const modalVisible = ref(false)

const print = ()=>{
    window.print()
}
</script>

<style scoped>

</style>