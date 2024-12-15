<template>
    <div>
        <h1 class="text-xl font-bold text-site-blue mb-5">{{ type }}</h1>
        <div class=" w-full flex justify-center">
            <StepperComponent :edited="true" :step="3" :stepsLabels="['التوزيع' ,'الجنس' , 'مكان الخيمة' , 'الموقع']" />
        </div>
        <hr>
        <h1 class="text-lg font-semibold text-site-blue mb-5">حدد جنس المجموعة</h1>
        <div class="w-full flex items-stretch justify-between px-16 text-2xl font-bold mt-16 flex-wrap gap-y-6">
            <button @click="activeButton = 1" class="py-16 px-24 border w-[40%]"
                    :class="activeButton == 1 ? ' text-site-dark-blue border-site-dark-blue' : ' text-site-text-grey border-site-blue'">ذكور</button>
            <button @click="activeButton = 2" class="py-16 px-24 border w-[40%]"
                    :class="activeButton == 2 ? ' text-site-dark-blue border-site-dark-blue' : ' text-site-text-grey border-site-blue'">إناث</button>
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