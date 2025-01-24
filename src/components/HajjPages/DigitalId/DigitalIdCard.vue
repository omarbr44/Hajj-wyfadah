<template>
    <div class=" rtl-d w-[40%] relative font-bold " ref="backdiv"
         >
        <img src="/img/DigitalCard1.png" class=" absolute left-0">
        <img src="/img/DigitalCard1.png" class=" bottom-0 right-0 absolute rotate-180">
        <div class="flex justify-center pt-24 pb-8">
            <img src="/img/idcardlogo.png" alt="card logo">
        </div>
        <div class="flex justify-center items-center gap-4 bg-white py-4 mb-6">
            <span>الاسم</span>
            <p class=" border border-black py-2 px-10 rounded-md" >خالد عبد الله احمد</p>
        </div>
        <div class="flex justify-center items-center gap-4 bg-white py-4">
            <span>رقم المجموعة</span>
            <p class=" border border-black py-2 px-10 rounded-md" >44</p>
        </div>
        <h1 class="text-white text-6xl mb-4 text-center my-6 pb-2">منى</h1>
        <div class="flex justify-between items-center bg-white py-4 px-8" ref="textFir"
             >
            <div class="flex justify-center items-center gap-4">
                <span>الخيمة</span>
                <p class=" border py-2 px-6 rounded-md text-black " ref="borderFir"
                   >44</p>
            </div>
            <div class="flex justify-center items-center gap-4">
                <span>المقعد</span>
                <p class=" border py-2 px-6 rounded-md text-black" ref="borderSec"
                   >9</p>
            </div>
        </div>
        <div class="flex justify-center mt-10 mb-28">
            <img src="/img/barcode.png" alt="card barcode">
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({
    color: {type: String, default: '#48b4c3' },
})
const backdiv = ref(null)
const textFir = ref(null)
const borderFir = ref(null)
const borderSec = ref(null)

watchEffect(()=>{
    if(backdiv.value) {
        backdiv.value.style.background = props.color;
        textFir.value.style.color = props.color;
        borderFir.value.style.borderColor = props.color;
        borderSec.value.style.borderColor = props.color;

    }
})
</script>