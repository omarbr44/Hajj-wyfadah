<template>
<div class="w-full border border-[#008093] rounded-xl">
                    <div class="header mb-16 border-b border-[#DADADA] ml-4">
                        <div class="bg-[#008093] py-2 px-1 flex justify-evenly items-center text-white w-48 rounded-xl rounded-es-none rounded-ee-3xl rounded-se-3xl ">
                            <div class="bg-white px-2 rounded-full text-[#008093]">1</div>
                            <span>وسيلة الإرسال</span>
                            <span>></span>
                        </div>
                    </div>
                    <div class="">
                        <h1 class="text-center text-xl font-semibold text-[#008093]">نرجو منك اختيار الخيار الذي يتناسب مع نوع رسالتك</h1>
                        <h1 class="text-center text-2xl font-bold text-site-blue my-3">اختر وسيلة الإرسال التي تفضلها</h1>
                        <p class="text-center text-base text-site-text-grey">اختر وسيلة واحدة أو كلتاهما</p>
                        <div class="flex justify-between  items-center px-10 mt-10">
                            <div class="flex flex-col items-center gap-3 w-[40%]">
                                <div class="border border-[#DADADA] rounded-xl flex items-center justify-between px-5 h-14 w-full">
                                    <input type="checkbox" value="" v-model="trainStatusFilter" name="default-checkbox" class="w-5 h-5 text-site-blue bg-gray-100 border-gray-300 focus:text-site-blue focus:ring-site-blue">
                                    <h1 class="text-center font-semibold text-[#008093]">رسالة واتس اب</h1>
                                    <WhatsappIcon />
                                </div>
                                <p class="text-center text-sm text-site-text-grey">الحاج سيتلقى الرسالة مباشرة في تطبيق واتساب الخاص به</p>
                            </div>
                            <div class="flex flex-col items-center gap-3 w-[40%]">
                                <div class="border border-[#DADADA] rounded-xl flex items-center justify-between px-5 h-14 w-full">
                                    <input type="checkbox" value="" v-model="trainStatusFilter" name="default-checkbox" class="w-5 h-5 text-site-blue bg-gray-100 border-gray-300 focus:text-site-blue focus:ring-site-blue">
                                    <h1 class="text-center font-semibold text-[#008093]">رسالة SMS</h1>
                                    <SMSIcon />
                                </div>
                                <p class="text-center text-sm text-site-text-grey">الحاج سيستقبل رسالتك الموجهة له عبر الرسائل النصية (SMS)</p>
                            </div>  
                        </div>
                    </div>
                    <div class="w-full flex justify-end text-2xl font-bold px-10 mt-40 mb-10">
                        <button @click="$emit('nextStep')" class=" text-site-blue">
                            التالي
                        </button>
                    </div>
                </div>
</template>

<script setup>
import WhatsappIcon from '../icon/WhatsappIcon.vue';
import SMSIcon from '../icon/SMSIcon.vue';

const emit = defineEmits(['nextStep'])

</script>
