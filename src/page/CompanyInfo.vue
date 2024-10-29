<template>
    <div>
        <NavBarComponent />
        <div class="flex justify-stretch">
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
                            <form>
                                <input ref="fileinput" id="fileinput" type="file" style="display:none;"/>
                            </form>
                            <button @click="fileinput.click()" class="w-full h-56 border border-[#BDBDBD] p-2 rounded-xl">  

                            </button>
                            <img @click="fileinput.click()" src="/img/uploadFile.png" alt="uploadFile" class="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 cursor-pointer">
                        </div>
                    </div>
                </div>
                <h1 class="text-xl font-bold text-site-blue my-5">معلومات التواصل</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-4 gap-y-10">
                    <div class="flex gap-2 items-center w-[48%]">
                        <p class="text-black font-semibold w-[50%]">رقم الهاتف</p>
                        <input 
                        name="telenumber" 
                        type="text" 
                        class="w-full relative border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="96689470493">
                    </div>
                    <div class="flex gap-2 items-center w-[48%]">
                        <p class="text-black font-semibold w-[50%]">رقم الجوال</p>
                        <input 
                        name="phonenumber" 
                        type="text" 
                        class="w-full relative border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="0508983345">
                    </div>
                    <div class="flex gap-2 items-center w-[48%]">
                        <p class="text-black font-semibold w-[50%]">البريد الالكتروني</p>
                        <input 
                        name="email" 
                        type="text" 
                        class="w-full relative border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="mail@gmail.com">
                    </div>
                    <div class="flex gap-2 items-center w-[48%]">
                        <p class="text-black font-semibold w-[50%]">موقع الشركة الالكتروني</p>
                        <input 
                        name="companyemail" 
                        type="text" 
                        class="w-full relative border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="www.comapny.com">
                    </div>
                    <div class="flex gap-2 items-center w-[48%]">
                        <p class="text-black font-semibold w-[50%]">العنوان الرئيسي</p>
                        <input 
                        name="location" 
                        type="text" 
                        class="w-full relative border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="الرياض- التخصصي -شارع 34">
                    </div>
                </div>
                <h1 class="text-xl font-bold text-site-blue my-5">الشروط والأحكام</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl my-5">
                    <div class="flex gap-3">
                        <PlusIconBg />
                        <h2 class="text-xl font-bold text-site-blue mb-5">أضف لغة جديدة</h2>
                    </div>
                    <h2 class="text-lg font-semibold text-black mb-5">ملف الشروط والاحكام</h2>
                    <div class="w-full relative px-5">
                        <Dialog v-model:visible="visible" modal closeIcon="!hidden" :closeOnEscape="true" class="bg-white rounded-lg rtl-d" :pt="{mask:'bg-[#00000042]',pcCloseButton:'!hidden !opacity-0'}" :style="{ width: '70%' }">
                            <template #container="{ closeCallback }">   
                            <h1 class="text-black text-2xl font-bold text-center my-5">إضافة لغة جديدة</h1>
                            <div class="w-[90%] mx-auto px-5 py-2 flex items-center justify-evenly border border-site-blue rounded-3xl">
                                <img :src="fromCountry.flag" alt="">
                                <span class="text-lg">{{ fromCountry.name }}</span>
                                <div class="lang-container">
                                <Select v-model="fromCountry" :options="countries" optionLabel="name" 
                                    placeholder="" overlayClass="!bg-white rtl-d p-2" class="w-[4rem]"
                                    :pt="{overlay:' w-[15rem] shadow-xl'}">
                                    <template #value="slotProps">
                                        <span></span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="flex items-center gap-3 mb-3 cursor-pointer py-3 hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                            <img :src="slotProps.option.flag" alt="flag">           
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
                                <img :src="toCountry.flag" alt="">
                                <span class="text-lg">{{ toCountry.name }}</span>
                                <div class="lang-container">
                                <Select v-model="toCountry" :options="countries" optionLabel="name" 
                                    placeholder="" overlayClass="bg-white rtl-d p-2" class="w-[4rem]"
                                    :pt="{overlay:'w-[15rem] shadow-xl'}">
                                    <template #value="slotProps">
                                        <span></span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="flex items-center gap-3 mb-3 p-2 cursor-pointer hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                            <img :src="slotProps.option.flag" alt="flag">   
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
                        <div class="w-[48%]">
                            <h1 class="text-site-text-grey mb-3">أضف نص الشروط والأحكام</h1>
                            <div class=" w-full h-64 bg-white border border-[#DADADA] rounded-2xl relative p-1"> 
                                <textarea class="text-black w-full h-full p-5 rules-section">
