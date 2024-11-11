<template>
<div class="w-full border border-[#008093] rounded-xl">
                    <div class="header mb-16 border-b border-[#DADADA] ml-4 flex ">
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
                        <div class="bg-[#008093] py-2 px-1 flex justify-evenly items-center text-white w-48 rounded-xl rounded-s-none rounded-ee-3xl rounded-se-3xl ">
                            <div class="bg-white px-2 rounded-full text-[#008093]">3</div>
                            <span>تحديد الحاج</span>
                            <span>></span>
                        </div>
                    </div>
                    <div class="">
                        <h1 class="text-xl font-bold text-site-blue mb-5 px-4">حدد الحاج المراد إرسال الرسالة إليه من خلال المعلومات التالية :</h1>
                        <div class="w-full p-4 flex flex-wrap gap-y-8">
                            <div class="w-[45%]">
                                <p class="text-black font-semibold w-[50%] mb-3">اسم الحاج<span class="text-red-500">*</span></p>
                                <input 
                                name="" 
                                type="text" 
                                class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                                placeholder="">
                            </div>
                            <div class="w-[8%]"></div>
                            <div class="w-[45%]">
                                <p class="text-black font-semibold w-[50%] mb-3">رقم الهوية<span class="text-[#DADADA]">( اختياري )</span></p>
                                <input 
                                name="" 
                                type="number" 
                                class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                                placeholder="">
                            </div>
                            <div class="w-[45%]">
                                <p class="text-black font-semibold w-[50%] mb-3">رقم حجز الوزارة<span class="text-[#DADADA]">( اختياري )</span></p>
                                <input 
                                name="" 
                                type="number" 
                                class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                                placeholder="">
                            </div>
                            <div class="w-[8%]"></div>
                            <div class="w-[45%]">
                                <p class="text-black font-semibold w-[50%] mb-3">رقم الجوال<span class="text-red-500">*</span></p>
                                <input 
                                name="" 
                                type="number" 
                                class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                                placeholder="">
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex justify-between text-2xl font-bold px-10 mt-40 mb-10">
                        <button @click="$emit('preStep')" class="text-site-text-grey">
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
import SearchComponent from '../Base/SearchComponent.vue';
const emit = defineEmits(['nextStep','preStep'])
const cities = ref([
    {name:'جدة',selected:false},
    {name:'مكة',selected:false},
    {name:'الرياض',selected:false},
])
const selectedCities = ref([])
const cityCheckAll = ref(false)

const removeSelectedItem = (index) => {
    selectedCities.value[index].selected = false
    selectedCities.value.splice(index,1)
}
const checkAll = (value,array,check) => {
    value.length = []
    array.forEach(e => {
        e.selected = !check
        if(!check) 
            value.push(e)            
    });        
}
</script>
