<template>
<div class="w-full border border-[#008093] rounded-xl mb-5">
    <div class="header mb-3 border-b border-[#DADADA] ml-4 flex ">
                        <div class="bg-[#008093] py-2 px-1 flex justify-evenly items-center text-white w-48 rounded-ss-xl">
                            <div class="bg-white px-2 rounded-full text-[#008093]">1</div>
                            <span>وسيلة الإرسال</span>
                            <span>></span>
                        </div>
                        <div class="bg-[#008093] py-2 px-1 flex justify-evenly items-center text-white w-52">
                            <div class="bg-white px-2 rounded-full text-[#008093]">2</div>
                            <span>تحديد نوع المستلمين</span>
                            <span>></span>
                        </div>
                        <div class="bg-[#008093] py-2 px-1 flex justify-evenly items-center text-white w-48">
                            <div class="bg-white px-2 rounded-full text-[#008093]">3</div>
                            <span>تحديد الحاج</span>
                            <span>></span>
                        </div>
                        <div class="bg-[#008093] py-2 px-1 flex justify-evenly items-center text-white w-48 rounded-xl rounded-s-none rounded-ee-3xl rounded-se-3xl ">
                            <div class="bg-white px-2 rounded-full text-[#008093]">4</div>
                            <span>كتابة الرسالة</span>
                            <span>></span>
                        </div>
                    </div>
                    <div class="px-4">
                        <h1 class=" text-lg font-semibold text-[#008093]">عدد الاشخاص المرسل إليهم الرسالة :<span class="text-site-blue">90 شخص</span></h1>
                        <div class="flex w-full justify-between items-center my-3">
                            <p class=" font-semibold text-site-blue">محتوى الرسالة</p>
                            <p class="">المتبقي من الرصيد : 2325</p>
                        </div>
                        <div class=" flex items-center flex-wrap gap-3 px-3 py-4 w-full bg-white border border-site-blue rounded-2xl rounded-b-none">
                            <p class="font-semibold" >اضف ما يلي الى رسالة</p>
                            <div v-show="!hajjStatus" class="bg-site-blue py-1 px-2 flex justify-evenly items-center text-white w-40 rounded-full">
                                <button @click="toggleTag('add')" class="bg-white px-2 rounded-full text-site-blue text-3xl pb-1" style="line-height: 1;">+</button>
                                <span>اسم الحاج</span>
                                <span></span>
                            </div>
                            <div v-show="!checkoutNumber" class="bg-site-blue py-1 px-2 flex justify-evenly items-center text-white w-40 rounded-full">
                                <button @click="toggleTag('add','checkoutNumber')" class="bg-white px-2 rounded-full text-site-blue text-3xl pb-1" style="line-height: 1;">+</button>
                                <span>رقم الحجز</span>
                                <span></span>
                            </div>
                            <div v-show="!companyName" class="bg-site-blue py-1 px-2 flex justify-evenly items-center text-white w-40 rounded-full">
                                <button @click="toggleTag('add','companyName')" class="bg-white px-2 rounded-full text-site-blue text-3xl pb-1" style="line-height: 1;">+</button>
                                <span>اسم الشركة</span>
                                <span></span>
                            </div>
                            <div v-show="!webLink" class="bg-site-blue py-1 px-2 flex justify-evenly items-center text-white w-56 rounded-full">
                                <button @click="toggleTag('add','webLink')" class="bg-white px-2 rounded-full text-site-blue text-3xl pb-1" style="line-height: 1;">+</button>
                                <span>رابط الموقع الالكتروني</span>
                                <span></span>
                            </div>
                            <div class="w-[45%]">
                                <Select v-model="fromCountry" :options="['رسالة الترحيب','توجيهات يوم عرفة','معلومات الإعاشة']" optionLabel="name" 
                                    placeholder="" overlayClass="!bg-white rtl-d p-2" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                    :pt="{overlay:' shadow-xl'}">
                                    <template #value="slotProps">
                                        <span class=" text-site-blue">اختار رسالة من قوالب الرسائل الجاهزة</span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="cursor-pointer py-2 px-1 w-full hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                            <div class="mb-1">{{ slotProps.option }}</div>
                                            <hr>
                                        </div>
                                    </template>
                                    <template #dropdownicon>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                        </svg>
                                    </template>
                                    <template #header>
                                        <div class="font-medium text-lg p-1 mb-2">القوالب الجاهزة</div>
                                        <hr>
                                    </template>
                        </Select>
                            </div>
                            <div v-show="!email" class="bg-site-blue py-1 px-2 flex justify-evenly items-center text-white w-48 rounded-full">
                                <button @click="toggleTag('add','email')" class="bg-white px-2 rounded-full text-site-blue text-3xl pb-1" style="line-height: 1;">+</button>
                                <span>البريد الالكتروني</span>
                                <span></span>
                            </div>
                            <div v-show="!footer" class="bg-site-blue py-1 px-2 flex justify-evenly items-center text-white w-48 rounded-full">
                                <button @click="toggleTag('add','footer')" class="bg-white px-2 rounded-full text-site-blue text-3xl pb-1" style="line-height: 1;">+</button>
                                <span>خاتمة الرسالة</span>
                                <span></span>
                            </div>
                        </div>
                        <div class="bg-white border border-[#DADADA]">
                            <div class="p-2">
                                <div v-show="hajjStatus && !switchTagsToText" class=" relative bg-site-blue text-white rounded-3xl px-6 py-2 mb-2 w-fit">
                                <span>حالة الحاج</span>
                                <span @click="toggleTag('remove')" class="cursor-pointer absolute top-0 right-0 bg-red-600 rounded-full flex justify-center items-center text-white px-[5px] py-0" style="line-height: 1.2;">x</span>
                            </div>
                            <p v-show="hajjStatus && switchTagsToText" class="text-[#008093] font-semibold my-1">الى الحاج: خالد</p>
                            <div v-show="checkoutNumber && !switchTagsToText" class=" relative bg-site-blue text-white rounded-3xl px-6 py-2 mb-2 w-fit">
                                <span>رقم الحجز</span>
                                <span @click="toggleTag('remove','checkoutNumber')" class="cursor-pointer absolute top-0 right-0 bg-red-600 rounded-full flex justify-center items-center text-white px-[5px] py-0" style="line-height: 1.2;">x</span>
                            </div>
                            <p v-show="checkoutNumber && switchTagsToText" class="text-[#008093] font-semibold my-1">رقم الحجز: 638987 </p>
                            <div v-show="companyName && !switchTagsToText" class=" relative bg-site-blue text-white rounded-3xl px-6 py-2 mb-2 w-fit">
                                <span>اسم الشركة</span>
                                <span @click="toggleTag('remove','companyName')" class="cursor-pointer absolute top-0 right-0 bg-red-600 rounded-full flex justify-center items-center text-white px-[5px] py-0" style="line-height: 1.2;">x</span>
                            </div>
                            <p v-show="companyName && switchTagsToText" class="text-[#008093] font-semibold my-1">الى حجاج شركة الابرار</p>
                            <div v-show="webLink && !switchTagsToText" class=" relative bg-site-blue text-white rounded-3xl px-6 py-2 mb-2 w-fit">
                                <span>رابط الموقع الالكتروني</span>
                                <span @click="toggleTag('remove','webLink')" class="cursor-pointer absolute top-0 right-0 bg-red-600 rounded-full flex justify-center items-center text-white px-[5px] py-0" style="line-height: 1.2;">x</span>
                            </div>
                            <p v-show="webLink && switchTagsToText" class="text-[#008093] font-semibold my-1">wwww.aa.com</p>
                            </div>
                            <textarea v-model="textareaValue" 
                                      class="text-black w-full min-h-96 p-5 rules-section"
                            >
                            </textarea>
                            <div class="bg-white p-2">
                            <div v-show="email && !switchTagsToText" class=" relative bg-site-blue text-white rounded-3xl px-6 py-2 mb-2 w-fit">
                                <span>البريد الالكتروني</span>
                                <span @click="toggleTag('remove','email')" class="cursor-pointer absolute top-0 right-0 bg-red-600 rounded-full flex justify-center items-center text-white px-[5px] py-0" style="line-height: 1.2;">x</span>
                            </div>
                            <p v-show="email && switchTagsToText" class="text-[#008093] font-semibold my-1">البريد الاكتروني : mail@mail.com</p>
                            <div v-show="footer && !switchTagsToText" class=" relative bg-site-blue text-white rounded-3xl px-6 py-2 mb-2 w-fit">
                                <span>خاتمة الرسالة</span>
                                <span @click="toggleTag('remove','footer')" class="cursor-pointer absolute top-0 right-0 bg-red-600 rounded-full flex justify-center items-center text-white px-[5px] py-0" style="line-height: 1.2;">x</span>
                            </div>
                            <p v-show="footer && switchTagsToText" class="text-[#008093] font-semibold my-1"> في حال كانت هناك أي استفسارات أو طلبات إضافية، فلا تترددوا في التواصل معنا مع اطيب التحيات.</p>
                            </div>
                        </div>
                        <div class="flex w-full justify-end my-3">
                            <p class=" text-[#DADADA]">عدد الاحرف في الرسالة (0)</p>
                        </div>
                    </div>
                    <div v-show="!switchTagsToText" class="w-full flex justify-between text-2xl font-bold px-10 mt-40 mb-10">
                        <button @click="$emit('preStep')" class="text-site-text-grey">
                            السابق
                        </button>
                        <button @click="switchTagsToText = true" class=" text-site-blue">
                            التالي
                        </button>
                    </div>
                    <div v-show="switchTagsToText" class="w-full flex justify-between text-2xl font-bold px-10 mt-40 mb-10">
                        <button @click="switchTagsToText = false" class="text-site-text-grey">
                            السابق
                        </button>
                        <button @click="switchTagsToText = true" class=" text-site-blue">
                            التأكيد والارسال
                        </button>
                    </div>
                </div>
