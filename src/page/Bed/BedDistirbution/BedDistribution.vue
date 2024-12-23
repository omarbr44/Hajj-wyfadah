<template>
    <div class="w-[80%] bg-[#f9f9f9]" >
        <div>
            <div class="rtl-d px-10 pt-28">
                <Transition name="translate" mode="out-in">     
                    <component 
                    :is="active"
                    :type="type"
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
import Component1 from '../../../components/Bed/BedDistribution/BedDistributionComponent1.vue';
import Component2 from '../../../components/Bed/BedDistribution/BedDistributionComponent2.vue';
import Component3 from '../../../components/Bed/BedDistribution/BedDistributionComponent3.vue';
import Component4 from '../../../components/Bed/BedDistribution/BedDistributionComponent4.vue';
import Component5 from '../../../components/Bed/BedDistribution/BedDistributionComponent5.vue';

const type = ref('التوزيع اليدوي')
const active = ref(Component1)
const step = ref(1)
const nextStep = (chooseType)=> { 
    if (step.value == 1) {
    active.value = Component2
    type.value = chooseType
    step.value++
  }
    else if (step.value == 2) {
    active.value = Component3
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
    active.value = Component3
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