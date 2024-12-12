<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div>
            <div class="rtl-d px-10 pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">إضافة خيمة جديدة</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-4 gap-y-10">
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">رقم الخيمة<span class="text-red-500">*</span></p>
                        <input 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="اكتب رقم الخيمة">
                        <p v-if="requestConditions?.error?.name_ar" class="text-red-500 mt-1">{{ requestConditions.error.name_ar }}</p>
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">السعة</p>
                        <input 
                        type="number" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="0">
                        <p v-if="requestConditions?.error?.info_branch" class="text-red-500 mt-1">{{ requestConditions.error.info_branch }}</p>
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اسم البرنامج<span class="text-red-500">*</span></p>
                        <Select v-model="bransh.city" :options="cities" optionLabel="name_ar" 
                                    placeholder="اختر من القائمة" overlayClass="!bg-white rtl-d p-2" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                    :pt="{overlay:' shadow-xl'}">
                                    <template #value="slotProps">
                                        <span v-if="slotProps.value">{{ slotProps.value.name_ar }}</span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="flex items-center gap-3 mb-3 cursor-pointer py-1 hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                            <div>{{ slotProps.option.name_ar }}</div>
                                        </div>
                                    </template>
                                    <template #dropdownicon>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                        </svg>
                                    </template>
                                    <template #header>
                                        <div class="font-medium"></div>
                                    </template>
                        </Select>
                        <p v-if="requestConditions?.error?.city" class="text-red-500 mt-1">{{ requestConditions.error.city }}</p>
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">تصنيف الخيمة<span class="text-red-500">*</span></p>
                        <Select v-model="bransh.city" :options="cities" optionLabel="name_ar" 
                                    placeholder="اختر من القائمة" overlayClass="!bg-white rtl-d p-2" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                    :pt="{overlay:' shadow-xl'}">
                                    <template #value="slotProps">
                                        <span v-if="slotProps.value">{{ slotProps.value.name_ar }}</span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="flex items-center gap-3 mb-3 cursor-pointer py-1 hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                            <div>{{ slotProps.option.name_ar }}</div>
                                        </div>
                                    </template>
                                    <template #dropdownicon>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                        </svg>
                                    </template>
                                    <template #header>
                                        <div class="font-medium"></div>
                                    </template>
                        </Select>
                        <p v-if="requestConditions?.error?.city" class="text-red-500 mt-1">{{ requestConditions.error.city }}</p>
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اختر الموقع<span class="text-red-500">*</span></p>
                        <Select v-model="bransh.city" :options="cities" optionLabel="name_ar" 
                                    placeholder="اختر من القائمة" overlayClass="!bg-white rtl-d p-2" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                    :pt="{overlay:' shadow-xl'}">
                                    <template #value="slotProps">
                                        <span v-if="slotProps.value">{{ slotProps.value.name_ar }}</span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="flex items-center gap-3 mb-3 cursor-pointer py-1 hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                            <div>{{ slotProps.option.name_ar }}</div>
                                        </div>
                                    </template>
                                    <template #dropdownicon>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                        </svg>
                                    </template>
                                    <template #header>
                                        <div class="font-medium"></div>
                                    </template>
                        </Select>
                        <p v-if="requestConditions?.error?.city" class="text-red-500 mt-1">{{ requestConditions.error.city }}</p>
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">مكان الخيمة<span class="text-red-500">*</span></p>
                        <Select v-model="bransh.city" :options="cities" optionLabel="name_ar" 
                                    placeholder="اختر من القائمة" overlayClass="!bg-white rtl-d p-2" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                    :pt="{overlay:' shadow-xl'}">
                                    <template #value="slotProps">
                                        <span v-if="slotProps.value">{{ slotProps.value.name_ar }}</span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="flex items-center gap-3 mb-3 cursor-pointer py-1 hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                            <div>{{ slotProps.option.name_ar }}</div>
                                        </div>
                                    </template>
                                    <template #dropdownicon>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                        </svg>
                                    </template>
                                    <template #header>
                                        <div class="font-medium"></div>
                                    </template>
                        </Select>
                        <p v-if="requestConditions?.error?.city" class="text-red-500 mt-1">{{ requestConditions.error.city }}</p>
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">جنسيات المجموعات<span class="text-red-500">*</span></p>
                        <Select v-model="bransh.city" :options="cities" optionLabel="name_ar" 
                                    placeholder="اختر من القائمة" overlayClass="!bg-white rtl-d p-2" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                    :pt="{overlay:' shadow-xl'}">
                                    <template #value="slotProps">
                                        <span v-if="slotProps.value">{{ slotProps.value.name_ar }}</span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="flex items-center gap-3 mb-3 cursor-pointer py-1 hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                            <div>{{ slotProps.option.name_ar }}</div>
                                        </div>
                                    </template>
                                    <template #dropdownicon>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                        </svg>
                                    </template>
                                    <template #header>
                                        <div class="font-medium"></div>
                                    </template>
                        </Select>
                        <p v-if="requestConditions?.error?.city" class="text-red-500 mt-1">{{ requestConditions.error.city }}</p>
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">بطاقة الخيمة<span class="text-red-500">*</span></p>
                        <Select v-model="bransh.city" :options="cities" optionLabel="name_ar" 
                                    placeholder="اختر من القائمة" overlayClass="!bg-white rtl-d p-2" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                    :pt="{overlay:' shadow-xl'}">
                                    <template #value="slotProps">
                                        <span v-if="slotProps.value">{{ slotProps.value.name_ar }}</span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="flex items-center gap-3 mb-3 cursor-pointer py-1 hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                            <div>{{ slotProps.option.name_ar }}</div>
                                        </div>
                                    </template>
                                    <template #dropdownicon>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                        </svg>
                                    </template>
                                    <template #header>
                                        <div class="font-medium"></div>
                                    </template>
                        </Select>
                        <p v-if="requestConditions?.error?.city" class="text-red-500 mt-1">{{ requestConditions.error.city }}</p>
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">الجنس<span class="text-red-500">*</span></p>
                        <div class="flex items-center p-2">
                            <input
                            name="train-option" 
                            type="radio"
                            :value="true"
                            class="relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl size-4">
                            <label class="ml-8 mr-2 flex gap-3" >اناث
                                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.283 2C6.72247 2 7.14394 2.21071 7.45469 2.58579C7.76545 2.96086 7.94002 3.46957 7.94002 4C7.94002 4.53043 7.76545 5.03914 7.45469 5.41421C7.14394 5.78929 6.72247 6 6.283 6C5.84353 6 5.42206 5.78929 5.1113 5.41421C4.80055 5.03914 4.62597 4.53043 4.62597 4C4.62597 3.46957 4.80055 2.96086 5.1113 2.58579C5.42206 2.21071 5.84353 2 6.283 2ZM5.04023 22V16H2.55469L4.70882 8.4C4.95738 7.6 5.53734 7 6.283 7C7.02866 7 7.69147 7.6 7.85717 8.4L10.0113 16L12.1654 8.4C12.414 7.6 12.994 7 13.7396 7C14.4853 7 15.1481 7.6 15.3138 8.4L17.4679 16H14.9824V22H12.4968V16H7.52577V22H5.04023ZM13.7396 2C14.1791 2 14.6006 2.21071 14.9113 2.58579C15.2221 2.96086 15.3966 3.46957 15.3966 4C15.3966 4.53043 15.2221 5.03914 14.9113 5.41421C14.6006 5.78929 14.1791 6 13.7396 6C13.3001 6 12.8787 5.78929 12.5679 5.41421C12.2572 5.03914 12.0826 4.53043 12.0826 4C12.0826 3.46957 12.2572 2.96086 12.5679 2.58579C12.8787 2.21071 13.3001 2 13.7396 2Z" fill="#5FC1CF"/>
                                </svg>
                            </label>
                            <input 
                            name="train-option" 
                            type="radio"
                            :value="false"
                            class="relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl size-4">
                            <label class="ml-8 mr-2 flex gap-3" >ذكور
                                <svg width="30" height="33" viewBox="0 0 53 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5651 3.83301C17.7365 3.83301 18.8599 4.23688 19.6882 4.95577C20.5164 5.67465 20.9818 6.64968 20.9818 7.66634C20.9818 8.683 20.5164 9.65803 19.6882 10.3769C18.8599 11.0958 17.7365 11.4997 16.5651 11.4997C15.3937 11.4997 14.2703 11.0958 13.442 10.3769C12.6138 9.65803 12.1484 8.683 12.1484 7.66634C12.1484 6.64968 12.6138 5.67465 13.442 4.95577C14.2703 4.23688 15.3937 3.83301 16.5651 3.83301ZM13.2526 13.4163H19.8776C21.049 13.4163 22.1724 13.8202 23.0007 14.5391C23.8289 15.258 24.2943 16.233 24.2943 17.2497V27.7913H20.9818V42.1663H12.1484V27.7913H8.83594V17.2497C8.83594 16.233 9.30126 15.258 10.1295 14.5391C10.9578 13.8202 12.0812 13.4163 13.2526 13.4163ZM36.4401 3.83301C37.6115 3.83301 38.7349 4.23688 39.5632 4.95577C40.3914 5.67465 40.8568 6.64968 40.8568 7.66634C40.8568 8.683 40.3914 9.65803 39.5632 10.3769C38.7349 11.0958 37.6115 11.4997 36.4401 11.4997C35.2687 11.4997 34.1453 11.0958 33.3171 10.3769C32.4888 9.65803 32.0234 8.683 32.0234 7.66634C32.0234 6.64968 32.4888 5.67465 33.3171 4.95577C34.1453 4.23688 35.2687 3.83301 36.4401 3.83301ZM33.1276 13.4163H39.7526C40.924 13.4163 42.0474 13.8202 42.8757 14.5391C43.7039 15.258 44.1693 16.233 44.1693 17.2497V27.7913H40.8568V42.1663H32.0234V27.7913H28.7109V17.2497C28.7109 16.233 29.1763 15.258 30.0046 14.5391C30.8328 13.8202 31.9562 13.4163 33.1276 13.4163Z" fill="#5FC1CF"/>
                                </svg>
                            </label>
                        </div>
                        <p v-if="requestConditions?.error?.city" class="text-red-500 mt-1">{{ requestConditions.error.city }}</p>
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اختر مشرف للخيمة<span class="text-red-500">*</span></p>
                        <Select v-model="bransh.city" :options="cities" optionLabel="name_ar" 
                                    placeholder="اختر من القائمة" overlayClass="!bg-white rtl-d p-2" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                    :pt="{overlay:' shadow-xl'}">
                                    <template #value="slotProps">
                                        <span v-if="slotProps.value">{{ slotProps.value.name_ar }}</span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="flex items-center gap-3 mb-3 cursor-pointer py-1 hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                            <div>{{ slotProps.option.name_ar }}</div>
                                        </div>
                                    </template>
                                    <template #dropdownicon>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                        </svg>
                                    </template>
                                    <template #header>
                                        <div class="font-medium"></div>
                                    </template>
                        </Select>
                        <p v-if="requestConditions?.error?.city" class="text-red-500 mt-1">{{ requestConditions.error.city }}</p>
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">رسمة الخيمة<span class="text-red-500">*</span></p>
                        <FileInputComponent
                            @changeFile="changeFile" />
                    </div>
                </div>
                <div class="flex items-center justify-between my-10 text-lg font-bold">
                    <button @click="addBransh" class=" bg-site-blue text-white py-3 px-10 rounded-lg">
                        <span v-if="!requestConditions.loading">
                            إضافة 
                        </span>
                        <LoaderIcon v-else />
                    </button>
                    <RouterLink to="/company-branshes" class="text-red-700 py-4 px-8 ">
                        إلغاء
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useGetRequest, usePostRequest, usePatchRequest } from '../../../composables/useRequest';
import Select from 'primevue/select';
import LocationIcon from '../../../components/icon/LocationIcon.vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '../../../stores/user';
import LoaderIcon from '../../../components/icon/loaderIcon.vue';
import FileInputComponent from '../../../components/Base/FileInputComponent.vue';

