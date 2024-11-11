<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div v-if="loadPage">
            <div class="rtl-d px-5 pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">المعلومات الخاصة بالشركة</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-4 gap-y-10">
                    <div class="flex gap-2 items-center w-[48%]">
                        <p class="text-black font-semibold w-[50%]">الأسم باللغة العربية</p>
                        <input 
                        v-model="companyInfo.name_ar"
                        name="arname" 
                        type="text" 
                        class="w-full relative border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="شركة عبدالله صالح الكاف لخدمات حجاج الداخل">
                    </div>
                    <div class="flex gap-2 items-center w-[48%]">
                        <p class="text-black font-semibold w-[50%]">الأسم باللغة الإنجليزية</p>
                        <input
                        v-model="companyInfo.name_en" 
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
                            <form>
                                <input @change="changelogo($event.target.files[0])" ref="logoFileinput" id="logoFileinput" type="file" style="display:none;"/>
                            </form>
                            <button @click="logoFileinput.click()" class="w-full h-56 border border-[#BDBDBD] p-2 rounded-xl">  

                            </button>
                            <img @click="logoFileinput.click()" src="/img/uploadFile.png" alt="uploadFile" class="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 cursor-pointer">
                        </div>
                    </div>
                    <div class="flex gap-2 items-center w-[48%]">
                        <p class="text-black font-semibold w-[50%]">ملف الشروط والأحكام</p>
                        <div class="w-full relative">
                            <form>
                                <input @change="changeTermsFile($event.target.files[0])" ref="termsFileinput" id="termsFileinput" type="file" style="display:none;"/>
                            </form>
                            <button @click="termsFileinput.click()" class="w-full h-56 border border-[#BDBDBD] p-2 rounded-xl">  

                            </button>
                            <img @click="termsFileinput.click()" src="/img/uploadFile.png" alt="uploadFile" class="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 cursor-pointer">
                        </div>
                    </div>
                </div>
                <h1 class="text-xl font-bold text-site-blue my-5">معلومات التواصل</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-4 gap-y-10">
                    <div class="flex gap-2 items-center w-[48%]">
                        <p class="text-black font-semibold w-[50%]">رقم الهاتف</p>
                        <input
                        v-model="companyInfo.company_phone1" 
                        name="telenumber" 
                        type="text" 
                        class="w-full relative border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="96689470493">
                    </div>
                    <div class="flex gap-2 items-center w-[48%]">
                        <p class="text-black font-semibold w-[50%]">رقم الجوال</p>
                        <input
                        v-model="companyInfo.company_phone"  
                        name="phonenumber" 
                        type="text" 
                        class="w-full relative border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="0508983345">
                    </div>
                    <div class="flex gap-2 items-center w-[48%]">
                        <p class="text-black font-semibold w-[50%]">البريد الالكتروني</p>
                        <input 
                        v-model="companyInfo.compay_email"
                        name="email" 
                        type="email" 
                        class="w-full relative border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="mail@gmail.com">
                    </div>
                    <div class="flex gap-2 items-center w-[48%]">
                        <p class="text-black font-semibold w-[50%]">موقع الشركة الالكتروني</p>
                        <input 
                        v-model="companyInfo.company_websiet"
                        name="companyemail" 
                        type="text" 
                        class="w-full relative border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="www.comapny.com">
                    </div>
                    <div class="flex gap-2 items-center w-[48%]">
                        <p class="text-black font-semibold w-[50%]">العنوان الرئيسي</p>
                        <input 
                        v-model="companyInfo.company_address"
                        name="location" 
                        type="text" 
                        class="w-full relative border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="الرياض- التخصصي -شارع 34">
                    </div>
                </div>
                <p class="text-red-500" v-if="editCompanyInfoError">{{ editCompanyInfoError }}</p>
                <div class="flex justify-end flex-col gap-5 px-5">
                    <button @click="editCompanyInfo" class="text-white bg-site-blue p-4 font-bold rounded-xl my-3 mr-auto flex justify-center items-center">
                        <span v-if="!editCompanyInfoLoading">
                            تعديل البيانات
                        </span>
                        <loaderIcon v-else />  
                    </button>
                </div>
                <h1 class="text-xl font-bold text-site-blue my-5">الشروط والأحكام</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl my-5">
                    <div class="flex gap-3">
                        <PlusIconBg />
                        <h2 class="text-xl font-bold text-site-blue mb-5">أضف لغة جديدة</h2>
                    </div>
                    <h2 class="text-lg font-semibold text-black mb-5">ملف الشروط والاحكام</h2>
                    <div class="w-full relative px-5">
                        <Dialog v-model:visible="modalVisible" modal closeIcon="!hidden" :closeOnEscape="true" class="bg-white rounded-lg rtl-d" :pt="{mask:'bg-[#00000042]',pcCloseButton:'!hidden !opacity-0'}" :style="{ width: '70%' }">
                            <template #container="{ closeCallback }">   
                            <h1 class="text-black text-2xl font-bold text-center my-5">إضافة لغة جديدة</h1>
                            <div v-if="termsConditions.length" class="w-[90%] mx-auto px-5 py-2 flex items-center justify-evenly border border-site-blue rounded-3xl">
                                <img :src="'/img/'+fromCountry.code+'.svg'" alt="">
                                <span class="text-lg">{{ fromCountry.name }}</span>
                                <div class="lang-container">
                                <Select v-model="fromCountry" :options="languages" optionLabel="name" 
                                    placeholder="" overlayClass="!bg-white rtl-d p-2" class="w-[4rem]"
                                    :pt="{overlay:' w-[15rem] shadow-xl'}">
                                    <template #value="slotProps">
                                        <span></span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="flex items-center gap-3 mb-3 cursor-pointer py-3 hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                            <img :src="'/img/'+slotProps.option.code+'.svg'" alt="flag">           
                                            <div>{{ slotProps.option.name }}</div>
                                        </div>
                                    </template>
                                    <template #dropdownicon>
                                        <img class="" src="/img/dropdown-arrow.svg" alt="">
                                    </template>
                                    <template #header>
                                        <div class="font-medium p-3"></div>
                                    </template>
                                </Select>
                                </div>
                                <p>من</p>
                                <button @click="swapCountries" >
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.25 8.75H3.75M26.25 8.75L22.5 12.5M26.25 8.75L22.5 5M7.5 25L3.75 21.25M3.75 21.25L7.5 17.5M3.75 21.25H26.25" stroke="#008093" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <p>الى</p>
                                <img :src="'/img/'+toCountry.code+'.svg'" alt="">
                                <span class="text-lg">{{ toCountry.name }}</span>
                                <div class="lang-container">
                                <Select v-model="toCountry" :options="languages" optionLabel="name" 
                                    placeholder="" overlayClass="bg-white rtl-d p-2" class="w-[4rem]"
                                    :pt="{overlay:'w-[15rem] shadow-xl'}">
                                    <template #value="slotProps">
                                        <span></span>
                                    </template>
                                    <template #option="slotProps">
                                        
                                        <div class="flex items-center gap-3 mb-3 p-2 cursor-pointer hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                            <img :src="'/img/'+slotProps.option.code+'.svg'" alt="flag">   
                                            <div>{{ slotProps.option.name }}</div>
                                        </div>
                                    </template>
                                    <template #dropdownicon>
                                        <img class="" src="/img/dropdown-arrow.svg" alt="">
                                    </template>
                                    <template #header>
                                        <div class="font-medium p-3"></div>
                                    </template>
                                </Select>
                                </div>
                            </div>
                            <div v-else class="w-[90%] mx-auto px-5 py-2 flex items-center justify-center gap-10 border border-site-blue rounded-3xl">       
                                <img :src="'/img/'+toCountry.code+'.svg'" alt="">
                                <span class="text-lg">{{ toCountry.name }}</span>
                                <div class="lang-container">
                                <Select v-model="toCountry" :options="languages" optionLabel="name" 
                                    placeholder="" overlayClass="bg-white rtl-d p-2" class="w-[4rem]"
                                    :pt="{overlay:'w-[15rem] shadow-xl'}">
                                    <template #value="slotProps">
                                        <span></span>
                                    </template>
                                    <template #option="slotProps">
                                        
                                        <div class="flex items-center gap-3 mb-3 p-2 cursor-pointer hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                            <img :src="'/img/'+slotProps.option.code+'.svg'" alt="flag">   
                                            <div>{{ slotProps.option.name }}</div>
                                        </div>
                                    </template>
                                    <template #dropdownicon>
                                        <img class="" src="/img/dropdown-arrow.svg" alt="">
                                    </template>
                                    <template #header>
                                        <div class="font-medium p-3"></div>
                                    </template>
                                </Select>
                                </div>
                            </div>
                            <div class="w-full flex flex-wrap gap-2 gap-y-10 my-5 px-2">
                        <div v-if="termsConditions.length" class="w-[48%]">
                            <h1 class="text-site-text-grey mb-3">أضف نص الشروط والأحكام</h1>
                            <div class=" w-full h-64 bg-white border border-[#DADADA] rounded-2xl relative p-1"> 
                                <textarea v-model="fromTermConditon"  class="text-black w-full h-full p-5 rules-section">
                                </textarea>
                                <button @click="print" class="print-button absolute bottom-0 left-5">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.0004 10.7688V7.0188H10.0004V10.7688H8.75043V5.7688H21.2504V10.7688H20.0004ZM22.0192 15.1438C22.3733 15.1438 22.6704 15.0242 22.9104 14.785C23.1504 14.5459 23.27 14.2488 23.2692 13.8938C23.2692 13.5396 23.1496 13.243 22.9104 13.0038C22.6713 12.7646 22.3742 12.6446 22.0192 12.6438C21.665 12.6438 21.3683 12.7638 21.1292 13.0038C20.89 13.2438 20.77 13.5405 20.7692 13.8938C20.7692 14.248 20.8892 14.545 21.1292 14.785C21.3692 15.025 21.6658 15.1446 22.0192 15.1438ZM20.0004 23.75V18.0775H10.0004V23.75H20.0004ZM21.2504 25H8.75043V20H4.47168V13.2688C4.47168 12.5605 4.7121 11.9667 5.19293 11.4875C5.67376 11.0084 6.26668 10.7688 6.97168 10.7688H23.0292C23.7375 10.7688 24.3313 11.0084 24.8104 11.4875C25.2896 11.9667 25.5292 12.5605 25.5292 13.2688V20H21.2504V25ZM24.2792 18.75V13.2688C24.2792 12.9146 24.1596 12.618 23.9204 12.3788C23.6813 12.1396 23.3842 12.0196 23.0292 12.0188H6.97168C6.61751 12.0188 6.32043 12.1388 6.08043 12.3788C5.84043 12.6188 5.72085 12.9155 5.72168 13.2688V18.75H8.75043V16.8275H21.2504V18.75H24.2792Z" fill="#666666"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="w-[48%] ">
                            <h1 class="text-site-text-grey mb-3">الشروط والاحكام مترجمة</h1>
                            <div class=" w-full h-64 bg-white border border-[#DADADA] rounded-2xl relative p-1"> 
                                <textarea v-model="toTermConditon" class="text-black w-full h-full p-5 rules-section">
                                </textarea>
                                <button @click="print" class="print-button absolute bottom-0 left-5">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.0004 10.7688V7.0188H10.0004V10.7688H8.75043V5.7688H21.2504V10.7688H20.0004ZM22.0192 15.1438C22.3733 15.1438 22.6704 15.0242 22.9104 14.785C23.1504 14.5459 23.27 14.2488 23.2692 13.8938C23.2692 13.5396 23.1496 13.243 22.9104 13.0038C22.6713 12.7646 22.3742 12.6446 22.0192 12.6438C21.665 12.6438 21.3683 12.7638 21.1292 13.0038C20.89 13.2438 20.77 13.5405 20.7692 13.8938C20.7692 14.248 20.8892 14.545 21.1292 14.785C21.3692 15.025 21.6658 15.1446 22.0192 15.1438ZM20.0004 23.75V18.0775H10.0004V23.75H20.0004ZM21.2504 25H8.75043V20H4.47168V13.2688C4.47168 12.5605 4.7121 11.9667 5.19293 11.4875C5.67376 11.0084 6.26668 10.7688 6.97168 10.7688H23.0292C23.7375 10.7688 24.3313 11.0084 24.8104 11.4875C25.2896 11.9667 25.5292 12.5605 25.5292 13.2688V20H21.2504V25ZM24.2792 18.75V13.2688C24.2792 12.9146 24.1596 12.618 23.9204 12.3788C23.6813 12.1396 23.3842 12.0196 23.0292 12.0188H6.97168C6.61751 12.0188 6.32043 12.1388 6.08043 12.3788C5.84043 12.6188 5.72085 12.9155 5.72168 13.2688V18.75H8.75043V16.8275H21.2504V18.75H24.2792Z" fill="#666666"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                            </div>
                            <p v-if="NewLangError" class="text-red-500 m-4">{{ NewLangError }}</p>
                            <div class="w-full flex justify-between p-5 text-xl">
                                <button class="p-2 px-8 bg-site-blue text-white rounded-md flex justify-center items-center" @click="addNewLang(closeCallback)">
                                    <span v-if="!addNewLangLoading">
                                        اضافة
                                    </span>
                                    <loaderIcon v-else />                 
                                </button>
                                <button class="p-2 text-site-text-grey" @click="closeCallback">الغاء</button>
                            </div>
                            </template> 
                        </Dialog>
                        <button @click="modalVisible = true" class="w-full h-44 bg-white border border-[#BDBDBD] p-2 rounded-xl">  
                        </button>
                        <img @click="modalVisible = true" src="/img/uploadFile2.png" alt="uploadFile" class="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 cursor-pointer">
                    </div>
                    <a :href="companyInfo.compay_terms_conditions" download class="flex gap-3 m-5">
                        <h2 class="font-semibold text-site-blue">تنزيل ملف الشروط والاحكام</h2>
                        <DownloadIcon />
                    </a>
                    <div class="w-full flex flex-wrap gap-2 gap-y-10">
                        <div v-for="(terms,index) in termsConditions" :key="index" class="w-[48%]">
                            <h1 class="text-lg font-semibold text-black mb-5">ملف الشروط والأحكام باللغة {{terms.name_language}}</h1>
                            <div class=" w-full h-64 bg-white border border-[#DADADA] rounded-2xl relative p-1"> 
                                <textarea readonly v-model="terms.terms_conditions"  class="text-black w-full h-full p-5 rules-section">
                                </textarea>
                                <button @click="print" class="print-button absolute bottom-0 left-5">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.0004 10.7688V7.0188H10.0004V10.7688H8.75043V5.7688H21.2504V10.7688H20.0004ZM22.0192 15.1438C22.3733 15.1438 22.6704 15.0242 22.9104 14.785C23.1504 14.5459 23.27 14.2488 23.2692 13.8938C23.2692 13.5396 23.1496 13.243 22.9104 13.0038C22.6713 12.7646 22.3742 12.6446 22.0192 12.6438C21.665 12.6438 21.3683 12.7638 21.1292 13.0038C20.89 13.2438 20.77 13.5405 20.7692 13.8938C20.7692 14.248 20.8892 14.545 21.1292 14.785C21.3692 15.025 21.6658 15.1446 22.0192 15.1438ZM20.0004 23.75V18.0775H10.0004V23.75H20.0004ZM21.2504 25H8.75043V20H4.47168V13.2688C4.47168 12.5605 4.7121 11.9667 5.19293 11.4875C5.67376 11.0084 6.26668 10.7688 6.97168 10.7688H23.0292C23.7375 10.7688 24.3313 11.0084 24.8104 11.4875C25.2896 11.9667 25.5292 12.5605 25.5292 13.2688V20H21.2504V25ZM24.2792 18.75V13.2688C24.2792 12.9146 24.1596 12.618 23.9204 12.3788C23.6813 12.1396 23.3842 12.0196 23.0292 12.0188H6.97168C6.61751 12.0188 6.32043 12.1388 6.08043 12.3788C5.84043 12.6188 5.72085 12.9155 5.72168 13.2688V18.75H8.75043V16.8275H21.2504V18.75H24.2792Z" fill="#666666"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
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
import { onMounted, ref, watch } from 'vue';
import { serialize } from 'object-to-formdata';
import Select from 'primevue/select';
import PlusIconBg from '../components/icon/PlusIconBg.vue';
import loaderIcon from '../components/icon/loaderIcon.vue';
import { useGetRequest, usePatchRequest, usePostRequest } from '../composables/useRequest';
import { useRouter } from 'vue-router';
import DownloadIcon from '../components/icon/DownloadIcon.vue';
import PageLoader from '../components/icon/PageLoader.vue';
import { useUserStore } from '../stores/user';

