<template>
    <div>
        <NavBarComponent />
        <div class="flex justify-stretch">
            <div class="w-[80%] rtl-d px-5 bg-[#f9f9f9] pt-28">
                <h1 class="text-site-blue text-xl font-semibold">إدارة الفروع التابعة للحملة</h1>
                <RouterLink to="company-branshes-add" class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center gap-2 my-8">
                    <PlusIcon />
                    <span class="font-bold">إضافة فرع جديد</span>
                </RouterLink>
                <div class="flex items-center gap-5 mb-10">
                    <button id="menu-activator" class="flex flex-col items-center gap-1">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0V2H17L11 11V18H7V11L1 2H0V0H18Z" fill="#5FC1CF"/>
                        </svg>
                        <p class="text-site-blue">صنف ب</p>
                    </button>
                    <v-menu activator="#menu-activator" :close-on-content-click="false">
                        <div class="bg-white shadow-md rounded-md">
                            <p class="text-site-blue font-bold rtl-d p-6">حالة التسجيل</p>
                            <div class="flex gap-10 items-center p-10 pt-1">
                                <div class="flex items-center">
                                    <label for="ingredient1" class="mr-2 text-site-blue">غير مكتمل</label>
                                    <Checkbox v-model="pizza1" inputId="ingredient1" name="pizza2" value="Cheese2" />
                                </div>
                                <div class="flex items-center">
                                    <label for="ingredient1" class="mr-2 text-site-blue">المكتمل</label>
                                    <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
                                </div>
                                <div class="flex items-center">
                                    <label for="ingredient1" class="mr-2 text-site-blue">الكل</label>
                                    <Checkbox v-model="pizza2" inputId="ingredient1" name="pizza1" value="Cheese1" />
                                </div>
                            </div>
                        </div>
                    </v-menu> 
                    <div class="w-[40%] relative">
                        <input 
                            type="text" 
                            class="w-full bg-[#f9f9f9] border border-[#BDBDBD] p-2 px-10 rounded-3xl"
                        > 
                        <SearchIcon class=" absolute right-4 top-1/2 -translate-y-1/2"/>
                    </div> 

                </div>
                <TableComponent 
                :modalVisible="modalVisible"
                @closeModal="modalVisible = false"
                :canDelete="false">
                    <template v-slot:header>
                        <tr>
                            <th scope="col">إسم الفرع</th>
                            <th scope="col">الحافلة</th>
                            <th scope="col">سعة التسجيل</th>
                            <th scope="col">عدد الحجاج المسجلين</th>
                            <th scope="col">المتبقي</th>
                            <th scope="col">حالة التسجيل</th>
                            <th scope="col">العمليات</th>
                        </tr>
                    </template>
                    <template v-slot:body>
                        <tr>
                            <th scope="row">جدة</th>
                            <td>22</td>
                            <td>10000</td>
                            <td>900</td>
                            <td>100</td>
                            <td class="font-bold text-red-700 bg-red-300">غير مكتمل</td>
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
                            <th scope="row">جدة</th>
                            <td>22</td>
                            <td>10000</td>
                            <td>900</td>
                            <td>100</td>
                            <td class="font-bold text-green-700 bg-green-300">مكتمل</td>
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
                        <h1 class="text-center text-3xl font-bold mb-5">هل أنت متأكد من رغبتك في حذف هذا الفرع؟</h1>
                        <p class="text-center mb-8">سيتم حذف الفرع بشكل دائم، وسيؤدي ذلك إلى إزالة جميع المعلومات والسجلات المتعلقة به. لا يمكن التراجع عن هذا الإجراء، وسيؤثر على جميع العمليات المتعلقة بالفرع.</p>
                    </template>
                    <template v-slot:delete-modal-2>
                        <h1 class="text-xl font-bold mb-5">عذرًا، لا يمكن حذف هذا الفرع حاليًا. يظهر أن هناك حجاج مسجلين مرتبطين بهذا الفرع. يرجى اتخاذ الخطوات التالية قبل محاولة الحذف:
                        </h1>
                        <p class="mb-8">
                            1. تأكد من فصل جميع الحجاج المسجلين لهذا الفرع.
                            <br>
                            2. بعد الانتهاء من الخطوة السابقة، يمكنك محاولة حذف الفرع.
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
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import TableComponent from '../../components/Base/tableComponent.vue';
import NavBarComponent from '../../components/Company/NavBarComponent.vue';
import PlusIcon from '../../components/icon/PlusIcon.vue';
import EditIcon from '../../components/icon/EditIcon.vue'
import DeleteIcon from '../../components/icon/DeleteIcon.vue'
import SideBarComponent from '../../components/SideBarComponent.vue';
import SearchIcon from '../../components/icon/SearchIcon.vue';

const modalVisible = ref(false)
</script>

<style >
div[data-pc-section="box"] {
    display: none;
}
</style>