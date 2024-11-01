<template>
    <div>
        <NavBarComponent />
        <div class="flex justify-stretch">
            <div class="w-[80%] rtl-d px-10 bg-[#f9f9f9] pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">معلومات الإدارة</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap">
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اسم الإدارة <span class="text-red-500">*</span></p>
                        <input 
                        name="department-name" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال: نقل السيارات">
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اسم مدير الإدارة <span class="text-[#DADADA]">( اختياري )</span></p>
                        <input 
                        name="department-manager-name" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال: خالد عبد الله">
                    </div>
                </div>
                <h1 class="text-xl font-bold text-site-blue my-5">معلومات مدير الإدارة <span class="text-[#DADADA]">( اختياري )</span></h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl">
                    <button @click="toggleSection" class="flex items-center gap-2 mb-5">
                        <ArrowUpIcon v-show="sectioIsHide" />
                        <span v-show="sectioIsHide" class="text-site-text-grey">إظهارالمعلومات</span>
                        <ArrowDownIcon v-show="!sectioIsHide" />
                        <span v-show="!sectioIsHide" class="text-site-text-grey">إخفاءالمعلومات</span>
                    </button>
                    <div ref="hideSection" class="h-0 flex flex-wrap gap-4 gap-y-10 w-full overflow-hidden">
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3"> رقم الجوال <span class="text-red-500">*</span></p>
                            <input 
                            name="department-phone" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="مثال: 509873476">
                        </div>
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3">البريد الإلكتروني <span class="text-red-500">*</span></p>
                            <input 
                            name="department-email" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="مثال: mail@gmail.com">
                        </div>
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3">رقم الهوية  <span class="text-red-500">*</span></p>
                            <input 
                            name="department-id" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="مثال: 1090875684">
                        </div>
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3">الراتب <span class="text-[#DADADA]">( اختياري )</span></p>
                            <input 
                            name="salary" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="مثال: 1090875684">
                        </div>
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3">تاريخ البدء <span class="text-[#DADADA]">( اختياري )</span></p>
                            <VueDatePicker v-model="date"></VueDatePicker>
                        </div>
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3">تاريخ الانتهاء <span class="text-[#DADADA]">( اختياري )</span></p>
                            <VueDatePicker v-model="date"></VueDatePicker>
                        </div>
                        <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3">العنوان <span class="text-[#DADADA]">( اختياري )</span></p>
                            <input 
                            name="address" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="مثال : رقم المبنى (8782)، نهاوند، الواحة">
                        </div>
                        <div class="flex gap-2 items-center w-[48%]">
                        <p class="text-black font-semibold w-[50%]">صورة الموظف <span class="text-red-500">*</span></p>
                        <FileInputComponent />
                        </div>
                    </div>
                </div>
                <div class="mt-5">
                    <h1 class="text-xl font-bold text-site-blue mb-5">الموظفين التابعين للإدارة الجديدة  ( اختياري ) </h1>
                    <FileInputComponent />
                    <div class="flex items-center justify-between mt-2">
                        <p class="text-site-blue text-sm">- ارفع ملف بصيغة Excel يتضمن بيانات جميع الموظفين التابعين للإدارة الجديدة</p>
                        <a href="" download class="flex gap-3">
                            <p class=" text-site-blue">تنزيل ملف اكسيل للتعبئة</p>
                            <DownloadIcon />
                        </a>
                    </div>
                </div>
                <div class="flex items-center justify-between my-10 text-lg font-bold">
                    <button class=" bg-site-blue text-white py-3 px-10 rounded-lg">إضافة</button>
                    <RouterLink to="/company-departments" class="text-red-700 py-4 px-8 ">
                        إلغاء
                    </RouterLink>
                </div>
            </div>
            <SideBarComponent />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBarComponent from '../../components/Company/NavBarComponent.vue';
import SideBarComponent from '../../components/SideBarComponent.vue';
import ArrowUpIcon from '../../components/icon/ArrowUpIcon.vue';
import ArrowDownIcon from '../../components/icon/ArrowDownIcon.vue';
import DownloadIcon from '../../components/icon/DownloadIcon.vue';
import FileInputComponent from '../../components/Base/FileInputComponent.vue';

const hideSection = ref(null)
const sectioIsHide = ref(true)
const toggleSection = () => {
    if(hideSection.value.classList.contains('h-0')) {
        hideSection.value.classList.add('h-auto')
        hideSection.value.classList.remove('h-0')
        sectioIsHide.value = false
    }
    else {
        hideSection.value.classList.add('h-0')
        hideSection.value.classList.remove('h-auto')
        sectioIsHide.value = true
    }
}
</script>

<style>
.dp__input {
    background: #f9f9f9 !important;
}
</style>