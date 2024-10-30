<template>
    <div>
        <table class="w-full border border-[#979797]">
            <thead class="bg-[#828282] text-white">
                <slot name="header"></slot>
            </thead>
            <tbody>
                 <!-- <tr v-for="(row,index) in props.tableBody" :key="index">
                    <td>{{row.}}</td>
                    <td>{{row.}}</td>
                    <td>{{row.}}</td>
                    <td>{{row.}}</td>
                </tr> -->
                <slot name="body"></slot>    
            </tbody>
        </table>
        <Dialog v-model:visible="props.modalVisible" modal closeIcon="!hidden" :closeOnEscape="true" class="bg-white rtl-d p-10 border border-red-500 relative" :pt="{mask:'bg-[#00000042]',pcCloseButton:'!hidden !opacity-0'}" :style="{ width: '50%' }">
                            <template v-if="props.canDelete" #container="{ closeCallback }">
                                <slot name="delete-modal-1"></slot>   
                                <div class="flex items-center justify-between my-2 text-lg font-bold">
                                    <button class=" bg-red-500 text-white py-2 px-7 rounded-lg">حذف</button>
                                    <button @click="$emit('closeModal',closeCallback)" class="text-site-blue py-4 px-8">إلغاء</button>
                                </div>
                            </template> 
                            <template v-else #container="{ closeCallback }">
                                <button @click="$emit('closeModal',closeCallback)" class=" absolute top-2 right-3">
                                    <Xicon />
                                </button>
                                <div class="p-3">
                                    <slot name="delete-modal-2"></slot>
                                </div> 
                            </template> 
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Xicon from '../icon/Xicon.vue';
const props = defineProps({
    modalVisible:{type: Boolean, required: true},
    canDelete:{type: Boolean, required: true}
})
const emit = defineEmits(['closeModal'])

</script>

<style>
th,td {
  border: 1px solid rgb(160 160 160);
  padding: 15px 10px;
  text-align: center;
}
td {
  border-bottom: 0px;
}

</style>