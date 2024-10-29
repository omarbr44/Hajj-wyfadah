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
                    <button class="flex items-center gap-2 mb-5">
                        <ArrowUpIcon />
                        <span class="text-site-text-grey">إظهارالمعلومات</span>
                        <!-- <ArrowUpIcon /> -->
                    </button>
                    <div class="hide-section flex flex-wrap gap-4 gap-y-10 w-full">
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
                            name="department-id" 
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
                    </div>
                </div>
            </div>
            <SideBarComponent />
        </div>
    </div>
</template>

<script setup>
import NavBarComponent from '../../components/Company/NavBarComponent.vue';
import SideBarComponent from '../../components/SideBarComponent.vue';
import ArrowUpIcon from '../../components/icon/ArrowUpIcon.vue';
import ArrowDownIcon from '../../components/icon/ArrowDownIcon.vue';


</script>

<style>
.dp__input {
    background: #f9f9f9 !important;
}
</style>