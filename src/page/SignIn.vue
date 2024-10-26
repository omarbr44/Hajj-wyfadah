<template>
    <div class="p-5 sm:px-0 md:px-0 flex lg:flex-row flex-col-reverse items-center gap-5 w-full">
        <div class="signup-left-side hidden w-[60%] h-screen rounded-[25px] lg:flex flex-col justify-end relative"
             style="background-image: url(/img/signIn.png);background-repeat: no-repeat;background-size: cover;"
        >
          <img src="/img/dark-overlay.png" alt="overlay" class="absolute bottom-0">
          <div class="z-10 relative mb-10">
            <p class="text-center text-xl font-semibold text-site-blue mb-1">مرحبا بك في نظام وفادة</p>
            <h1 class="text-center text-3xl font-bold text-white ">.معا نجعل تجربتك الحجية تجربة لا تنسى
              <br>
              سجل الدخول وكن جزءا من ذلك 
            </h1>
          </div>
        </div>
        <div class="signup-right-side flex flex-col items-center lg:w-[40%] w-full sm:h-screen md:h-screen lg:!bg-none"
             style="background-image: url(/img/signInMobileOverlay.png);background-repeat: no-repeat;background-size: cover;"
        >
          <h1 class="text-center text-3xl font-bold text-black">تسجيل الدخول</h1>
          <div class="tabs-conatiner w-full my-10">
            <div class="flex w-full px-10 sm:px-2 text-xl font-semibold gap-5">
              <button @click="changeSignInTab(1)"
                      class="w-1/2 pb-4"
                      :class="activeTab == 1 ? 'border-b-4 border-site-blue text-site-blue' : ''"
                      >شركة الحج</button>
              <button
                      @click="changeSignInTab(2)" 
                      class="w-1/2 pb-4 "
                      :class="activeTab == 2 ? 'border-b-4 border-site-blue text-site-blue' : ''"
                      >الحاج</button>
            </div>
          </div>
          <div v-show="activeTab == 1" class="w-full">
            <SignInComponentTab1 />
          </div>
          <div v-show="activeTab == 2" class="w-full flex flex-col items-center">
            <Transition name="translate" mode="out-in">     
              <component :is="active"></component> 
            </Transition>
            <button @click="nextStep" class="w-[80%] mx-auto py-4 bg-site-blue text-white rounded-xl mt-10 font-semibold">
              <span>تسجيل الدخول</span>
            </button>     
            <StepperComponent :step="step" :stepsLabels="['معلومات الحاج' , 'رمز التحقق']" />
          </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import StepperComponent from '../components/StepperComponent.vue';
import SignInComponent1 from '../components/SignIn/SignInComponent1.vue';
import SignInComponent2 from '../components/SignIn/SignInComponent2.vue';
import SignInComponentTab1 from '../components/SignIn/SignInComponentTab1.vue';

const step = ref(1)
const active = ref(SignInComponent1)
const activeTab = ref(1)
const changeSignInTab = (index) => {
  activeTab.value = index
}
const nextStep = ()=> {
  if (step.value == 1) {
    active.value = SignInComponent2
    step.value++
  }
}
</script>

<style scoped>
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