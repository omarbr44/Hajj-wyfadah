<template>
<div class="w-full border border-[#008093] rounded-xl">
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
                        <div class="bg-[#008093] py-2 px-1 flex justify-evenly items-center text-white w-48">
                            <div class="bg-white px-2 rounded-full text-[#008093]">4</div>
                            <span>كتابة الرسالة</span>
                            <span>></span>
                        </div>
                        <div class="bg-[#008093] py-2 px-1 flex justify-evenly items-center text-white w-48 rounded-xl rounded-s-none rounded-ee-3xl rounded-se-3xl ">
                            <div class="bg-white px-2 rounded-full text-[#008093]">5</div>
                            <span>جدولة الرسالة</span>
                            <span>></span>
                        </div>
                    </div>
                    <div class="">
                        <h1 class="text-center text-xl font-semibold text-[#008093] mt-10">جدولة الرسالة</h1>
                        <div class="flex justify-between items-center px-10 mt-10 w-f">
                            <div class="flex flex-col items-center gap-3 w-[40%]">
                                    <p class="text-site-dark-blue font-semibold mb-3 w-full text-right">الوقت</p>
                                    <VueDatePicker time-picker auto-apply />
                            </div>  
                            <div class="flex flex-col items-center gap-3 w-[40%]">
                                    <p class="text-site-dark-blue font-semibold mb-3 w-full text-right">التاريخ</p>
                                    <VueDatePicker format="MM/dd/yyyy" :enable-time-picker="false" auto-apply />
                            </div>  
                        </div>
                    </div>
                    <div v-show="!switchTagsToText" class="w-full flex justify-between text-2xl font-bold px-10 mt-40 mb-10">
                        <button @click="$emit('preStep')" class="text-site-text-grey">
                            السابق
                        </button>
                        <button class=" text-site-blue">
                            حفظ
                        </button>
                    </div>
                </div>
</template>

<script setup>
const emit = defineEmits(['nextStep'])

</script>
<style>
.dp__input {
    background: #f9f9f9 !important;
}
</style>
