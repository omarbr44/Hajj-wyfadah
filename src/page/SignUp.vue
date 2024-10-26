<template>
    <div class="p-5 flex lg:flex-row flex-col-reverse items-center gap-5 w-full">
        <div class="signup-left-side lg:w-[60%] w-full lg:h-screen h-auto bg-site-blue rounded-[25px] relative overflow-hidden">
            <swiper-container navigation="true" pagination="true" class="h-full w-full">
                <swiper-slide class="w-full h-full relative">
                    <img src="/img/signup-11.png" alt="signup1" class="w-full h-full absolute top-0 z-[1]">
                    <div class="flex flex-col items-center"> 
                      <img src="/img/signup-1.png" alt="signup1" class="lg:px-28 px-12 mt-16 mb-5 relative z-[2]">
                      <h1 class="lg:text-2xl text-lg px-5 mb-20 font-bold text-white text-center relative z-[2]">استعد للحج بسلوب مبتكر وتكنولوجيا متقدمة</h1>
                    </div>
                  </swiper-slide>
                <swiper-slide class="w-full h-full relative">
                    <img src="/img/signup-22.png" alt="signup1" class="w-full h-full absolute top-0 z-[1]">
                    <div class="flex flex-col items-center"> 
                      <img src="/img/signup-2.png" alt="signup2" class="lg:px-20 px-8 mt-5 lg:mt-1 relative z-[2]">
                      <h1 class="lg:text-2xl text-lg px-5 font-bold text-white text-center relative z-[2]">استعد للحج بسلوب مبتكر وتكنولوجيا متقدمة</h1>
                    </div>
                </swiper-slide>
                <swiper-slide class="w-full h-full relative">
                  <div class="flex flex-col items-center"> 
                    <img src="/img/signup-3.png" alt="signup3" class="lg:px-20 px-8 lg:-translate-y-[80px] -translate-y-[20px] relative z-[2]">
                    <h1 class="lg:text-2xl text-lg px-5 font-bold text-white text-center relative z-[2] lg:-translate-y-[80px] -translate-y-[20px]">استعد للحج بسلوب مبتكر وتكنولوجيا متقدمة</h1>
                  </div>
                </swiper-slide>
            </swiper-container>
        </div>
        <div class="signup-right-side flex flex-col items-center lg:w-[40%] w-full">
          <Transition name="translate" mode="out-in">     
            <component :is="active"></component> 
          </Transition>
          <button @click="nextStep" class="w-[80%] mx-auto py-4 bg-site-blue text-white rounded-xl mt-10 font-semibold">
            <span v-show="step < 3">التالي</span>
            <span v-show="step == 3">تنشيط</span>
          </button>     
          <StepperComponent :step="step" :stepsLabels="['رقم التصريح' , 'رمز التحقق' , 'حسابك']" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import StepperComponent from '../components/StepperComponent.vue';
import SignUpComponent1 from '../components/SignUp/SignUpComponent1.vue';
import SignUpComponent2 from '../components/SignUp/SignUpComponent2.vue';
import SignUpComponent3 from '../components/SignUp/SignUpComponent3.vue';

const step = ref(1)
const active = ref(SignUpComponent1)

const nextStep = ()=> {
  if (step.value == 1) {
    active.value = SignUpComponent2
    step.value++
  }
  else if (step.value == 2) {
    active.value = SignUpComponent3
    step.value++
  }
}
</script>

<style scoped>
swiper-container::part(button-prev),swiper-container::part(button-next),swiper-container::part(pagination) {
  top: 90%;
}
swiper-container::part(button-prev),swiper-container::part(button-next) {
  transform: translate(0,22px);
  width: 18px;
  height: 18px;
  color: white;
}
swiper-container::part(button-prev) {
  left: 40%;
  z-index: 12;
}
swiper-container::part(button-next) {
  right: 40%;
  z-index: 11;
}
swiper-container::part(bullet),swiper-container::part(bullet-active) {
  width: 10px;
  height: 10px;
}
swiper-container::part(bullet-active) {
  background: white;
}
@media(max-width:1024px) {
  swiper-container::part(button-prev),swiper-container::part(button-next) {
  transform: translate(0,28px);
  width: 14px;
  height: 14px;
}
swiper-container::part(button-prev) {
  left: 30%;
  z-index: 12;
}
swiper-container::part(button-next) {
  right: 30%;
  z-index: 11;
}
}
.translate-enter-active, 
  .translate-leave-active { 
    transition: all 0.5s ease; 
  } 
  
  .translate-enter-from, 
  .translate-leave-to { 
    opacity: 0; 
    transform: translateX(30px); 
  } 
</style>