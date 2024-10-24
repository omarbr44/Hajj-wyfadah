<template>
    <div class="flex flex-col items-center w-full">
            <h1 class="text-2xl font-bold text-site-blue text-center mb-10">تأكيد هويتك</h1>
            <p class="text-site-text-grey text-center mb-5">على رقم الجوال 865*****966 SMS ادخل رمز التحقق المرسل</p>
            <div class="form-input">
                <v-otp-input
                    model-value=""
                    length="6"
                    :error="false"
                    placeholder="•"
                ></v-otp-input>
                <p class="error-p hidden">ادخل رمز تحقق صحيح</p>
                <p class="font-medium text-center mb-5">لم يصلك رمز التحقق ؟ <span class="text-site-blue font-normal cursor-pointer">رمز تحقق جديد</span></p>
                <!-- <p class="text-site-text-grey text-center">01m 53s الوقت المتبقي</p> -->
            </div>
    </div>
</template>
