<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <h1 class="text-site-blue text-xl font-semibold my-4">عرض الرسالة
                </h1>
                <hr>
                <div class="relative w-full my-4">
                    <h1 class="font-bold my-2">محتوى الرسالة</h1>
                    <textarea
                    class="rules-section w-full bg-white border border-[#BDBDBD] py-2 px-5 rounded-xl h-52"
                    >
الى حجاج شركة الابرار
السلام عليكم ورحمة الله وبركاته،
الى الحاج: خالد
رقم الحجز: 638987 
نتمنى لكم رحلة حج مباركة وآمنة. نود أن نشكركم على اختياركم لشركتنا لتنظيم رحلتكم الدينية، ونود أن نقدم لكم بعض التعليمات والمعلومات الهامة لضمان سهولة وسلاسة تنفيذ فريضة الحج.
يرجى التأكد من حمل جميع الوثائق الضرورية معكم، بما في ذلك جوازات السفر وتأشيرات الدخول.
يُرجى التحقق من الأمتعة وضمان أن تكون جميع الأغراض الشخصية قد تم تجهيزها بشكل كامل.
ننصح بارتداء ملابس مريحة ومناسبة للطقس، وضرورة اصطحاب أدوات النظافة الشخصية.
يرجى الالتزام بالمواعيد المحددة للتنقل والتجمع.
نرجو منكم التواصل مع فريق الإرشاد الخاص بشركتنا في حال وجود أي استفسارات أو مشاكل خلال الرحلة.
نتمنى لكم رحلة حج مميزة وقضاء أوقات هادئة ومباركة في أرض الحرمين الشريفين.
شكرًا لثقتكم بنا.
مع خالص التحية،
شركة الابرار 
البريد الاكتروني : mail@mail.com

                    </textarea>
                </div>
                <div class="w-full rounded-2xl flex">
                <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">تاريخ الإرسال</p>
                        <input 
                        disabled
                        name="" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="2023/8/2">
                    </div>
                    <div class="w-[8%]"></div>
                    <div class="w-[45%]">
                        <p class="text-black font-semibold w-[50%] mb-3">حالة الرسالة</p>
                        <input 
                        disabled
                        name="" 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="تم الإرسال">
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