const user = useUserStore()
const router = useRouter()
const loadPage =ref(false)
// defining variables related to APIs
const companyInfo = ref()
const termsConditions = ref()
const languages = ref()
const fromCountry = ref();
const toCountry = ref();
const fromTermConditon = ref(null)
const toTermConditon = ref()
onMounted(async ()=>{
   const { Data } = await useGetRequest('api/v1/company/')
   companyInfo.value = Data.value.data.result[0]
   user.setCompanyId(companyInfo.value.id)
   const { Data:terms } = await useGetRequest('api/v1/terms_conditions/')
   termsConditions.value = terms.value.data.result
   const { Data:language } = await useGetRequest('api/v1/language')
   languages.value = language.value.data
   // set default values for languages (from , to)
   fromCountry.value = languages.value[0]
   toCountry.value = languages.value[1]

   // set value for TermConditons based on default values for language (from)  
   // If no termsConditions exist, make user create One
   if(termsConditions.value.length) {
       fromTermConditon.value = termsConditions.value.filter((el)=> el.language == fromCountry.value.id)
       fromTermConditon.value = fromTermConditon.value[0].terms_conditions
   }
   loadPage.value = true
})
//change TermConditons when language changes
watch(fromCountry, ()=>{
    if(termsConditions.value.length) {
        fromTermConditon.value = termsConditions.value.filter((el)=> el.language == fromCountry.value.id)
        fromTermConditon.value = fromTermConditon.value[0].terms_conditions
    }
})
/* watch(toCountry, ()=>{
    toTermConditon.value = termsConditions.value.filter((el)=> el.language == toCountry.value.id)
    toTermConditon.value = toTermConditon.value[0].terms_conditions
}) */