سادساً: نظام الملابس داخل المخيم:
16.	لباس الرجال :
حفاظاً على حرمة المكان والزمان فإننا نهيب بالحجاج الإبتعاد عن لباس ما يسمى البرمودا وفانيلة الاكتاف والفلاين التي تحتوي على صور وعبارات إنجليزية.
17.	لباس النساء:
يشترط ان يكون اللباس كاسياً محترماً غير شفاف ولا مكشوف الاكتاف او قصير او ما يوصف بلباس السهرات ويمنع البنطلونات الضيقة او القصيرة والبلوزات مفتوحة الصدر أو قصيرة البطن، كما وتمنع ملابس النوم غير الساترة.
ويحق لإدارة المخيم الاعتراض وطلب تغيير الملابس حفاظاً على نسق المخيم التوعوي.

بهذا أقر أنني اطلعت على الشروط و خطة هذا العام الخاصة بالبرنامج المسجِّل به, والمعلنة في موقع شركة عبدالله صالح الكاف وأنني أوافق على كل ما جاء فيها.
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
                                <textarea class="text-black w-full h-full p-5 rules-section">
                                    چھٹا: کیمپ کے اندر لباس کا نظام:
16. مردوں کا لباس:
جگہ اور وقت کے تقدس کو برقرار رکھنے کے لیے، ہم عازمین حج سے مطالبہ کرتے ہیں کہ وہ نام نہاد برمودا، کندھے کی ٹی شرٹس، اور کارک سکرو سے دور رہیں جن میں تصاویر اور انگریزی جملے ہوتے ہیں۔
17. خواتین کا لباس:
یہ ضروری ہے کہ لباس قابل احترام، غیر شفاف، کندھوں کے سامنے نہ ہو، چھوٹا، یا جسے شام کے لباس کے طور پر بیان کیا گیا ہو۔ بھی منع ہے.
کیمپ انتظامیہ کو یہ حق حاصل ہے کہ وہ کیمپ کے بیداری پیدا کرنے کی شکل کو برقرار رکھنے کے لیے لباس کی تبدیلی پر اعتراض اور درخواست کرے۔
 
  میں اعلان کرتا ہوں کہ میں نے اس پروگرام کے لیے شرائط اور اس سال کے پلان کا جائزہ لیا ہے جس کے لیے میں رجسٹرڈ ہوں، جس کا اعلان عبداللہ صالح الکاف کمپنی کی ویب سائٹ پر کیا گیا ہے، اور میں اس میں بیان کردہ ہر چیز سے اتفاق کرتا ہوں۔
                                </textarea>
                                <button @click="print" class="print-button absolute bottom-0 left-5">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.0004 10.7688V7.0188H10.0004V10.7688H8.75043V5.7688H21.2504V10.7688H20.0004ZM22.0192 15.1438C22.3733 15.1438 22.6704 15.0242 22.9104 14.785C23.1504 14.5459 23.27 14.2488 23.2692 13.8938C23.2692 13.5396 23.1496 13.243 22.9104 13.0038C22.6713 12.7646 22.3742 12.6446 22.0192 12.6438C21.665 12.6438 21.3683 12.7638 21.1292 13.0038C20.89 13.2438 20.77 13.5405 20.7692 13.8938C20.7692 14.248 20.8892 14.545 21.1292 14.785C21.3692 15.025 21.6658 15.1446 22.0192 15.1438ZM20.0004 23.75V18.0775H10.0004V23.75H20.0004ZM21.2504 25H8.75043V20H4.47168V13.2688C4.47168 12.5605 4.7121 11.9667 5.19293 11.4875C5.67376 11.0084 6.26668 10.7688 6.97168 10.7688H23.0292C23.7375 10.7688 24.3313 11.0084 24.8104 11.4875C25.2896 11.9667 25.5292 12.5605 25.5292 13.2688V20H21.2504V25ZM24.2792 18.75V13.2688C24.2792 12.9146 24.1596 12.618 23.9204 12.3788C23.6813 12.1396 23.3842 12.0196 23.0292 12.0188H6.97168C6.61751 12.0188 6.32043 12.1388 6.08043 12.3788C5.84043 12.6188 5.72085 12.9155 5.72168 13.2688V18.75H8.75043V16.8275H21.2504V18.75H24.2792Z" fill="#666666"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                            </div>
                            <div class="w-full flex justify-between p-5 text-xl">
                                <button class="p-2 px-8 bg-site-blue text-white rounded-md" @click="add(closeCallback)">اضافة</button>
                                <button class="p-2 text-site-text-grey" @click="closeCallback">الغاء</button>
                            </div>
                </template> 
                        </Dialog>
                        <button @click="visible = true" class="w-full h-44 bg-white border border-[#BDBDBD] p-2 rounded-xl">  
                        </button>
                        <img @click="visible = true" src="/img/uploadFile2.png" alt="uploadFile" class="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 cursor-pointer">
                    </div>
                    <button class="flex gap-3 m-5">
                        <h2 class="font-semibold text-site-blue">تنزيل ملف الشروط والاحكام</h2>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="#5FC1CF"/>
                        </svg>
                    </button>
                    <div class="w-full flex flex-wrap gap-2 gap-y-10">
                        <div class="w-[48%]">
                            <h1 class="text-lg font-semibold text-black mb-5">ملف الشروط والأحكام باللغة العربية</h1>
                            <div class=" w-full h-64 bg-white border border-[#DADADA] rounded-2xl relative p-1"> 
                                <textarea class="text-black w-full h-full p-5 rules-section">
