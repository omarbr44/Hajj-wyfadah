<template>
    <div>
        <h1 class="text-xl font-bold text-site-blue mb-5">{{ type }}</h1>
        <div class=" w-full flex justify-center">
            <StepperComponent :edited="true" :removeTransform="true" :step="5" :stepsLabels="['الموقع' ,'المدينة' , 'الفندق', 'الجنس',  'التوزيع']" />
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
                        اسم  المجموعة
                    </div>
                    <div class="w-1/4 h-full text-center bg-site-blue flex items-center justify-center">
                        مجموعات مرتبطة
                    </div>
                    <div class="w-1/4 h-full text-center bg-site-blue flex items-center justify-center">
                        جنسية المجموعة
                    </div>
                    <div class="w-1/4 h-full text-center bg-site-blue flex items-center justify-center rounded-se-xl">
                        مجموع الاشخاص  
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
                        90
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
                <h1 class="text-2xl font-bold text-site-blue text-center"> الإناث بالغرف بفندق 199  وفقا لاسماء عوائلهم.</h1>
            </div>
        </template>
        <hr>
        <div class="w-full my-10 h-96 overflow-auto rules-section">
            <h1 class="text-xl font-bold text-site-blue mb-5">الغرف</h1>
            <div class="w-full flex items-center justify-center flex-wrap gap-4 gap-y-4">
                <div v-for="index in 12" class="w-[30%] flex flex-col items-center gap-4 rounded-lg py-4 text-site-dark-blue bg-site-blue bg-opacity-25">
                    <svg width="66" height="72" viewBox="0 0 66 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M53.3526 66.9087H14.9766V3.31875C14.9766 1.64123 16.2232 0.28125 17.7609 0.28125H50.5682C52.1059 0.28125 53.3526 1.64123 53.3526 3.31875V66.9087Z" fill="#F73737"/>
                    <path d="M28.9159 31.8384H21.675C20.1373 31.8384 18.8906 30.4784 18.8906 28.8009V8.95547C18.8906 7.27795 20.1373 5.91797 21.675 5.91797H28.9159C30.4536 5.91797 31.7003 7.27795 31.7003 8.95547V28.8009C31.7003 30.4784 30.4538 31.8384 28.9159 31.8384ZM49.4485 28.8009V8.95547C49.4485 7.27795 48.2018 5.91797 46.6641 5.91797H39.4232C37.8855 5.91797 36.6388 7.27795 36.6388 8.95547V28.8009C36.6388 30.4784 37.8855 31.8384 39.4232 31.8384H46.6641C48.2018 31.8384 49.4485 30.4784 49.4485 28.8009ZM31.7003 60.9793V47.422C31.7003 45.7445 30.4536 44.3845 28.9159 44.3845H21.675C20.1373 44.3845 18.8906 45.7445 18.8906 47.422V60.9793C18.8906 62.6568 20.1373 64.0168 21.675 64.0168H28.9159C30.4538 64.0168 31.7003 62.6568 31.7003 60.9793ZM49.4485 60.9793V47.422C49.4485 45.7445 48.2018 44.3845 46.6641 44.3845H39.4232C37.8855 44.3845 36.6388 45.7445 36.6388 47.422V60.9793C36.6388 62.6568 37.8855 64.0168 39.4232 64.0168H46.6641C48.2018 64.0168 49.4485 62.6568 49.4485 60.9793Z" fill="#C62424"/>
                    <path d="M46.516 41.8889C48.4363 41.8889 49.993 40.1907 49.993 38.0958C49.993 36.001 48.4363 34.3027 46.516 34.3027C44.5958 34.3027 43.0391 36.001 43.0391 38.0958C43.0391 40.1907 44.5958 41.8889 46.516 41.8889Z" fill="#FFB636"/>
                    <path d="M52.012 71.3342H16.3172C15.5768 71.3342 14.9766 70.6795 14.9766 69.8717V66.9082H53.3526V69.8717C53.3526 70.6793 52.7523 71.3342 52.012 71.3342Z" fill="#BFBCAF"/>
                    </svg>
                    <h1 class="text-2xl font-bold ">غرفة 99</h1>
                    <h1 class="text-lg font-bold ">احادية المتبقي : 1</h1>
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