const router = useRouter()
const route = useRoute()
const user = useUserStore()
const loadPage = ref(false)
const bransh = ref({
    subscriber_company: user.userCompantId,
    name_ar: null,
    name_en: 'a',
    city: null,
    capacity: null,
    info_branch: null,
    phone: null,
    place_ar: null,
    place_en: null,
    barnch_status: null,
    data_time_gathering: null,
    url_location_gathering: null,
})
const requestConditions = ref({
    data: null,
    error: null,
    loading: false,
})
const statuses = ref([
    {id: 1, name: 'مفعل'},
    {id: 2, name: 'غير مفعل'},
])

const cities = ref()
onMounted(async ()=>{
    const {Data, Error} = await useGetRequest('api/v1/city/')
    cities.value = Data.value.data
    if(route.params.id != 'add') {
        const {Data, Error} = await useGetRequest('api/v1/branch_company/'+route.params.id)
        bransh.value = Data.value.data
        bransh.value.barnch_status = statuses.value.filter( el => el.id == bransh.value.barnch_status )[0]
        bransh.value.city = cities.value.filter( el => el.id == bransh.value.city )[0]
        loadPage.value = true
    }
    loadPage.value = true
})

const addBransh = async () => {
    requestConditions.value.loading = true
    bransh.value.city = bransh.value?.city?.id
    bransh.value.barnch_status = bransh.value?.barnch_status?.id
    if(route.params.id == 'add') {
        const { Data, Error } = await usePostRequest('api/v1/branch_company/',bransh.value)
        requestConditions.value.error = Error?.value?.errors
        requestConditions.value.data = Data.value
    }
    else {
        const { Data, Error } = await usePatchRequest('api/v1/branch_company/'+route.params.id+'/',bransh.value)
        requestConditions.value.error = Error?.value?.errors
        requestConditions.value.data = Data.value
    }
    if(requestConditions.value.error != null) {
        requestConditions.value.loading = false
    }
    else {
        router.push('/company-branshes')
    }
}
</script>

<style>

</style>