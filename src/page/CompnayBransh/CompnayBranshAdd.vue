<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div>
            <div class="rtl-d px-10 pt-28">
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
                        <Select v-model="bransh.city" :options="cities" optionLabel="name_ar" 
                                    placeholder="اختر المدينة" overlayClass="!bg-white rtl-d p-2" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
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
                            <LocationIcon />
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
                    <RouterLink to="/company-branshes" class="text-red-700 py-4 px-8 ">
                        إلغاء
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useGetRequest } from '../../composables/useRequest';
import DownloadIcon from '../../components/icon/DownloadIcon.vue';
import FileInputComponent from '../../components/Base/FileInputComponent.vue';
import Select from 'primevue/select';
import LocationIcon from '../../components/icon/LocationIcon.vue';

const bransh = ref({
    city: null
})
const cities = ref()
onMounted(async ()=>{
    const {Data, Error} = await useGetRequest('api/v1/city/')
    cities.value = Data.value.data
/*     nextPage.value = Data.value.data.next ? true : false
    previousPage.value = Data.value.data.previous ? true : false */
    loadPage.value = true
})
</script>

<style>

</style>