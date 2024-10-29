<template>
    <div>
        <table class="w-full border border-[#979797]">
            <thead class="bg-[#828282] text-white">
                <tr>
                    <th scope="col">الإدارة</th>
                    <th scope="col">عدد الموظفين</th>
                    <th scope="col">مدير الإدارة</th>
                    <th scope="col">العمليات</th>
                    <!-- <th scope="col" v-for="(header,index) in props.tableHeader" :key="index">{{header}}</th> -->
                </tr>
            </thead>
            <tbody>
                 <!-- <tr v-for="(row,index) in props.tableBody" :key="index">
                    <td>{{row.}}</td>
                    <td>{{row.}}</td>
                    <td>{{row.}}</td>
                    <td>{{row.}}</td>
                </tr> -->
                <tr>
                <th scope="row">الإدارة العامة</th>
                <td>٣٠٠ موظف</td>
                <td class="text-site-blue cursor-pointer" @click="print()">عبد الرحمن خالد</td>
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
                <th scope="row">الإدارة العامة</th>
                <td>٣٠٠ موظف</td>
                <td class="text-site-blue cursor-pointer" @click="print()">عبد الرحمن خالد</td>
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
                <th scope="row">الإدارة العامة</th>
                <td>٣٠٠ موظف</td>
                <td class="text-site-blue cursor-pointer" @click="print()">عبد الرحمن خالد</td>
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
                <th scope="row">الإدارة العامة</th>
                <td>٣٠٠ موظف</td>
                <td class="text-site-blue cursor-pointer" @click="print()">عبد الرحمن خالد</td>
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
                <th scope="row">الإدارة العامة</th>
                <td>٣٠٠ موظف</td>
                <td class="text-site-blue cursor-pointer" @click="print()">عبد الرحمن خالد</td>
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
                <th scope="row">الإدارة العامة</th>
                <td>٣٠٠ موظف</td>
                <td class="text-site-blue cursor-pointer" @click="print()">عبد الرحمن خالد</td>
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
                <th scope="row">الإدارة العامة</th>
                <td>٣٠٠ موظف</td>
                <td class="text-site-blue cursor-pointer" @click="print()">عبد الرحمن خالد</td>
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
                
            </tbody>
        </table>
        <Dialog v-model:visible="modalVisible" modal closeIcon="!hidden" :closeOnEscape="true" class="bg-white rtl-d p-10 border border-red-500 relative" :pt="{mask:'bg-[#00000042]',pcCloseButton:'!hidden !opacity-0'}" :style="{ width: '50%' }">
                            <template v-if="canDelete" #container="{ closeCallback }">   
                                <h1 class="text-center text-3xl font-bold mb-5">هل أنت متأكد أنك ترغب في حذف الإدارة المحددة؟</h1>
                                <p class="text-center mb-8">سيتم حذف الإدارة بأكملها، وستتم إزالة جميع البيانات المتعلقة بهذه الإدارة. و لا يمكن استعادة هذه المعلومات بعد الحذف.</p>
                                <div class="flex items-center justify-between my-2 text-lg font-bold">
                                    <button class=" bg-red-500 text-white py-2 px-7 rounded-lg">حذف</button>
                                    <button @click="closeCallback" class="text-site-blue py-4 px-8">إلغاء</button>
                                </div>
                            </template> 
                            <template v-else #container="{ closeCallback }">
                                <button @click="closeCallback" class=" absolute top-2 right-3">
                                    <Xicon />
                                </button>  
                                <div class="p-3">
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
                                </div> 
                            </template> 
        </Dialog>
    </div>
</template>

<script setup>
import EditIcon from '../icon/EditIcon.vue'
import DeleteIcon from '../icon/DeleteIcon.vue'
import { ref } from 'vue';
import Xicon from '../icon/Xicon.vue';
const props = defineProps({
    tableHeader:{type: Array, required: true},
    tableBody:{type: Array, required: true},
})
const canDelete = ref(true)
const modalVisible = ref(false)
const print = ()=>{
    window.print()
}
</script>

<style scoped>
th,td {
  border: 1px solid rgb(160 160 160);
  padding: 15px 10px;
  text-align: center;
}

</style>