<template>
    <div>
        <input 
        v-model="searchFilter"
        type="text" 
        class="w-full bg-[#f9f9f9] border border-[#BDBDBD] p-2 px-10 rounded-3xl"
        > 
        <SearchIcon class=" absolute right-4 top-1/2 -translate-y-1/2"/>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import _ from 'lodash';
import SearchIcon from '../../components/icon/SearchIcon.vue';
import { useGetRequest } from '../../composables/useRequest';

const emit = defineEmits(['resultSearch'])
const props = defineProps({
    api: {type: String, required: true}
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
