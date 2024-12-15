<template>
    <div>
        <h1 class="text-xl font-bold text-site-blue mb-5">{{ type }}</h1>
        <div class=" w-full flex justify-center">
            <StepperComponent :edited="true" :step="4" :stepsLabels="['التوزيع' ,'الجنس' , 'مكان الخيمة' , 'الموقع']" />
        </div>
        <hr>
        <template v-if="type == 'التوزيع اليدوي'">
            <div  class="w-full">
                <Select v-model="departmentObj" :options="[23443234,2345433]" optionLabel="name_ar" 
                                            placeholder="اختر مجموعة من القائمة" overlayClass="!bg-white rtl-d p-2" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                            :pt="{overlay:' shadow-xl'}">
                                            <template #value="slotProps">
                                                <span v-if="slotProps.value">{{ slotProps.value.name_ar }}</span>
                                            </template>
                                            <template #option="slotProps">
                                                <div class="flex items-center gap-3 mb-3 cursor-pointer py-1 hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                                    <div>{{ slotProps.option }}</div>
                                                    <!-- <div>{{ slotProps.option.name_ar }}</div> -->
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
            <div class="w-full mt-10">
                <h1 class="text-xl font-bold text-site-blue mb-5">المجموعة</h1>
                <div class="w-full flex items-center gap-[1px] text-white h-12 font-bold">
                    <div class="w-1/4 h-full text-center bg-site-blue flex items-center justify-center rounded-ss-xl">
                        اسم المجموعة
                    </div>
                    <div class="w-1/4 h-full text-center bg-site-blue flex items-center justify-center">
                        مجموعات مرتبطة
                    </div>
                    <div class="w-1/4 h-full text-center bg-site-blue flex items-center justify-center">
                        مجموع الأشخاص
                    </div>
                    <div class="w-1/4 h-full text-center bg-site-blue flex items-center justify-center rounded-se-xl">
                        جنسية المجموعة
                    </div>
                </div>
                <div class="w-full flex items-center text-white h-12 font-bold">
                    <div class="w-1/4 h-full text-center bg-site-dark-blue flex justify-center items-center rounded-es-xl">
                        2255778
                    </div>
                    <div class="w-1/4 h-full text-center bg-site-dark-blue flex justify-center items-center">
                        لا يوجد
                    </div>
                    <div class="w-1/4 h-full text-center bg-site-dark-blue flex justify-center items-center">
                        30
                    </div>
                    <div class="w-1/4 h-full text-center bg-site-dark-blue flex justify-center items-center rounded-ee-xl">
                        اردني / فلسطيني بوثيقة مصرية
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <div  class="w-full py-8">
                <h1 class="text-2xl font-bold text-site-blue text-center mb-5">سيتم توزيع حجاج باقة ( 4) العزيزية التابعين لمدينة جدة من</h1>
                <h1 class="text-2xl font-bold text-site-blue text-center"> الإناث في خيام منى وفقا لاسماء عوائلهم.</h1>
            </div>
        </template>
        <hr>
        <div class="w-full my-10 h-96 overflow-auto rules-section">
            <h1 class="text-xl font-bold text-site-blue mb-5">الخيام</h1>
            <div class="w-full flex items-center justify-center flex-wrap gap-4 gap-y-4">
                <div v-for="index in 12" class="w-[30%] flex flex-col items-center gap-4 rounded-lg py-4 text-site-dark-blue bg-site-blue bg-opacity-25">
                    <svg width="61" height="81" viewBox="0 0 61 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.9685 39.2793L32.5 74.489L37.2227 76.0394L47.3545 75.223L46.8636 52.4861L40.9685 39.2793Z" fill="#2F2F2F"/>
                        <path d="M17.0335 28.0275C16.4045 28.6539 14.8842 35.8553 11.2004 45.7146C7.51656 55.5738 2.78906 68.6224 2.78906 68.6224C2.78906 68.6224 3.34187 69.6792 10.3378 73.0268C17.3337 76.3743 23.1145 77.8425 23.1145 77.8425C23.1145 77.8425 38.698 45.6323 38.822 44.9046C38.9459 44.1705 41.4335 30.7422 41.4335 30.7422C41.4335 30.7422 31.5163 29.8246 27.2177 29.3374C22.9191 28.8501 17.7674 27.2934 17.0335 28.0275Z" fill="#F19F40"/>
                        <path d="M52.6109 75.1527L57.8436 73.9693C57.8436 73.9693 53.016 60.56 50.3759 53.7952C47.7357 47.0305 43.1798 32.672 42.7509 31.6152C42.322 30.5584 40.5396 30.0648 39.7438 31.9442C38.9479 33.8237 32.3046 53.1814 31.056 56.2759C29.6502 59.7563 22.6638 76.8992 22.6018 77.7978C22.5399 78.6964 34.3634 77.2093 34.3634 77.2093L37.4134 65.2808L41.0972 44.0879L41.712 44.2524L44.6571 61.5345L52.6109 75.1527Z" fill="#EC5F32"/>
                        <path d="M37.8041 76.6462C37.6993 77.4688 34.5826 78.1839 32.8098 78.2345C31.0322 78.2915 27.8535 78.456 27.4818 77.9055C27.1101 77.3549 31.4849 72.2038 34.2966 65.458C37.1036 58.7123 38.7573 54.0548 39.1671 52.188C39.5817 50.3212 40.4062 44.7334 40.735 43.7969C41.0638 42.8603 41.7262 43.0312 41.9312 43.9044C42.1361 44.7841 44.2854 55.5862 45.0288 58.1617C45.7723 60.7373 48.827 66.1098 49.7373 67.8121C50.6475 69.5144 55.1463 74.0453 55.2273 74.4819C55.3083 74.9186 52.4441 76.2538 50.495 76.5512C49.0987 76.7601 45.8438 76.4373 45.5959 75.8868C45.3481 75.3362 43.6659 60.7373 43.0463 55.8583C42.4268 50.9793 41.3545 44.455 41.3545 44.455C41.3545 44.455 38.9193 60.1361 38.5857 64.3063C38.2569 68.4766 37.9662 75.3299 37.8041 76.6462ZM2 62.3446C2 62.3446 2.34789 61.8637 3.00555 61.8067C3.6632 61.7561 4.24461 62.2876 4.24461 62.2876L4.66875 70.4003C4.66875 70.4003 4.16359 70.9888 3.54406 70.9888C2.92453 70.9888 2.34313 70.5585 2.34313 70.5585L2 62.3446ZM19.7567 70.5016C19.7567 70.5016 20.2952 69.9004 21.1197 69.9004C21.9441 69.9004 22.5637 70.4509 22.5637 70.4509L22.6066 78.6775C22.6066 78.6775 21.9441 79.1711 21.4485 79.1711C20.9529 79.1711 20.1666 78.842 20.1666 78.842L19.7567 70.5016ZM56.7094 66.8882C56.7094 66.8882 57.1526 66.2048 57.9389 66.2554C58.7252 66.306 59.1541 66.6667 59.1541 66.6667L58.7824 75.1084C58.7824 75.1084 58.4917 75.659 57.7912 75.659C57.0906 75.659 56.4711 75.2223 56.4711 75.2223L56.7094 66.8882Z" fill="#9C2D1B"/>
                    </svg>
                    <h1 class="text-2xl font-bold "> خيمة 3</h1>
                    <h1 class="text-lg font-bold "> المتبقي من السعة : 9</h1>
                </div>
            </div>
        </div>
        <hr>
        <div class="w-full flex justify-between text-2xl font-bold px-10 mt-20 mb-10">
            <button @click="$emit('preStep')" class=" text-[#CECFD9]">
                السابق
            </button>
            <button @click="$emit('nextStep')" class=" text-site-blue">
                اتمام التوزيع
            </button>
        </div>
    </div>
</template>

<script setup>
import StepperComponent from '../StepperComponent.vue';
import Select from 'primevue/select';

const emit = defineEmits(['nextStep','preStep'])
defineProps({
    type: {default: 'التوزيع اليدوي'},
})
</script>

<style scoped>

</style>