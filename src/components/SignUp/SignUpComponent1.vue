<template>
    <div class="flex flex-col items-center w-full">
            <h1 class="text-2xl font-bold text-site-blue text-center mb-10">انضم لنظام وفادة الآن</h1>
            <p class="text-xl font-bold text-black text-center mb-5">ادخل رقم تصريح شركتك</p>
            <div class="form-input">
                <v-otp-input
                    model-value=""
                    length="5"
                    :error="false"
                    placeholder="•"
                ></v-otp-input>
                <p class="error-p">ادخل رقم تصريح صحيح</p>
            </div>
    </div>
</template>