const editCompanyInfoLoading = ref(false)
const editCompanyInfoError = ref()
const editCompanyInfo = async () => {
    editCompanyInfoLoading.value = true
    // If there is already file stored as url then we need to convert it to file
    if(typeof companyInfo.value.company_log == 'string') {
        // make a new parser
        const parser = new DOMParser();
        // convert text into file
        companyInfo.value.company_log = parser.parseFromString(companyInfo.value.company_log,'image/svg+xml');
        companyInfo.value.compay_terms_conditions = parser.parseFromString(companyInfo.value.compay_terms_conditions,'image/svg+xml');
    }
    const formData = serialize(companyInfo.value)
    const { Data, Error } = await usePatchRequest('api/v1/company/'+companyInfo.value.id+'/',formData)
    editCompanyInfoLoading.value = false
    if(Data.value == null) {
        editCompanyInfoError.value = Error.value.message
    }
    else {
        router.go()
    }
}

const newLang = ref({
    subscriber_company: null,
    language: null,
    terms_conditions: null
})
const addNewLangLoading = ref(false)
const NewLangError = ref('')
const addNewLang = async (closeCallback) => {
    addNewLangLoading.value = true
    newLang.value.subscriber_company = companyInfo.value.id
    newLang.value.language = toCountry.value.id
    newLang.value.terms_conditions = toTermConditon.value
    const {Data, Error} = await usePostRequest('api/v1/terms_conditions/',newLang.value)
    addNewLangLoading.value = false
    if(Data.value == null) {
        NewLangError.value = Error.value.message
    }
    else {
        router.go()
    }
}

const modalVisible = ref(false);
const swapCountries = () => {
    let temp = fromCountry.value
    fromCountry.value = toCountry.value
    toCountry.value = temp
}

const logoFileinput = ref(null)
const changelogo = (file) => {
    companyInfo.value.company_log = file
    
}
const termsFileinput = ref(null)
const changeTermsFile = (file) => {
    companyInfo.value.compay_terms_conditions = file
    
}
const print = ()=>{
    window.print()
}

</script>

<style>
.rules-section::-webkit-scrollbar {
            width: 15px;
        }
.rules-section::-webkit-scrollbar-track {
            border-radius: 2px;
            background-color: none;
        }
.rules-section::-webkit-scrollbar-thumb {
            cursor: auto;
            border-radius: 8px;
            border: 3px solid transparent;
            background-clip: content-box;
            background-color: #D9D9D9;
        }
</style>