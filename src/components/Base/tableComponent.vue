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
                    <button class="flex items-center gap-2">
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
                    <button class="flex items-center gap-2">
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
                    <button class="flex items-center gap-2">
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
                    <button class="flex items-center gap-2">
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
                    <button class="flex items-center gap-2">
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
                    <button class="flex items-center gap-2">
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
                    <button class="flex items-center gap-2">
                        <DeleteIcon />
                        <span class="text-[#FF3F3F]">حذف</span>
                    </button>
                </td>
                </tr>
                
            </tbody>
        </table>
    </div>
</template>

<script setup>
import EditIcon from '../icon/EditIcon.vue'
import DeleteIcon from '../icon/DeleteIcon.vue'
const props = defineProps({
    tableHeader:{type: Array, required: true},
    tableBody:{type: Array, required: true},
})

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