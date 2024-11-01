<template>
    <div>
        <NavBarComponent />
        <div class="flex justify-stretch">
            <div class="w-[80%] rtl-d px-10 bg-[#f9f9f9] pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">إضافة موقع جديد</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-y-4">
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اسم الموقع <span class="text-red-500">*</span></p>
                        <input 
                        name="location-name" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder=" مثال : باقة ٩ العزيزية">
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">السعة<span class="text-red-500">*</span></p>
                        <input 
                        name="location-size" 
                        type="number" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال : 1032 ">
                    </div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">رقم المخيم<span class="text-red-500">*</span></p>
                        <input 
                        name="number" 
                        type="number" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال : 7121 ">
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">رقم الواتس<span class="text-red-500">*</span></p>
                        <input 
                        name="whatsnumber" 
                        type="number" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال : 56877869">
                    </div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">عدد الرجال</p>
                        <input 
                        name="man-number" 
                        type="number" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال : 99">
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">عدد النساء</p>
                        <input 
                        name="woman-number" 
                        type="number" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال : 99">
                    </div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">تحديد الإدارة</p>
                        <input 
                        name="managment-number" 
                        type="number" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال : 99">
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">تحديد الخدمات</p>
                        <input 
                        name="service-number" 
                        type="number" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="مثال : 88">
                    </div>
                    <div class="">
                        <p class="text-black font-semibold mb-3">هل يتوفر مع  هذا الموقع خدمة القطار ؟ </p>
                        <div class="flex items-center p-2">
                            <input
                            name="train-option" 
                            type="radio"
                            value="yes"
                            class="relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl size-4">
                            <label class="ml-5 mr-2" >نعم</label>
                            <input 
                            name="train-option" 
                            type="radio"
                            value="no"
                            class="relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl size-4">
                            <label class="mr-2">لا</label>

                        </div>
                    </div>
                </div>
                <h1 class="text-xl font-bold text-site-blue my-5">موقع منى</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-y-4">
                    <div class="w-[45%]">
                        <div class="relative" >
                            <p class="text-black font-semibold w-[50%] mb-3 mt-5">رابط موقع منى</p>
                            <input 
                            name="link" 
                            type="text" 
                            class="w-full bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="اضف رابط الموقع من خرائط قوقل">
                            <LocationIcon />
                        </div>
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">عنوان منى</p>
                        <textarea
                         name=""
                         rows="6" 
                         class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                         placeholder="مثال : مخيم رقم D19 (6-5) فئة (هـ) مقابل محطة مزدلفة 3
Camp No. ( D19 ) (6-5) (E)Opposite Muzdalifah Train Station No.3"
                        ></textarea>
                    </div>
                </div>
                <h1 class="text-xl font-bold text-site-blue my-5">موقع عرفة</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-y-4">
                    <div class="w-[45%]">
                        <div class="relative" >
                            <p class="text-black font-semibold w-[50%] mb-3 mt-5">رابط موقع عرفة</p>
                            <input 
                            name="link" 
                            type="text" 
                            class="w-full bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="اضف رابط الموقع من خرائط قوقل">
                            <LocationIcon />
                        </div>
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">عنوان عرفة</p>
                        <textarea
                         name=""
                         rows="6" 
                         class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                         placeholder="مثال : مخيم Camp No. ( D19 ) (6-5) (E)Opposite Muzdalifah Train Station No.3"
                        ></textarea>
                    </div>
                </div>
                <h1 class="text-xl font-bold text-site-blue my-5">موقع مزدلفة</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-y-4">
                    <div class="w-[45%]">
                        <div class="relative" >
                            <p class="text-black font-semibold w-[50%] mb-3 mt-5">رابط موقع مزدلفة</p>
                            <input 
                            name="link" 
                            type="text" 
                            class="w-full bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                            placeholder="اضف رابط الموقع من خرائط قوقل">
                            <LocationIcon />
                        </div>
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">عنوان مزدلفة</p>
                        <textarea
                         name=""
                         rows="6" 
                         class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                         placeholder="مثال : مخيم Camp No. ( D19 ) (6-5) (E)Opposite Muzdalifah Train Station No.3"
                        ></textarea>
                    </div>
                </div>
                <div class="flex items-center justify-between my-10 text-lg font-bold">
                    <button class=" bg-site-blue text-white py-3 px-10 rounded-lg">إضافة</button>
                    <RouterLink to="/company-locations" class="text-red-700 py-4 px-8 ">
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
import LocationIcon from '../../components/icon/LocationIcon.vue';

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