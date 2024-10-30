<template>
    <div>
        <NavBarComponent />
        <div class="flex justify-stretch">
            <div class="w-[80%] rtl-d px-10 bg-[#f9f9f9] pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">إضافة فرع جديد</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-4 gap-y-10">
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اسم الفرع <span class="text-red-500">*</span></p>
                        <input 
                        name="bransh-name" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال: جدة - Jeddah">
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">معلومات الفرع</p>
                        <input 
                        name="bransh-info" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال: خالد عبد الله">
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">المدينة<span class="text-red-500">*</span></p>
                        <Select v-model="fromCountry" :options="[1,2]" optionLabel="name" 
                                    placeholder="اختر المدينة" overlayClass="!bg-white rtl-d p-2" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                    :pt="{overlay:' shadow-xl'}">
                                    <template #value="slotProps">
                                        <span>جدة</span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="flex items-center gap-3 mb-3 cursor-pointer py-1 hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                            <div>جدة</div>
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
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">عنوان<span class="text-red-500">*</span></p>
                        <input 
                        name="bransh-city" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال : قاعة  Arabs Hall">
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">سعة التسجيل<span class="text-red-500">*</span></p>
                        <input 
                        name="bransh-city" 
                        type="number" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال: 1229">
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">رقم الواتس<span class="text-red-500">*</span></p>
                        <input 
                        name="bransh-city" 
                        type="number" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال: 59097867">
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">خط الطول لموقع الفرع <span class="text-red-500">*</span></p>
                        <input 
                        name="bransh-line" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="اضف خط الطول للموقع">
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">خط العرض لموقع الفرع <span class="text-red-500">*</span></p>
                        <input 
                        name="bransh-line" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="اضف خط العرض للموقع">
                    </div>
                </div>
                <h1 class="text-xl font-bold text-site-blue my-5">معلومات التجمع</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-4 gap-y-10">
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">عنوان التجمع</p>
                        <textarea
                         name=""
                         rows="10" 
                         class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                         placeholder="مثال: الدمام، طريق الملك فهد، جامع الفرقان    Dammam, King Fahad Road. AlFurqaan Masjed"
                        ></textarea>
                    </div>
                    <div class="w-[48%] flex flex-col gap-14">
                        <div class="relative" >
                            <p class="text-black font-semibold w-[50%] mb-3 mt-5">رابط التجمع</p>
                            <input 
                            name="link" 
                            type="text" 
                            class="w-full bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="اضف رابط التجمع من خرائط قوقل">
                            <svg class="absolute bottom-[10px] left-2 " width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 10.385 0.312 10.698 0.698 10.698H2.59C2.75273 12.4231 3.51216 14.0374 4.7374 15.2626C5.96263 16.4878 7.57691 17.2473 9.302 17.41V19.302C9.302 19.4871 9.37554 19.6647 9.50644 19.7956C9.63734 19.9265 9.81488 20 10 20C10.1851 20 10.3627 19.9265 10.4936 19.7956C10.6245 19.6647 10.698 19.4871 10.698 19.302V17.41C12.4231 17.2473 14.0374 16.4878 15.2626 15.2626C16.4878 14.0374 17.2473 12.4231 17.41 10.698H19.302C19.4871 10.698 19.6647 10.6245 19.7956 10.4936C19.9265 10.3627 20 10.1851 20 10C20 9.81488 19.9265 9.63734 19.7956 9.50644C19.6647 9.37554 19.4871 9.302 19.302 9.302H17.41C17.2473 7.57691 16.4878 5.96263 15.2626 4.7374C14.0374 3.51216 12.4231 2.75273 10.698 2.59V0.698C10.698 0.512879 10.6245 0.33534 10.4936 0.204439C10.3627 0.073539 10.1851 0 10 0C9.81488 0 9.63734 0.073539 9.50644 0.204439C9.37554 0.33534 9.302 0.512879 9.302 0.698V2.59C7.57691 2.75273 5.96263 3.51216 4.7374 4.7374C3.51216 5.96263 2.75273 7.57691 2.59 9.302H0.698C0.512879 9.302 0.33534 9.37554 0.204439 9.50644C0.073539 9.63734 0 9.81488 0 10ZM6.512 10C6.512 9.07492 6.87948 8.18774 7.53361 7.53361C8.18774 6.87948 9.07492 6.512 10 6.512C10.9251 6.512 11.8123 6.87948 12.4664 7.53361C13.1205 8.18774 13.488 9.07492 13.488 10C13.488 10.9251 13.1205 11.8123 12.4664 12.4664C11.8123 13.1205 10.9251 13.488 10 13.488C9.07492 13.488 8.18774 13.1205 7.53361 12.4664C6.87948 11.8123 6.512 10.9251 6.512 10Z" fill="#5FC1CF"/>
                            </svg>
                        </div>
                        <div>
                            <p class="text-black font-semibold w-[50%] mb-3">موعد التجمع</p>
                            <input 
                            name="time" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="مثال : 06 ذي الحجة 08:00 مساءا6th Dhul Hejja 08:00 pm">
                        </div>
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">خط الطول لموقع التجمع</p>
                        <input 
                        name="bransh-line" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="اضف خط الطول لموقع التجمع">
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">خط العرض لموقع التجمع</p>
                        <input 
                        name="bransh-line" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="اضف خط العرض لموقع التجمع">
                    </div>
                </div>
                <h1 class="text-xl font-bold text-site-blue my-5">معلومات الحملة التابعة للفرع</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-4 gap-y-10">
                    <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3 mt-5">اسم برنامج الحملة بالعربي</p>
                            <input 
                            name="arabic-name" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="مثال:  باقة الضيافة  1 (الخيام المطورة) ">
                    </div>
                    <div class="w-[48%]">
                            <p class="text-black font-semibold w-[50%] mb-3 mt-5">اسم برنامج الحملة بالانجليزي</p>
                            <input 
                            name="english-name" 
                            type="text" 
                            class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="مثال : Hospitality Package 1 (Upgraded Tents)">
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">معلومات برنامج الحملة بالعربي</p>
                        <textarea
                         name="arbic-program-name"
                         rows="5" 
                         class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                         placeholder="اضف المعلومات التي تخص تفاصيل برنامج الحملة باللغة العربية "
                        ></textarea>
                        <a href="" download class="flex gap-3 justify-end">
                            <p class=" text-site-blue">تنزيل ملف pdf</p>
                            <DownloadIcon />
                        </a>
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">معلومات برنامج الحملة بالانجليزي</p>
                        <textarea
                         name="english-program-name"
                         rows="5" 
                         class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                         placeholder="اضف المعلومات التي تخص تفاصيل برنامج الحملة باللغة الانجليزية"
                        ></textarea>
                        <a href="" download class="flex gap-3 justify-end">
                            <p class=" text-site-blue">تنزيل ملف pdf</p>
                            <DownloadIcon />
                        </a>
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">ملف برنامج الحملة</p>
                        <FileInputComponent />
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">صورة برنامج الحملة</p>
                        <FileInputComponent />
                    </div>
                </div>

                <div class="flex items-center justify-between my-10 text-lg font-bold">
                    <button class=" bg-site-blue text-white py-3 px-10 rounded-lg">إضافة</button>
                    <RouterLink to="company-branshes" class="text-red-700 py-4 px-8 ">
                        إلغاء
                    </RouterLink>
                </div>
            </div>
            <SideBarComponent />
        </div>
    </div>
</template>

<script setup>
import NavBarComponent from '../../components/Company/NavBarComponent.vue';
import SideBarComponent from '../../components/SideBarComponent.vue';
import DownloadIcon from '../../components/icon/DownloadIcon.vue';
import FileInputComponent from '../../components/Base/FileInputComponent.vue';
import Select from 'primevue/select';

</script>

<style>

</style>