سادساً: نظام الملابس داخل المخيم:
16.	لباس الرجال :
حفاظاً على حرمة المكان والزمان فإننا نهيب بالحجاج الإبتعاد عن لباس ما يسمى البرمودا وفانيلة الاكتاف والفلاين التي تحتوي على صور وعبارات إنجليزية.
17.	لباس النساء:
يشترط ان يكون اللباس كاسياً محترماً غير شفاف ولا مكشوف الاكتاف او قصير او ما يوصف بلباس السهرات ويمنع البنطلونات الضيقة او القصيرة والبلوزات مفتوحة الصدر أو قصيرة البطن، كما وتمنع ملابس النوم غير الساترة.
ويحق لإدارة المخيم الاعتراض وطلب تغيير الملابس حفاظاً على نسق المخيم التوعوي.

بهذا أقر أنني اطلعت على الشروط و خطة هذا العام الخاصة بالبرنامج المسجِّل به, والمعلنة في موقع شركة عبدالله صالح الكاف وأنني أوافق على كل ما جاء فيها.
                                </textarea>
                                <button @click="print" class="print-button absolute bottom-0 left-5">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.0004 10.7688V7.0188H10.0004V10.7688H8.75043V5.7688H21.2504V10.7688H20.0004ZM22.0192 15.1438C22.3733 15.1438 22.6704 15.0242 22.9104 14.785C23.1504 14.5459 23.27 14.2488 23.2692 13.8938C23.2692 13.5396 23.1496 13.243 22.9104 13.0038C22.6713 12.7646 22.3742 12.6446 22.0192 12.6438C21.665 12.6438 21.3683 12.7638 21.1292 13.0038C20.89 13.2438 20.77 13.5405 20.7692 13.8938C20.7692 14.248 20.8892 14.545 21.1292 14.785C21.3692 15.025 21.6658 15.1446 22.0192 15.1438ZM20.0004 23.75V18.0775H10.0004V23.75H20.0004ZM21.2504 25H8.75043V20H4.47168V13.2688C4.47168 12.5605 4.7121 11.9667 5.19293 11.4875C5.67376 11.0084 6.26668 10.7688 6.97168 10.7688H23.0292C23.7375 10.7688 24.3313 11.0084 24.8104 11.4875C25.2896 11.9667 25.5292 12.5605 25.5292 13.2688V20H21.2504V25ZM24.2792 18.75V13.2688C24.2792 12.9146 24.1596 12.618 23.9204 12.3788C23.6813 12.1396 23.3842 12.0196 23.0292 12.0188H6.97168C6.61751 12.0188 6.32043 12.1388 6.08043 12.3788C5.84043 12.6188 5.72085 12.9155 5.72168 13.2688V18.75H8.75043V16.8275H21.2504V18.75H24.2792Z" fill="#666666"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="w-[48%]">
                            <h1 class="text-lg font-semibold text-black mb-5">ملف الشروط والأحكام باللغة الاردية</h1>
                            <div class="w-full h-64 bg-white border border-[#DADADA] rounded-2xl relative p-1"> 
                                <textarea class="text-black w-full h-full p-5 rules-section">
                                    چھٹا: کیمپ کے اندر لباس کا نظام:
