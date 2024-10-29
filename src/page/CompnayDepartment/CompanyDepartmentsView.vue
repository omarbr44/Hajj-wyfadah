<template>
    <div>
        <NavBarComponent />
        <div class="flex justify-stretch">
            <div class="w-[80%] rtl-d px-5 bg-[#f9f9f9] pt-28">
                <h1 class="text-site-blue text-xl font-semibold">الإدارات التابعة للشركة </h1>
                <RouterLink to="company-departments-add" class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center gap-2 my-8">
                    <PlusIcon />
                    <span class="font-bold">أضف إدارة جديدة</span>
                </RouterLink>
                <TableComponent />
            </div>
            <SideBarComponent />
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import TableComponent from '../../components/Base/tableComponent.vue';
import NavBarComponent from '../../components/Company/NavBarComponent.vue';
import PlusIcon from '../../components/icon/PlusIcon.vue';
import SideBarComponent from '../../components/SideBarComponent.vue';

</script>

<style scoped>

</style>