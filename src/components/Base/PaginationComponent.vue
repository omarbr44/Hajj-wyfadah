<template>
    <div class="flex items-center mb-5">
        <button :disabled="!props.previous" @click="change(page-1)" class=" bg-site-blue text-white font-bold rounded-full rounded-tl-none rounded-bl-none w-16 h-10 flex justify-center items-center">السابق</button>
        <div class=" bg-white w-16 h-10 flex justify-center items-center font-bold">{{ page }}</div>
        <button :disabled="!props.next" @click="change(page+1)" class=" bg-site-blue text-white font-bold rounded-full rounded-tr-none rounded-br-none w-16 h-10 flex justify-center items-center">التالي</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    next: {type: Boolean, required: true},
    previous: {type: Boolean, required: true},
})
const emit = defineEmits(['changePage'])
const page = ref(1)
const change = (newPage) => {
    emit('changePage',newPage)
    page.value = newPage
}

</script>

<style scoped>

</style>