16. مردوں کا لباس:
جگہ اور وقت کے تقدس کو برقرار رکھنے کے لیے، ہم عازمین حج سے مطالبہ کرتے ہیں کہ وہ نام نہاد برمودا، کندھے کی ٹی شرٹس، اور کارک سکرو سے دور رہیں جن میں تصاویر اور انگریزی جملے ہوتے ہیں۔
17. خواتین کا لباس:
یہ ضروری ہے کہ لباس قابل احترام، غیر شفاف، کندھوں کے سامنے نہ ہو، چھوٹا، یا جسے شام کے لباس کے طور پر بیان کیا گیا ہو۔ بھی منع ہے.
کیمپ انتظامیہ کو یہ حق حاصل ہے کہ وہ کیمپ کے بیداری پیدا کرنے کی شکل کو برقرار رکھنے کے لیے لباس کی تبدیلی پر اعتراض اور درخواست کرے۔
 
  میں اعلان کرتا ہوں کہ میں نے اس پروگرام کے لیے شرائط اور اس سال کے پلان کا جائزہ لیا ہے جس کے لیے میں رجسٹرڈ ہوں، جس کا اعلان عبداللہ صالح الکاف کمپنی کی ویب سائٹ پر کیا گیا ہے، اور میں اس میں بیان کردہ ہر چیز سے اتفاق کرتا ہوں۔
                                
                                </textarea>
                                <button @click="print" class="print-button absolute bottom-0 left-5">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.0004 10.7688V7.0188H10.0004V10.7688H8.75043V5.7688H21.2504V10.7688H20.0004ZM22.0192 15.1438C22.3733 15.1438 22.6704 15.0242 22.9104 14.785C23.1504 14.5459 23.27 14.2488 23.2692 13.8938C23.2692 13.5396 23.1496 13.243 22.9104 13.0038C22.6713 12.7646 22.3742 12.6446 22.0192 12.6438C21.665 12.6438 21.3683 12.7638 21.1292 13.0038C20.89 13.2438 20.77 13.5405 20.7692 13.8938C20.7692 14.248 20.8892 14.545 21.1292 14.785C21.3692 15.025 21.6658 15.1446 22.0192 15.1438ZM20.0004 23.75V18.0775H10.0004V23.75H20.0004ZM21.2504 25H8.75043V20H4.47168V13.2688C4.47168 12.5605 4.7121 11.9667 5.19293 11.4875C5.67376 11.0084 6.26668 10.7688 6.97168 10.7688H23.0292C23.7375 10.7688 24.3313 11.0084 24.8104 11.4875C25.2896 11.9667 25.5292 12.5605 25.5292 13.2688V20H21.2504V25ZM24.2792 18.75V13.2688C24.2792 12.9146 24.1596 12.618 23.9204 12.3788C23.6813 12.1396 23.3842 12.0196 23.0292 12.0188H6.97168C6.61751 12.0188 6.32043 12.1388 6.08043 12.3788C5.84043 12.6188 5.72085 12.9155 5.72168 13.2688V18.75H8.75043V16.8275H21.2504V18.75H24.2792Z" fill="#666666"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div v-if="englishShow" class="w-[48%]">
                            <h1 class="text-lg font-semibold text-black mb-5">ملف الشروط والأحكام باللغة الانجليزية</h1>
                            <div class="w-full h-64 bg-white border border-[#DADADA] rounded-2xl relative p-1"> 
                                <textarea class="text-black w-full h-full p-5 rules-section">
                                    Terms and Conditions

Believers are compelled to their terms, and it is our duty to preserve rights of all with Allah's willing
 
All conditions have been carefully studied in order to reach the greatest degree of commitment to the honorable Sunnah and the comfort of the Hajjis, so we hope that everyone will abide by them and calculate the reward. We gladly accept every written proposal. And the God of the intent behind.

First: general conditions:
1. Not to smoking inside the bus or camp. 
2. Prices do not include Hadi. There is a special committee for Hadi assigned by the official authorities. It can be reached through kiosks scattered in Mina outside the camps, or through search engines on the Internet.
3. No Hajji has the right to enter the bus or the camp without hanging the card or present Smart Card on Phone Device, whether man or woman.
4. Abdullah Saleh Al-Kaf Company prohibits the entry of any child who was accompanied without issuing a Hajj permit for him through the Ministry of Hajj. Thus, Abdullah Saleh Al-Kaf Company will not accept the entry of any child to the bus at the time of conquest or to the camp.
5. You will be registered in the electronic system of Abdullah Saleh Al-Kaf Company, and you will receive a message on your mobile phone (with a link to enter your personal page and your access code), in order to add the second mobile number and upload all the necessary documents (a copy of the ID and a copy of the meningitis vaccination certificate as well as seasonal influenza).
6. It must be ensured that the mobile phone registered in the registration fo
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
            <SideBarComponent />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBarComponent from '../components/Company/NavBarComponent.vue';
import SideBarComponent from '../components/SideBarComponent.vue';
import Select from 'primevue/select';
import PlusIconBg from '../components/icon/PlusIconBg.vue';

const fromCountry = ref({ name: 'العربية', flag: '/img/arabicFlag.svg' });
const toCountry = ref({ name: 'الانجليزية', flag: '/img/englishFlag.png' });
const visible = ref(false);
const countries = ref([
    { name: 'العربية', flag: '/img/arabicFlag.svg' },
    { name: 'الانجليزية', flag: '/img/englishFlag.png' },
]);
const swapCountries = () => {
    let temp = fromCountry.value
    fromCountry.value = toCountry.value
    toCountry.value = temp
}
const add = (closeCallback) => {
    englishShow.value = true
    closeCallback()
}
const englishShow = ref(false)
const fileinput = ref(null)
const print = ()=>{
    window.print()
}
</script>

<style scoped>
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