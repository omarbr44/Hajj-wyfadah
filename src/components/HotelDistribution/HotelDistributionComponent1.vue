<template>
    <div class="h-screen">
        <h1 class="text-xl font-bold text-site-blue mb-5">اختار طريقة التوزيع</h1>
        <hr>
        <div class="w-full flex items-center justify-between px-16 text-site-blue text-2xl font-bold mt-20">
            <button @click="$emit('nextStep','التوزيع اليدوي')" class="py-16 px-24 border border-site-blue ">التوزيع اليدوي</button>
            <button @click="$emit('nextStep','التوزيع الآلي')" class="py-16 px-24 border border-site-blue ">التوزيع الآلي</button>
        </div>
    </div>
</template>

<script setup>

const emit = defineEmits(['nextStep'])

</script>

<style scoped>

</style>