</template>

<script setup>
import Select from 'primevue/select';
import { ref } from 'vue';

const emit = defineEmits(['nextStep'])
const hajjStatus = ref(false)
const companyName = ref(false)
const webLink = ref(false)
const email = ref(false)
const footer = ref(false)
const checkoutNumber = ref(false)
const textareaValue = ref('')
const switchTagsToText = ref(false)

const toggleTag = (state,value = 'hajjStatus') => {
    if(state == 'add') {
        if(value == 'email') {
            email.value = true
            return
        }      
        else if(value == 'footer') {
            footer.value = true
            return
        }   
        if(value == 'hajjStatus')     
            hajjStatus.value = true
        else if(value == 'checkoutNumber')     
            checkoutNumber.value = true
        else if(value == 'webLink')     
            webLink.value = true
        else if(value == 'companyName')     
            companyName.value = true
    }
    else {
        if(value == 'email') {
            email.value = false
            return
        }   
        else if(value == 'footer') {
            footer.value = false
            return
        } 
        if(value == 'hajjStatus')     
            hajjStatus.value = false
        else if(value == 'checkoutNumber')     
            checkoutNumber.value = false
        else if(value == 'webLink')     
            webLink.value = false
        else if(value == 'companyName')     
            companyName.value = false
    }
}

</script>
<style>
.rules-section::-webkit-scrollbar {
            width: 15px;
        }
.rules-section::-webkit-scrollbar-track {
            border-radius: 2px;
            background-color: none;
        }
.rules-section::-webkit-scrollbar-thumb {
            cursor: auto;
            border-radius: 8px;
            border: 3px solid transparent;
            background-clip: content-box;
            background-color: #48b4c3;
        }
</style>
