<template>
    <div>
        <h1 class="text-xl font-bold text-site-blue mb-5">{{ type }}</h1>
        <div class=" w-full flex justify-center">
            <StepperComponent :edited="true" :step="2" :stepsLabels="['الموقع' ,'المدينة' , 'المراد توزيعه' , 'التوزيع']" />
        </div>
        <hr>
        <h1 class="text-lg font-semibold text-site-blue mb-5">حدد المدينة</h1>
        <div class="w-full flex items-stretch justify-between px-16 text-2xl font-bold mt-16">
            <button @click="activeButton = 1" class="py-10 px-24 border w-[40%]"
                    :class="activeButton == 1 ? ' text-site-dark-blue border-site-dark-blue' : ' text-site-text-grey border-site-blue'">جدة</button>
            <button @click="activeButton = 2" class="py-10 px-24 border w-[40%]"
                    :class="activeButton == 2 ? ' text-site-dark-blue border-site-dark-blue' : 'text-site-text-grey border-site-blue'">مكة المكرمة</button>
        </div>
        <div class="w-full flex justify-between text-2xl font-bold px-10 mt-20 mb-10">
            <button @click="$emit('preStep')" class=" text-[#CECFD9]">
                السابق
            </button>
            <button @click="$emit('nextStep')" class=" text-site-blue">
                التالي
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import StepperComponent from '../StepperComponent.vue';

const activeButton = ref(1)
const emit = defineEmits(['nextStep','preStep'])
defineProps({
    type: {default: 'التوزيع اليدوي'},
})
</script>

<style scoped>

</style>