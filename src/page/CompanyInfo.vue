<template>
    <div>
        <NavBarComponent />
        <div class="flex">
            <div class="w-[80%] rtl-d px-5 bg-[#f9f9f9] pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">المعلومات الخاصة بالشركة</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-4 gap-y-10">
                    <div class="flex gap-2 items-center w-[48%]">
                        <p class="text-black font-semibold w-[50%]">الأسم باللغة العربية</p>
                        <input 
                        name="arname" 
                        type="text" 
                        class="w-full relative border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="شركة عبدالله صالح الكاف لخدمات حجاج الداخل">
                    </div>
                    <div class="flex gap-2 items-center w-[48%]">
                        <p class="text-black font-semibold w-[50%]">الأسم باللغة الإنجليزية</p>
                        <input 
                        name="enname" 
                        type="text" 
                        class="w-full relative border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="Abdullah Salih Al-Kaff Co  For Local Haj Services">
                    </div>
                    <div class="flex gap-2 items-center w-[48%]">
                        <p class="text-black font-semibold w-[50%]">اسم المستخدم للنسك</p>
                        <input 
                        name="nusukname" 
                        type="text" 
                        class="w-full relative border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="userName">
                    </div>
                    <div class="flex gap-2 items-center w-[48%]">
                        <p class="text-black font-semibold w-[50%]">الرقم السري لنسك</p>
                        <input 
                        name="nusuknumber" 
                        type="text" 
                        class="w-full relative border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="234940">
                    </div>
                    <div class="flex gap-2 items-center w-[48%]">
                        <p class="text-black font-semibold w-[50%]">الشعار</p>
                        <div class="w-full relative">
                            <input 
                            name="logo" 
                            type="text" 
                            class="w-full h-56 border border-[#BDBDBD] p-2 rounded-xl"
                            >
                            <img src="../assets/img/uploadFile.png" alt="uploadFile" class="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 ">
                        </div>
                    </div>
                </div>
            </div>
            <SideBarComponent />
        </div>
    </div>
</template>

<script setup>
import NavBarComponent from '../components/NavBarComponent.vue';
import SideBarComponent from '../components/SideBarComponent.vue';

</script>

<style scoped>

</style>