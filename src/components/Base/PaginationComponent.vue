<template>
    <div v-if="props.pages != 0" class="flex items-center mb-5">
        <button :disabled="!props.previous" @click="change(page-1)" class=" bg-site-blue text-white font-bold rounded-full rounded-tl-none rounded-bl-none w-16 h-10 flex justify-center items-center">السابق</button>
        <div v-if="props.pages > 10 && page < 10" class="flex">
                <div v-for="index in 10" @click="change(index)" class=" bg-white w-10 h-10 flex justify-center items-center font-bold cursor-pointer"
                     :class="page == index ? '!bg-site-blue mx-1 text-white' : ''">{{ index }}</div>
                <div class=" bg-white w-10 h-10 flex justify-center items-center font-bold">...</div>
                <div v-if="props.pages-1 != 10" @click="change(props.pages-1)" class=" bg-white w-10 h-10 flex justify-center items-center font-bold cursor-pointer">{{ props.pages-1 }}</div>
                <div @click="change(props.pages)" class="bg-white w-10 h-10 flex justify-center items-center font-bold cursor-pointer">{{ props.pages }}</div>
            </div>
            <div v-else-if="props.pages > 10 && page >= 10" class="flex">
                <div v-for="index in 2" @click="change(index)" class=" bg-white w-10 h-10 flex justify-center items-center font-bold cursor-pointer">{{ index }}</div>
                <div class=" bg-white w-10 h-10 flex justify-center items-center font-bold">...</div>
                <template v-if="pagesLeft > 3">
                    <div v-for="index in 6" @click="change(index + page - 3)" class=" bg-white w-10 h-10 cursor-pointer flex justify-center items-center font-bold"
                        :class="page == (index + page - 3) ? '!bg-site-blue mx-1 text-white' : ''">{{ index + page - 3 }}</div>
                </template>
                <template v-else>
                    <div v-for="index in  (pagesLeft+3)" @click="change(index + page - 3)" class=" bg-white w-10 h-10 cursor-pointer flex justify-center items-center font-bold"
                        :class="page == (index + page - 3) ? '!bg-site-blue mx-1 text-white' : ''">{{ index + page - 3 }}</div>
                </template>
                <template v-if="pagesLeft > 3">
                    <div class=" bg-white w-10 h-10 flex justify-center items-center font-bold">...</div>
                    <div v-if="props.pages-1 != 10" @click="change(props.pages-1)" class=" bg-white w-10 h-10 flex justify-center items-center font-bold cursor-pointer">{{ props.pages-1 }}</div>
                    <div @click="change(props.pages)" class="bg-white w-10 h-10 flex justify-center items-center font-bold cursor-pointer">{{ props.pages }}</div>
                </template>
            </div>
            <div v-else class="flex">
                <div v-for="index in pages" @click="change(index)" class=" bg-white w-10 h-10 flex justify-center items-center font-bold cursor-pointer"
                     :class="page == index ? '!bg-site-blue mx-1 text-white' : ''">{{ index }}</div>
            </div>
        <button :disabled="!props.next" @click="change(page+1)" class=" bg-site-blue text-white font-bold rounded-full rounded-tr-none rounded-br-none w-16 h-10 flex justify-center items-center">التالي</button>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    next: {type: Boolean, required: true},
    previous: {type: Boolean, required: true},
    pages: {required: true},
})
const emit = defineEmits(['changePage'])
const page = ref(1)
const pagesLeft = computed(()=>{
    return props.pages - page.value
})
const change = (newPage) => {
    emit('changePage',newPage)
    page.value = newPage
}

</script>

<style scoped>

</style>