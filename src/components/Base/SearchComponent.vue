<template>
    <div v-if="props.type == 'input'" class="relative">
        <input  
        v-model="searchFilter"
        type="text" 
        :placeholder="props.placeholder"
        class="w-full bg-[#f9f9f9] border border-[#BDBDBD] p-2 px-10 rounded-3xl"
        > 
        <SearchIcon class=" absolute right-4 top-1/2 -translate-y-1/2"/>
    </div>
    <div v-else class="relative w-full my-1">
        <textarea
         class="rules-section w-full bg-white border border-[#BDBDBD] py-2 px-5 rounded-3xl h-32"
         placeholder="ادخل محتوى الرسالة التي تريد البحث عنها "
         v-model="searchFilter"
         >

        </textarea>
        <button class="absolute left-4 top-1/2 -translate-y-1/2 bg-site-blue text-white font-semibold text-lg rounded-3xl px-4 py-2">ابحث</button>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import _ from 'lodash';
import SearchIcon from '../../components/icon/SearchIcon.vue';
import { useGetRequest } from '../../composables/useRequest';

const emit = defineEmits(['resultSearch'])
const props = defineProps({
    api: {type: String, required: true},
    type: {type: String, default: 'input'},
    placeholder: {type: String, default: ''},
})
const searchFilter = ref()
watch(searchFilter, async () => {
    searchFunction()
})
const searchFunction = _.debounce(async () => {
    const {Data} = await useGetRequest(props.api+searchFilter.value)
    emit('resultSearch',Data.value.data.result)
},2000)

</script>
