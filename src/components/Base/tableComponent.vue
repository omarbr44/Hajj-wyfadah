<template>
    <div>
        <table class="w-full border border-[#979797] mb-10">
            <thead class="bg-[#828282] text-white">
                <slot name="header"></slot>
            </thead>
            <tbody>
                <slot name="body"></slot>    
            </tbody>
        </table>
        <Dialog v-model:visible="props.modalVisible" modal closeIcon="!hidden" :closeOnEscape="true" class="bg-white rtl-d p-10 border border-red-500 relative" :pt="{mask:'bg-[#00000042]',pcCloseButton:'!hidden !opacity-0'}" :style="{ width: '50%' }">
                            <template v-if="props.canDelete" #container="{ closeCallback }">
                                <slot name="delete-modal-1"></slot>   
                                <div class="flex items-center justify-between my-2 text-lg font-bold">
                                    <button @click="deleteItem" class=" bg-red-500 text-white py-2 px-7 rounded-lg flex justify-center items-center">
                                        <span v-if="!deleteLoading">حذف</span>
                                        <LoaderIcon v-else />
                                    </button>
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
import Xicon from '../icon/Xicon.vue';
import { useDeleteRequest } from '../../composables/useRequest';
import { ref } from 'vue';
import LoaderIcon from '../icon/loaderIcon.vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps({
    modalVisible:{type: Boolean, required: true},
    canDelete:{type: Boolean, required: true},
    deleteLink:{type: String, required: true}
})
const emit = defineEmits(['closeModal'])

const deleteLoading = ref(false)
const deleteItem = async () => {
    deleteLoading.value = true
    const { Data } = await useDeleteRequest(props.deleteLink)
    deleteLoading.value = false
    if(Data.value.success)
        router.go()
}
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