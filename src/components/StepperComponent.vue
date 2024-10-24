<template>
    <div class="flex items-center lg:mt-16 my-8 ">
        <div v-for="(stepLabel,index) in stepsLabels" class="flex items-center">
            <div class="flex flex-col relative" :style="{ transform: index > 0 ? 'translate('+Number((++counter)*-1)+'px)' : ''}">
                <span class="size-10 rounded-full text-xl font-bold text-white flex items-center justify-center"
                      :class=" index+1 <= step ? 'active-step' : 'disabled-step' "
                >{{index+1}}</span>
                <p
                 class=" font-bold absolute top-10 w-max -translate-x-[50%] left-1/2"
                 :class=" index+1 <= step ? 'active-label' : 'disabled-label' "
                 >{{stepLabel}}</p>
            </div>
            <div 
             v-show="index < stepsLabels.length - 1"
             class="divider lg:w-32 lg:h-3 w-20 h-2"
             :class=" index+1 <= step ? 'active-step' : 'disabled-step'"
             :style="{ transform: 'translate('+Number((++counter)*-1)+'px)'}"
             ></div>
            <div 
             v-show="index < stepsLabels.length - 1 && stepsLabels.length == 2"
             class="divider lg:w-32 lg:h-3 w-20 h-2"
             :class=" step == 2 ? 'active-step' : 'disabled-step'"
             :style="{ transform: 'translate('+Number((++counter)*-1)+'px)'}"
             ></div>
        </div>
        <!-- <div class="flex flex-col relative -translate-x-[2px]">
            <span
             class="size-10 rounded-full text-xl font-bold text-white flex items-center justify-center"
             :class=" step > 1 ? 'active-step' : 'disabled-step' ">2</span>
            <p
             class="font-bold absolute top-10 w-max -translate-x-[50%] left-1/2"
             :class=" step > 1 ? 'active-label' : 'disabled-label' ">رمز التحقق</p>
        </div>
        <div 
         class="divider lg:w-32 lg:h-3 w-20 h-2 -translate-x-[3px]"
         :class=" step == 3 ? 'active-step' : 'disabled-step' "
        ></div>
        <div class="flex flex-col relative -translate-x-[4px]">
            <span 
             class="size-10 rounded-full text-xl font-bold text-white flex items-center justify-center"
             :class=" step == 3 ? 'active-step' : 'disabled-step' ">3</span>
            <p 
             class="font-bold absolute top-10 w-max -translate-x-[50%] left-1/2"
             :class=" step == 3 ? 'active-label' : 'disabled-label' ">حسابك</p>
        </div> -->
    </div>
</template>

<script setup>

defineProps({
    step: {type:Number,default:1},
    stepsLabels: {type:Array,required:true},
})
let counter = 0
</script>

<style scoped>
.active-step {
    background-color: #48b4c3;
}
.disabled-step {
    background-color: #DADADA;
}
.active-label {
    color: #000;
}
.disabled-label {
    color: #DADADA;
}
</style>