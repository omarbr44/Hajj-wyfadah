<template>
<div class="w-full border border-[#008093] rounded-xl">
                    <div class="header mb-16 border-b border-[#DADADA] ml-4 flex ">
                        <div class="bg-[#008093] py-2 px-1 flex justify-evenly items-center text-white w-48 rounded-ss-xl">
                            <div class="bg-white px-2 rounded-full text-[#008093]">1</div>
                            <span>وسيلة الإرسال</span>
                            <span>></span>
                        </div>
                        <div class="bg-[#008093] py-2 px-1 flex justify-evenly items-center text-white w-52 rounded-xl rounded-s-none rounded-ee-3xl rounded-se-3xl ">
                            <div class="bg-white px-2 rounded-full text-[#008093]">2</div>
                            <span>تحديد نوع المستلمين</span>
                            <span>></span>
                        </div>
                    </div>
                    <div class="">
                        <div class="flex justify-between  items-center px-10 mt-32">
                            <div class="flex flex-col items-center gap-3 w-[45%]">
                                <div class="border border-[#DADADA] rounded-xl flex items-center justify-between px-5 h-14 w-full">
                                    <input id="default-radio-1" type="radio" value="1" v-model="nextPage" name="default-radio" class="radio-input">
                                    <h1 class="text-center font-semibold text-[#008093]">خاصة تستهدف حاج معين</h1>
                                    <HajjIcon />
                                </div>
                                <p class="text-center text-sm text-site-text-grey">حدد هذا الخيار لإرسال رسالة شخصية موجهة لحاج معين</p>
                            </div>
                            <div class="flex flex-col items-center gap-3 w-[45%]">
                                <div class="border border-[#DADADA] rounded-xl flex items-center justify-between px-5 h-14 w-full">
                                    <input id="default-radio-1" type="radio" value="2" v-model="nextPage" name="default-radio" class="radio-input">
                                    <h1 class="text-center font-semibold text-[#008093]">عامة تستهدف مجموعة من الحجاج</h1>
                                    <HajjsIcon />
                                </div>
                                <p class="text-center text-sm text-site-text-grey">اختر هذا الخيار لإرسال رسالتك إلى مجموعة كبيرة من الحجاج</p>
                            </div>  
                        </div>
                    </div>
                    <div class="w-full flex justify-between text-2xl font-bold px-10 mt-40 mb-10">
                        <button @click="$emit('preStep')" class="text-site-text-grey">
                            السابق
                        </button>
                        <button @click="$emit('nextStep',nextPage)" class=" text-site-blue">
                            التالي
                        </button>
                    </div>
                </div>
</template>

<script setup>
import { ref } from 'vue';
import HajjIcon from '../icon/HajjIcon.vue';
import HajjsIcon from '../icon/HajjsIcon.vue';

const nextPage = ref(1)
const emit = defineEmits(['nextStep','preStep'])

</script>
