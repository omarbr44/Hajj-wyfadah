<template>
    <div>
        <h1 class="text-xl font-bold text-site-blue mb-5">{{ type }}</h1>
        <div class=" w-full flex justify-center">
            <StepperComponent :edited="true" :step="4" :stepsLabels="['الموقع' ,'المدينة' , 'توزيع الرحلات']" />
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
                <h1 class="text-xl font-bold text-site-blue mb-5">المجموعات التابعة للرحلة</h1>
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
                <h1 class="text-2xl font-bold text-site-blue text-center mb-5">سيتم توزيع حجاج باقة ( 4) العزيزية في مدينة جدة</h1>
                <h1 class="text-2xl font-bold text-site-blue text-center">في الرحلات وفقا لاسماء عوائلهم.</h1>
            </div>
        </template>
        <hr>
        <div class="w-full my-10 h-96 overflow-auto rules-section">
            <h1 class="text-xl font-bold text-site-blue mb-5">الرحلات</h1>
            <div class="w-full flex items-center justify-center flex-wrap gap-4 gap-y-4">
                <div v-for="index in 12" class="w-[30%] flex flex-col items-center gap-4 rounded-lg py-4 text-site-dark-blue bg-site-blue bg-opacity-25">
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M64.8024 44.0008L63.7024 43.4008C63.3024 43.2008 63.1024 42.8008 63.2024 42.4008C63.5024 40.5008 63.7024 33.9008 53.5024 30.9008C53.3024 30.8008 53.1024 30.8008 52.9024 30.8008L33.3024 30.9008C32.9024 30.9008 32.5024 31.0008 32.2024 31.2008L21.9024 38.1008C21.7024 38.2008 21.5024 38.3008 21.3024 38.3008C19.4024 38.2008 17.6024 38.4008 15.7024 38.7008C10.3024 39.8008 8.10236 42.7008 7.30236 44.2008C7.10236 44.5008 7.10236 44.9008 7.10236 45.2008C7.20236 47.6008 5.60236 50.3008 8.00236 52.5008L27.4024 52.4008L47.8024 51.9008L63.9024 51.7008C64.8024 51.6008 66.3024 50.3008 66.7024 49.5008C68.4024 46.8008 65.0024 44.1008 64.8024 44.0008Z" fill="#EA5A47"/>
<path d="M17.2969 46.4004C15.0969 46.4004 13.2969 48.2004 13.2969 50.4004C13.2969 52.6004 15.0969 54.4004 17.2969 54.4004C19.4969 54.4004 21.2969 52.6004 21.2969 50.4004C21.2969 48.2004 19.4969 46.4004 17.2969 46.4004ZM57.0969 46.4004C54.8969 46.4004 53.0969 48.2004 53.0969 50.4004C53.0969 52.6004 54.8969 54.4004 57.0969 54.4004C59.2969 54.4004 61.0969 52.6004 61.0969 50.4004C61.0969 48.2004 59.2969 46.4004 57.0969 46.4004Z" fill="#9B9B9A"/>
<path d="M56.1016 39.3008V35.0008C56.1016 34.1008 55.3016 33.3008 54.4016 33.3008H33.2016C33.1016 33.3008 33.0016 33.3008 33.0016 33.4008L25.0016 39.1008C24.8016 39.2008 24.8016 39.5008 24.9016 39.7008C25.0016 39.8008 25.1016 39.9008 25.2016 39.9008C30.8016 39.9008 52.4016 39.7008 55.6016 39.8008C55.9016 39.8008 56.1016 39.6008 56.1016 39.3008C56.1016 39.4008 56.1016 39.4008 56.1016 39.3008Z" fill="#92D3F5"/>
<path d="M8.89687 40.5L12.8969 42.1L10.7969 45L5.79688 45.1L8.89687 40.5Z" fill="#FCEA2B"/>
<path d="M47.6 51.0004L27 51.4004M8.1 51.4004C7.2 51.2004 6.4 50.9004 6.3 50.4004C6.2 49.4004 6 46.6004 6 45.3004C6 44.8004 6.1 44.2004 6.4 43.8004C7.5 41.8004 11.2 37.0004 21.3 37.4004L31.6 30.5004C32.1 30.2004 32.7 30.0004 33.2 30.0004L52.8 29.9004C53.1 29.9004 53.4 29.9004 53.7 30.0004C55.9 30.6004 65.4 34.0004 64.1 42.6004L65.2 43.2004C65.7 43.4004 66.1 43.9004 66.2 44.4004C66.6 45.8004 66.5 47.3004 66 48.7004" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.8984 39.9012L55.0984 39.7012V35.2012" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.2969 55.4004C20.0583 55.4004 22.2969 53.1618 22.2969 50.4004C22.2969 47.639 20.0583 45.4004 17.2969 45.4004C14.5355 45.4004 12.2969 47.639 12.2969 50.4004C12.2969 53.1618 14.5355 55.4004 17.2969 55.4004Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M57.1016 55.4004C59.863 55.4004 62.1016 53.1618 62.1016 50.4004C62.1016 47.639 59.863 45.4004 57.1016 45.4004C54.3401 45.4004 52.1016 47.639 52.1016 50.4004C52.1016 53.1618 54.3401 55.4004 57.1016 55.4004Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.2969 42.9012L10.4969 45.1011L6.79688 45.0012M18.2649 27.8642C19.9499 23.1642 23.8729 19.3621 29.0789 18.0531C31.2958 17.4931 33.6093 17.4316 35.8528 17.8728C38.0964 18.3141 40.2142 19.2473 42.0539 20.6051" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1797 26.855C16.1357 20.849 21.0417 15.95 27.6197 14.295C33.5567 12.802 39.5457 14.282 44.0127 17.795" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.2188 28.7345C22.8997 27.0645 23.9645 25.5784 25.3267 24.3965C26.6889 23.2146 28.3104 22.3701 30.0598 21.9315C31.7046 21.516 33.4212 21.4704 35.0858 21.7979C36.7505 22.1254 38.3218 22.8179 39.6868 23.8255" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <h1 class="text-2xl font-bold "> الرحلة 3</h1>
                    <h1 class="text-lg font-bold "> الوجهه: المدينة المنورة</h1>
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