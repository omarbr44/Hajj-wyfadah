<template>
    <div class="flex flex-col items-center w-full">
            <h1 class="text-2xl font-bold text-site-blue text-center mb-10">انضم لنظام وفادة الآن</h1>
            <p class="text-xl font-bold text-black text-center mb-5">ادخل رقم تصريح شركتك</p>
            <div class="form-input">
                <v-otp-input
                    v-model="licenceNumber"
                    length="6"
                    :error="requestConditions.error"
                    placeholder="•"
                    :loading="requestConditions.loading"
                ></v-otp-input>
                <p v-show="requestConditions.error" class="error-p">ادخل رقم تصريح صحيح</p>
            </div>
            <button @click="checkLicence" class="w-[80%] mx-auto py-4 bg-site-blue text-white rounded-xl mt-10 font-semibold">
            <span>التالي</span>
          </button>     
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { usePostRequest } from '../../composables/useRequest';

const emit = defineEmits(['nextStep'])
const requestConditions = ref({
    data: null,
    error: null,
    loading: false,
})
const licenceNumber = ref()
const checkLicence = async () => {
    requestConditions.value.loading = true
    const { Data, Error} = await usePostRequest('api/v1/register/',
        {
            license_number: licenceNumber.value
        }
    )
    requestConditions.value.loading = false
    requestConditions.value.data = Data.value
    requestConditions.value.error = Error.value
    if(requestConditions.value.data)
        emit('nextStep',requestConditions.value.data.message)
}
</script>
