<template>
    <div class="flex flex-col items-center w-full">
            <h1 class="text-2xl font-bold text-site-blue text-center mb-10">تأكيد هويتك</h1>
            <p class="text-site-text-grey text-center mb-5">{{ props.message }}</p>
            <div class="form-input">
                <v-otp-input
                    v-model="code"
                    length="6"
                    :error="requestConditions.error"
                    placeholder="•"
                    :loading="requestConditions.loading"
                ></v-otp-input>
                <p v-show="requestConditions.error" class="error">ادخل رمز تحقق صحيح</p>
                <p class="font-medium text-center my-5">لم يصلك رمز التحقق ؟ <span class="text-site-blue font-normal cursor-pointer">رمز تحقق جديد</span></p>
                <p class="text-site-text-grey text-center">01m 53s الوقت المتبقي</p>
            </div>
            <button @click="checkCode" class="w-[80%] mx-auto py-4 bg-site-blue text-white rounded-xl mt-10 font-semibold">
                <span>التالي</span>
            </button>     
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { usePostRequest } from '../../composables/useRequest';
const props = defineProps({
    message:{type: String, required: true}
})

const emit = defineEmits(['nextStep'])
const requestConditions = ref({
    data: null,
    error: null,
    loading: false,
})
const code = ref()
const checkCode = async () => {
    requestConditions.value.loading = true
    const { Data, Error} = await usePostRequest('api/v1/code_check/',
        {
            code: code.value
        }
    )
    requestConditions.value.loading = false
    requestConditions.value.data = Data.value
    requestConditions.value.error = Error.value
    if(requestConditions.value.data)
        emit('nextStep',code.value)
}
</script>
