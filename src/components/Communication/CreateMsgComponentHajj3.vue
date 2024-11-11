<template>
<div class="w-full border border-[#008093] rounded-xl">
                    <div class="header mb-16 border-b border-[#DADADA] ml-4 flex ">
                        <div class="bg-[#008093] py-2 px-1 flex justify-evenly items-center text-white w-48 rounded-ss-xl">
                            <div class="bg-white px-2 rounded-full text-[#008093]">1</div>
                            <span>وسيلة الإرسال</span>
                            <span>></span>
                        </div>
                        <div class="bg-[#008093] py-2 px-1 flex justify-evenly items-center text-white w-52">
                            <div class="bg-white px-2 rounded-full text-[#008093]">2</div>
                            <span>تحديد نوع المستلمين</span>
                            <span>></span>
                        </div>
                        <div class="bg-[#008093] py-2 px-1 flex justify-evenly items-center text-white w-48 rounded-xl rounded-s-none rounded-ee-3xl rounded-se-3xl ">
                            <div class="bg-white px-2 rounded-full text-[#008093]">3</div>
                            <span>تحديد الحاج</span>
                            <span>></span>
                        </div>
                    </div>
                    <div class="">
                        <h1 class="text-xl font-bold text-site-blue mb-5 px-4">حدد المستلمين من التصنيفات التالية :</h1>
                        <div class="w-full p-4 flex flex-wrap gap-y-8">
                            <div class="w-[45%]">
                                <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" 
                                            placeholder="" overlayClass="!bg-white rtl-d p-2 overflow-y-auto" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                            :pt="{overlay:' shadow-xl'}">
                                            <template #value="slotProps">
                                                <div class="flex items-center gap-4 w-96 overflow-hidden">
                                                    <span class="text-site-blue font-semibold">المدينة</span>
                                                    <div v-for="(city,index) in selectedCities" :key="index" class=" relative bg-[#48B3C3] bg-opacity-35 text-[#008093] rounded-3xl px-6 py-2">
                                                        <span>{{ city.name }}</span>
                                                        <span @click="removeSelectedItem(index)" class="cursor-pointer absolute top-0 right-0 bg-[#008093] rounded-full flex justify-center items-center text-white px-[5px] py-0" style="line-height: 1.2;">x</span>
                                                    </div>
                                                </div>
                                            </template>
                                            <template #option="slotProps">
                                                <div @click="slotProps.option.selected = !slotProps.option.selected" class="w-full cursor-pointer">
                                                    <div
                                                    class="flex items-center justify-between rounded-md p-2 my-2"
                                                    :class="slotProps.option.selected ? 'bg-site-blue bg-opacity-30' : ''">
                                                        <div>{{ slotProps.option.name }}</div>
                                                        <svg v-show="slotProps.option.selected" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.08594 12L4.6901 8.875L9.89844 15.125L20.3151 2.625L22.9193 5.75L9.89844 21.375L2.08594 12Z" fill="#008093" stroke="#008093" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                    </div>
                                                    <hr>
                                                </div>
                                            </template>
                                            <template #dropdownicon>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                                </svg>
                                            </template>
                                            <template #header>
                                                <div class="">
                                                    <div class="flex items-center gap-2 p-2">
                                                        <input type="checkbox" @click="checkAll(selectedCities,cities,cityCheckAll)" value="" v-model="cityCheckAll" name="default-checkbox" class="w-4 h-4 text-site-blue bg-gray-100 border-gray-300 focus:text-site-blue focus:ring-site-blue">
                                                        <label for="default-checkbox">تحديد الكل</label>
                                                    </div>
                                                    <hr class="mb-2">
                                                    <SearchComponent
                                                    class="my-3"
                                                    api=""
                                                    @resultSearch="searchResult" />
                                                </div>
                                            </template>
                                        </MultiSelect>
                            </div>
                            <div class="w-[8%]"></div>
                            <div class="w-[45%]">
                                <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" 
                                            placeholder="" overlayClass="!bg-white rtl-d p-2 overflow-y-auto" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                            :pt="{overlay:' shadow-xl'}">
                                            <template #value="slotProps">
                                                <div class="flex items-center gap-4 w-96 overflow-hidden">
                                                    <span class="text-site-blue font-semibold">الجنسية</span>
                                                    <div v-for="(city,index) in selectedCities" :key="index" class=" relative bg-[#48B3C3] bg-opacity-35 text-[#008093] rounded-3xl px-6 py-2">
                                                        <span>{{ city.name }}</span>
                                                        <span @click="removeSelectedItem(index)" class="cursor-pointer absolute top-0 right-0 bg-[#008093] rounded-full flex justify-center items-center text-white px-[5px] py-0" style="line-height: 1.2;">x</span>
                                                    </div>
                                                </div>
                                            </template>
                                            <template #option="slotProps">
                                                <div @click="slotProps.option.selected = !slotProps.option.selected" class="w-full cursor-pointer">
                                                    <div
                                                    class="flex items-center justify-between rounded-md p-2 my-2"
                                                    :class="slotProps.option.selected ? 'bg-site-blue bg-opacity-30' : ''">
                                                        <div>{{ slotProps.option.name }}</div>
                                                        <svg v-show="slotProps.option.selected" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.08594 12L4.6901 8.875L9.89844 15.125L20.3151 2.625L22.9193 5.75L9.89844 21.375L2.08594 12Z" fill="#008093" stroke="#008093" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                    </div>
                                                    <hr>
                                                </div>
                                            </template>
                                            <template #dropdownicon>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                                </svg>
                                            </template>
                                            <template #header>
                                                <div class="">
                                                    <div class="flex items-center gap-2 p-2">
                                                        <input type="checkbox" @click="checkAll(selectedCities,cities,cityCheckAll)" value="" v-model="cityCheckAll" name="default-checkbox" class="w-4 h-4 text-site-blue bg-gray-100 border-gray-300 focus:text-site-blue focus:ring-site-blue">
                                                        <label for="default-checkbox">تحديد الكل</label>
                                                    </div>
                                                    <hr class="mb-2">
                                                    <SearchComponent
                                                    class="my-3"
                                                    api=""
                                                    @resultSearch="searchResult" />
                                                </div>
                                            </template>
                                        </MultiSelect>
                            </div>
                            <div class="w-[45%]">
                                <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" 
                                            placeholder="" overlayClass="!bg-white rtl-d p-2 overflow-y-auto" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                            :pt="{overlay:' shadow-xl'}">
                                            <template #value="slotProps">
                                                <div class="flex items-center gap-4 w-96 overflow-hidden">
                                                    <span class="text-site-blue font-semibold">اسم البرنامج</span>
                                                    <div v-for="(city,index) in selectedCities" :key="index" class=" relative bg-[#48B3C3] bg-opacity-35 text-[#008093] rounded-3xl px-6 py-2">
                                                        <span>{{ city.name }}</span>
                                                        <span @click="removeSelectedItem(index)" class="cursor-pointer absolute top-0 right-0 bg-[#008093] rounded-full flex justify-center items-center text-white px-[5px] py-0" style="line-height: 1.2;">x</span>
                                                    </div>
                                                </div>
                                            </template>
                                            <template #option="slotProps">
                                                <div @click="slotProps.option.selected = !slotProps.option.selected" class="w-full cursor-pointer">
                                                    <div
                                                    class="flex items-center justify-between rounded-md p-2 my-2"
                                                    :class="slotProps.option.selected ? 'bg-site-blue bg-opacity-30' : ''">
                                                        <div>{{ slotProps.option.name }}</div>
                                                        <svg v-show="slotProps.option.selected" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.08594 12L4.6901 8.875L9.89844 15.125L20.3151 2.625L22.9193 5.75L9.89844 21.375L2.08594 12Z" fill="#008093" stroke="#008093" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                    </div>
                                                    <hr>
                                                </div>
                                            </template>
                                            <template #dropdownicon>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                                </svg>
                                            </template>
                                            <template #header>
                                                <div class="">
                                                    <div class="flex items-center gap-2 p-2">
                                                        <input type="checkbox" @click="checkAll(selectedCities,cities,cityCheckAll)" value="" v-model="cityCheckAll" name="default-checkbox" class="w-4 h-4 text-site-blue bg-gray-100 border-gray-300 focus:text-site-blue focus:ring-site-blue">
                                                        <label for="default-checkbox">تحديد الكل</label>
                                                    </div>
                                                    <hr class="mb-2">
                                                    <SearchComponent
                                                    class="my-3"
                                                    api=""
                                                    @resultSearch="searchResult" />
                                                </div>
                                            </template>
                                        </MultiSelect>
                            </div>
                            <div class="w-[8%]"></div>
                            <div class="w-[45%]">
                                <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" 
                                            placeholder="" overlayClass="!bg-white rtl-d p-2 overflow-y-auto" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                            :pt="{overlay:' shadow-xl'}">
                                            <template #value="slotProps">
                                                <div class="flex items-center gap-4 w-96 overflow-hidden">
                                                    <span class="text-site-blue font-semibold">الجنس</span>
                                                    <div v-for="(city,index) in selectedCities" :key="index" class=" relative bg-[#48B3C3] bg-opacity-35 text-[#008093] rounded-3xl px-6 py-2">
                                                        <span>{{ city.name }}</span>
                                                        <span @click="removeSelectedItem(index)" class="cursor-pointer absolute top-0 right-0 bg-[#008093] rounded-full flex justify-center items-center text-white px-[5px] py-0" style="line-height: 1.2;">x</span>
                                                    </div>
                                                </div>
                                            </template>
                                            <template #option="slotProps">
                                                <div @click="slotProps.option.selected = !slotProps.option.selected" class="w-full cursor-pointer">
                                                    <div
                                                    class="flex items-center justify-between rounded-md p-2 my-2"
                                                    :class="slotProps.option.selected ? 'bg-site-blue bg-opacity-30' : ''">
                                                        <div>{{ slotProps.option.name }}</div>
                                                        <svg v-show="slotProps.option.selected" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.08594 12L4.6901 8.875L9.89844 15.125L20.3151 2.625L22.9193 5.75L9.89844 21.375L2.08594 12Z" fill="#008093" stroke="#008093" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                    </div>
                                                    <hr>
                                                </div>
                                            </template>
                                            <template #dropdownicon>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                                </svg>
                                            </template>
                                            <template #header>
                                                <div class="">
                                                    <div class="flex items-center gap-2 p-2">
                                                        <input type="checkbox" @click="checkAll(selectedCities,cities,cityCheckAll)" value="" v-model="cityCheckAll" name="default-checkbox" class="w-4 h-4 text-site-blue bg-gray-100 border-gray-300 focus:text-site-blue focus:ring-site-blue">
                                                        <label for="default-checkbox">تحديد الكل</label>
                                                    </div>
                                                    <hr class="mb-2">
                                                    <SearchComponent
                                                    class="my-3"
                                                    api=""
                                                    @resultSearch="searchResult" />
                                                </div>
                                            </template>
                                        </MultiSelect>
                            </div>
                            <div class="w-[45%]">
                                <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" 
                                            placeholder="" overlayClass="!bg-white rtl-d p-2 overflow-y-auto" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                            :pt="{overlay:' shadow-xl'}">
                                            <template #value="slotProps">
                                                <div class="flex items-center gap-4 w-96 overflow-hidden">
                                                    <span class="text-site-blue font-semibold">ركاب الحافلة</span>
                                                    <div v-for="(city,index) in selectedCities" :key="index" class=" relative bg-[#48B3C3] bg-opacity-35 text-[#008093] rounded-3xl px-6 py-2">
                                                        <span>{{ city.name }}</span>
                                                        <span @click="removeSelectedItem(index)" class="cursor-pointer absolute top-0 right-0 bg-[#008093] rounded-full flex justify-center items-center text-white px-[5px] py-0" style="line-height: 1.2;">x</span>
                                                    </div>
                                                </div>
                                            </template>
                                            <template #option="slotProps">
                                                <div @click="slotProps.option.selected = !slotProps.option.selected" class="w-full cursor-pointer">
                                                    <div
                                                    class="flex items-center justify-between rounded-md p-2 my-2"
                                                    :class="slotProps.option.selected ? 'bg-site-blue bg-opacity-30' : ''">
                                                        <div>{{ slotProps.option.name }}</div>
                                                        <svg v-show="slotProps.option.selected" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.08594 12L4.6901 8.875L9.89844 15.125L20.3151 2.625L22.9193 5.75L9.89844 21.375L2.08594 12Z" fill="#008093" stroke="#008093" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                    </div>
                                                    <hr>
                                                </div>
                                            </template>
                                            <template #dropdownicon>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                                </svg>
                                            </template>
                                            <template #header>
                                                <div class="">
                                                    <div class="flex items-center gap-2 p-2">
                                                        <input type="checkbox" @click="checkAll(selectedCities,cities,cityCheckAll)" value="" v-model="cityCheckAll" name="default-checkbox" class="w-4 h-4 text-site-blue bg-gray-100 border-gray-300 focus:text-site-blue focus:ring-site-blue">
                                                        <label for="default-checkbox">تحديد الكل</label>
                                                    </div>
                                                    <hr class="mb-2">
                                                    <SearchComponent
                                                    class="my-3"
                                                    api=""
                                                    @resultSearch="searchResult" />
                                                </div>
                                            </template>
                                        </MultiSelect>
                            </div>
                            <div class="w-[8%]"></div>
                            <div class="w-[45%]">
                                <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" 
                                            placeholder="" overlayClass="!bg-white rtl-d p-2 overflow-y-auto" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                            :pt="{overlay:' shadow-xl'}">
                                            <template #value="slotProps">
                                                <div class="flex items-center gap-4 w-96 overflow-hidden">
                                                    <span class="text-site-blue font-semibold">خيمة منى</span>
                                                    <div v-for="(city,index) in selectedCities" :key="index" class=" relative bg-[#48B3C3] bg-opacity-35 text-[#008093] rounded-3xl px-6 py-2">
                                                        <span>{{ city.name }}</span>
                                                        <span @click="removeSelectedItem(index)" class="cursor-pointer absolute top-0 right-0 bg-[#008093] rounded-full flex justify-center items-center text-white px-[5px] py-0" style="line-height: 1.2;">x</span>
                                                    </div>
                                                </div>
                                            </template>
                                            <template #option="slotProps">
                                                <div @click="slotProps.option.selected = !slotProps.option.selected" class="w-full cursor-pointer">
                                                    <div
                                                    class="flex items-center justify-between rounded-md p-2 my-2"
                                                    :class="slotProps.option.selected ? 'bg-site-blue bg-opacity-30' : ''">
                                                        <div>{{ slotProps.option.name }}</div>
                                                        <svg v-show="slotProps.option.selected" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.08594 12L4.6901 8.875L9.89844 15.125L20.3151 2.625L22.9193 5.75L9.89844 21.375L2.08594 12Z" fill="#008093" stroke="#008093" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                    </div>
                                                    <hr>
                                                </div>
                                            </template>
                                            <template #dropdownicon>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                                </svg>
                                            </template>
                                            <template #header>
                                                <div class="">
                                                    <div class="flex items-center gap-2 p-2">
                                                        <input type="checkbox" @click="checkAll(selectedCities,cities,cityCheckAll)" value="" v-model="cityCheckAll" name="default-checkbox" class="w-4 h-4 text-site-blue bg-gray-100 border-gray-300 focus:text-site-blue focus:ring-site-blue">
                                                        <label for="default-checkbox">تحديد الكل</label>
                                                    </div>
                                                    <hr class="mb-2">
                                                    <SearchComponent
                                                    class="my-3"
                                                    api=""
                                                    @resultSearch="searchResult" />
                                                </div>
                                            </template>
                                        </MultiSelect>
                            </div>
                            <div class="w-full flex justify-center">
                                <div class="w-[55%]">
                                <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" 
                                            placeholder="" overlayClass="!bg-white rtl-d p-2 overflow-y-auto" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                            :pt="{overlay:' shadow-xl'}">
                                            <template #value="slotProps">
                                                <div class="flex items-center gap-4 w-96 overflow-hidden">
                                                    <span class="text-site-blue font-semibold">حالة الحجز</span>
                                                    <div v-for="(city,index) in selectedCities" :key="index" class=" relative bg-[#48B3C3] bg-opacity-35 text-[#008093] rounded-3xl px-6 py-2">
                                                        <span>{{ city.name }}</span>
                                                        <span @click="removeSelectedItem(index)" class="cursor-pointer absolute top-0 right-0 bg-[#008093] rounded-full flex justify-center items-center text-white px-[5px] py-0" style="line-height: 1.2;">x</span>
                                                    </div>
                                                </div>
                                            </template>
                                            <template #option="slotProps">
                                                <div @click="slotProps.option.selected = !slotProps.option.selected" class="w-full cursor-pointer">
                                                    <div
                                                    class="flex items-center justify-between rounded-md p-2 my-2"
                                                    :class="slotProps.option.selected ? 'bg-site-blue bg-opacity-30' : ''">
                                                        <div>{{ slotProps.option.name }}</div>
                                                        <svg v-show="slotProps.option.selected" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.08594 12L4.6901 8.875L9.89844 15.125L20.3151 2.625L22.9193 5.75L9.89844 21.375L2.08594 12Z" fill="#008093" stroke="#008093" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                    </div>
                                                    <hr>
                                                </div>
                                            </template>
                                            <template #dropdownicon>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                                </svg>
                                            </template>
                                            <template #header>
                                                <div class="">
                                                    <div class="flex items-center gap-2 p-2">
                                                        <input type="checkbox" @click="checkAll(selectedCities,cities,cityCheckAll)" value="" v-model="cityCheckAll" name="default-checkbox" class="w-4 h-4 text-site-blue bg-gray-100 border-gray-300 focus:text-site-blue focus:ring-site-blue">
                                                        <label for="default-checkbox">تحديد الكل</label>
                                                    </div>
                                                    <hr class="mb-2">
                                                    <SearchComponent
                                                    class="my-3"
                                                    api=""
                                                    @resultSearch="searchResult" />
                                                </div>
                                            </template>
                                        </MultiSelect>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex justify-between text-2xl font-bold px-10 mt-40 mb-10">
                        <button @click="$emit('preStep')" class="text-site-text-grey">
                            السابق
                        </button>
                        <button @click="$emit('nextStep')" class=" text-site-blue">
                            التالي
                        </button>
                    </div>
                </div>
</template>

<script setup>

import { ref } from 'vue';
import SearchComponent from '../Base/SearchComponent.vue';
const emit = defineEmits(['nextStep','preStep'])
const cities = ref([
    {name:'جدة',selected:false},
    {name:'مكة',selected:false},
    {name:'الرياض',selected:false},
])
const selectedCities = ref([])
const cityCheckAll = ref(false)

const removeSelectedItem = (index) => {
    selectedCities.value[index].selected = false
    selectedCities.value.splice(index,1)
}
const checkAll = (value,array,check) => {
    value.length = []
    array.forEach(e => {
        e.selected = !check
        if(!check) 
            value.push(e)            
    });        
}
</script>
