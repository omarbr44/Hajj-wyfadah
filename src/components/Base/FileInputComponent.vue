<template>
    <div class="w-full relative">
        <form>
            <input @change="$emit('changeFile',$event.target.files[0])" ref="Fileinput" id="fileinput" type="file" style="display:none;"/>
        </form>
        <button @click="Fileinput.click()" class="w-full h-56 border border-[#BDBDBD] p-2 rounded-xl">  
        </button>
        <img @click="Fileinput.click()" src="/img/uploadFile2.png" alt="uploadFile" class="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 cursor-pointer">
    </div>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['changeFile'])
const Fileinput = ref(null)
/* const changeFile = (file) => {
} */
</script>

<style lang="scss" scoped>

</style>