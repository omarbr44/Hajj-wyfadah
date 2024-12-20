<template>
    <div class="w-[80%] bg-[#f9f9f9] min-h-screen">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <h1 class="text-site-blue text-xl font-semibold my-4">عرض الرسالة
                </h1>
                <hr>
                <div class="w-full rounded-2xl flex">
                <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اسم المرسل</p>
                        <input 
                        disabled
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="Aliaa company">
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">رقم الجوال</p>
                        <input 
                        disabled
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="+966 508283999">
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="relative w-[45%] my-4">
                        <h1 class="font-bold my-2">محتوى الرسالة</h1>
                        <textarea
                        class="rules-section w-full bg-white border border-[#BDBDBD] py-2 px-5 rounded-xl h-52"
                        >
                        هنيئاً لكم حجاج البيت العتيق، القادمون من كل فجٍّ عميق. ندعوكم لمتابعة حساباتنا في منصات التواصل الاجتماعي تويتر و سناب وفيسبوك وانستقرام alkafhajj@ شركة عبدالله صالح الكاف لخدمات حجاج الداخل
                        </textarea>
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="relative w-[45%] my-4">
                        <h1 class="font-bold my-2">إرسال رد</h1>
                        <textarea
                        placeholder="اكتب ردك للرسالة"
                        class="rules-section w-full bg-white border border-[#BDBDBD] pt-2 py-14 px-5 rounded-xl h-52 relative"
                        >
                        </textarea>
                        <button class="absolute bottom-5 left-5 bg-site-blue text-white rounded-3xl py-2 px-4">ارسال</button>
                    </div>

                </div>
            </div>
        </div>
        <div v-else class=" flex justify-center mt-52">
            <PageLoader />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useGetRequest } from '../../../composables/useRequest';
import PageLoader from '../../../components/icon/PageLoader.vue';

const loadPage = ref(false)
const viewAll = ref(true)
const locations = ref(null)
const route = useRoute()
onMounted(async ()=>{
    if(route.params.id != 'all')
        viewAll.value = false
/*     const {Data, Error} = await useGetRequest('api/v1/location/')
    locations.value = Data.value.data.result
    nextPage.value = Data.value.data.next ? true : false
    previousPage.value = Data.value.data.previous ? true : false   
        pages.value = Data.value.data.count / 15 */
    loadPage.value = true
})


</script>