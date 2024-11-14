<template>
    <div class="w-[80%] bg-[#f9f9f9]" >
        <div>
            <div class="rtl-d px-10 pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">جدولة رسالة جديدة</h1>
                <Transition name="translate" mode="out-in">     
                    <component 
                    :is="active"
                    @nextStep="nextStep"
                    @preStep="preStep"
                    ></component> 
                </Transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Component1 from '../../../components/Communication/CreateMsgComponent1.vue';
import Component2 from '../../../components/Communication/CreateMsgComponent2.vue';
import ComponentHajj3 from '../../../components/Communication/CreateMsgComponentHajj3.vue';
import ComponentHajjs3 from '../../../components/Communication/CreateMsgComponentHajjs3.vue';
import Component4 from '../../../components/Communication/CreateMsgComponent4.vue';
import Component5 from '../../../components/Communication/CreateMsgComponent5.vue';

const active = ref(Component1)
const step = ref(1)
const nextStep = (nextPage)=> { 
    if (step.value == 1) {
    active.value = Component2
    step.value++
  }
    else if (step.value == 2 && nextPage == 2) {
    active.value = ComponentHajj3
    step.value++
  }
    else if (step.value == 2 && nextPage == 1) {
    active.value = ComponentHajjs3
    step.value++
  }
    else if (step.value == 3) {
    active.value = Component4
    step.value++
  }
    else if (step.value == 4) {
    active.value = Component5
    step.value++
  }
}
const preStep = ()=> { 
    if (step.value == 2) {
    active.value = Component1
    step.value--
  }
    else if (step.value == 3) {
    active.value = Component2
    step.value--
  }
    else if (step.value == 4) {
    active.value = Component2
    step.value--
  }
    else if (step.value == 5) {
    active.value = Component4
    step.value--
  }
}
</script>

<style scoped>

</style>