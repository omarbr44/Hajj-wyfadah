<template>
    <div>
        <h1 class="text-xl font-bold text-site-blue mb-5">{{ type }}</h1>
        <div class=" w-full flex justify-center">
            <StepperComponent :edited="true" :step="4" :stepsLabels="[
                 'الموقع'
                , 'مكان الخيمة'
                ,'اختيار الخيمة'
                ,'التوزيع' 
                  ]" />
        </div>
        <hr>
        <template v-if="type == 'التوزيع اليدوي'">
                <div  class="w-full">
                    <Select v-model="departmentObj" :close-on-content-click="false" :options="['فاطمة محمد','سعيد خالد']" optionLabel="name_ar" 
                                                placeholder="اختر حاج من القائمة" overlayClass="!bg-white rtl-d p-2" class=" flex justify-between items-center px-4 py-2 border border-[#BDBDBD] rounded-xl"
                                                :pt="{overlay:' shadow-xl'}">
                                                <template #value="slotProps">
                                                    <span v-if="slotProps.value">{{ slotProps.value.name_ar }}</span>
                                                </template>
                                                <template #option="slotProps">
                                                    <div class="flex items-center gap-3 mb-3 cursor-pointer py-1 hover:bg-[#DCF1F4] hover:text-[#1495A7]">
                                                        <div>{{ slotProps.option }}</div>
                                                        <!-- <div>{{ slotProps.option.name_ar }}</div> -->
                                                    </div>
                                                </template>
                                                <template #dropdownicon>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.90778 9.53898e-05C8.59462 0.0121378 7.29669 0.282709 6.08809 0.796361C4.87949 1.31001 3.7839 2.05669 2.86387 2.99375C1.00578 4.88623 -0.0244161 7.43932 -9.53898e-05 10.0914C0.0242254 12.7434 1.10107 15.2772 2.99356 17.1353C3.93062 18.0553 5.03972 18.7818 6.25753 19.2732C7.47534 19.7646 8.77802 20.0113 10.0912 19.9993C12.7432 19.9749 15.277 18.8981 17.1351 17.0056C18.9932 15.1131 20.0234 12.56 19.9991 9.90797C19.987 8.59481 19.7165 7.29688 19.2028 6.08828C18.6891 4.87968 17.9425 3.78409 17.0054 2.86406C16.0684 1.94403 14.9593 1.21758 13.7414 0.726175C12.5236 0.234775 11.2209 -0.011947 9.90778 9.53898e-05ZM9.92612 2.00001C12.0478 1.98055 14.0902 2.80471 15.6042 4.29118C17.1182 5.77765 17.9797 7.80467 17.9991 9.92631C18.0186 12.048 17.1944 14.0904 15.708 15.6044C14.2215 17.1184 12.1945 17.9799 10.0728 17.9993C7.9512 18.0188 5.90873 17.1946 4.39474 15.7082C2.88076 14.2217 2.01928 12.1947 1.99982 10.073C1.98036 7.95139 2.80452 5.90892 4.29099 4.39493C5.77746 2.88095 7.80448 2.01947 9.92612 2.00001ZM4.98135 8.04561L10.027 12.9995L14.9809 7.95391L4.98135 8.04561Z" fill="#5FC1CF" fill-opacity="0.79"/>
                                                    </svg>
                                                </template>
                                                <template #header>
                                                    <div class="mx-1 my-5 flex items-center justify-between">
                                                        <div class=" w-[60%]">
                                                            <SearchComponent
                                                            api=""
                                                            @resultSearch="searchResult" />
                                                        </div> 
                                                        <div class="w-[30%]">
                                                            <button id="menu-activator" class="flex flex-col items-center gap-1">
                                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M18 0V2H17L11 11V18H7V11L1 2H0V0H18Z" fill="#5FC1CF"/>
                                                                </svg>
                                                                <p class="text-site-blue">صنف ب</p>
                                                            </button>
                                                            <v-menu activator="#menu-activator" :close-on-content-click="false">
                                                                <div class="bg-white shadow-md rounded-md">
                                                                    <p class="text-site-blue font-bold rtl-d p-3">العمر</p>
                                                                    <div class="flex gap-10 items-center px-10 pt-1 mb-1 justify-end flex-wrap gap-y-5 w-[23rem]">
                                                                        <div class="flex items-center gap-2">
                                                                            <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">الكل</label>
                                                                            <input id="default-radio-1" type="radio" value="" v-model="departmentFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                                        </div>
                                                                        <div class="flex items-center gap-2">
                                                                            <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">من الاكبر الى الاصغر</label>
                                                                            <input id="default-radio-1" type="radio" value="" v-model="departmentFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                                        </div>
                                                                        <div class="flex items-center gap-2">
                                                                            <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">من الاصغر الى الاكبر</label>
                                                                            <input id="default-radio-1" type="radio" value="" v-model="departmentFilter" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </v-menu> 
                                                        </div>
                                                    </div>
                                                    <hr>
                                                </template>
                                    </Select>
                </div>
                <div class="w-full mt-10">
                    <h1 class="text-xl font-bold text-site-blue mb-5">معلومات الحاج</h1>
                    <div class="w-full flex items-center gap-[1px] text-white h-12 font-bold">
                        <div class="w-1/2 h-full text-center bg-site-blue flex items-center justify-center rounded-ss-xl">
                            الاسم
                        </div>
                        <div class="w-1/2 h-full text-center bg-site-blue flex items-center justify-center">
                            العمر
                        </div>
                    </div>
                    <div data-name="فاطمة سعد" class="w-full flex items-center text-white h-12 font-bold" draggable="true" @dragstart="drag">
                        <div class="w-1/2 h-full text-center bg-site-dark-blue flex justify-center items-center rounded-es-xl">   
                            فاطمة سعد
                        </div>
                        <div class="w-1/2 h-full text-center bg-site-dark-blue flex justify-center items-center rounded-ee-xl">
                            75
                        </div>
                    </div>
                </div>
            </template>
        <template v-else>
            <div  class="w-full py-8">
                <h1 class="text-2xl font-bold text-site-blue text-center">سيتم توزيع حجاج باقة ( 4) العزيزية التباعين للخيمة 4</h1>
                <h1 class="text-2xl font-bold text-site-blue text-center my-2">في مزدلفة وفقا لترتيب اعمارهم من الاكبر للاصغر قرباً الى المدخل.</h1>
                <h1 class="text-2xl font-bold text-site-blue text-center">مع الحفاظ على الصف الاول من المدخل لصغار السن.</h1>
            </div>
        </template>
        <hr>
        <div class="rtl-d px-5 pt-10">
            <div class="flex items-center gap-2">
                <svg width="120" height="50" viewBox="0 0 194 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.8125 93.6562L14.5 99.125V107.328C14.5 108.053 14.8622 108.749 15.5068 109.262C16.1515 109.774 17.0258 110.062 17.9375 110.062H31.6875C32.5992 110.062 33.4735 109.774 34.1182 109.262C34.7628 108.749 35.125 108.053 35.125 107.328V99.125L24.8125 93.6562ZM169.188 93.6562L158.875 99.125V107.328C158.875 108.053 159.237 108.749 159.882 109.262C160.526 109.774 161.401 110.062 162.312 110.062H176.062C176.974 110.062 177.849 109.774 178.493 109.262C179.138 108.749 179.5 108.053 179.5 107.328V99.125L169.188 93.6562Z" fill="#8D65C5"/>
                    <path d="M21.375 44.4375C21.3745 43.7461 21.7033 43.0802 22.2951 42.5739C22.887 42.0675 23.6981 41.7584 24.565 41.7086C24.7282 41.7033 24.8911 41.6924 25.0531 41.6758L48.875 38.9688L72.9375 41.7031H97V60.8438L62.625 63.5781L24.8125 60.8438C23.9008 60.8438 23.0265 60.5557 22.3818 60.0429C21.7372 59.5301 21.375 58.8346 21.375 58.1094V44.4375Z" fill="#E1D8EC"/>
                    <path d="M21.375 8.89062C21.375 6.71502 20.2885 4.62852 18.3545 3.09014C16.4206 1.55175 13.7975 0.6875 11.0625 0.6875C8.32746 0.6875 5.70443 1.55175 3.77046 3.09014C1.83649 4.62852 0.75 6.71502 0.75 8.89062V93.6562C0.75 95.1067 1.47433 96.4977 2.76364 97.5232C4.05295 98.5488 5.80164 99.125 7.625 99.125H186.375C188.198 99.125 189.947 98.5488 191.236 97.5232C192.526 96.4977 193.25 95.1067 193.25 93.6562V60.8438H21.375V8.89062Z" fill="#533566"/>
                    <path d="M33.4062 22.5625C30.2154 22.5625 27.1552 23.5708 24.8989 25.3656C22.6426 27.1604 21.375 29.5947 21.375 32.1329V38.9688C21.375 39.694 21.7372 40.3895 22.3818 40.9023C23.0265 41.4151 23.9008 41.7032 24.8125 41.7032H72.9375C73.8492 41.7032 74.7235 41.4151 75.3682 40.9023C76.0128 40.3895 76.375 39.694 76.375 38.9688V37.6016C76.375 32.4282 71.3494 29.3985 64.7769 28.1133C64.493 28.0592 64.211 27.999 63.9312 27.9329C60.8512 27.1836 41.3331 22.5461 33.4062 22.5625ZM100.438 33.4782C97.7025 33.4782 95.0794 34.3424 93.1455 35.8808C91.2115 37.4192 90.125 39.5057 90.125 41.6813V63.5782C90.125 64.3034 90.4872 64.9989 91.1318 65.5117C91.7765 66.0245 92.6508 66.3125 93.5625 66.3125H189.812C190.724 66.3125 191.599 66.0245 192.243 65.5117C192.888 64.9989 193.25 64.3034 193.25 63.5782V52.6188C193.25 47.5424 190.715 42.6739 186.202 39.0843C181.69 35.4948 175.569 33.4782 169.188 33.4782H100.438Z" fill="#3F5FFF"/>
                </svg>
                <h1 class="text-site-blue text-xl font-semibold mb-5">*ملاحظة : يوصى توزيع هذه الأسرة لكبار السن</h1>
            </div>
                <hr>
                <div class="w-full flex justify-between items-center my-8">
                    <div class="flex items-center bg-site-blue text-white w-[40%] py-2 px-5 gap-24">
                        <DoorIcon />
                        <p class="text-3xl font-semibold ">المدخل</p>
                    </div>
                    <div class="flex items-center bg-site-blue text-white w-[40%] py-2 px-5 gap-24">
                        <DoorIcon />
                        <p class="text-3xl font-semibold ">المدخل</p>
                    </div>
                </div>
                <div class="w-full flex justify-evenly items-center flex-wrap gap-y-8 bg-gray-200">
                    <div :class="'name'+index" :id="'name'+index" v-for="(bed,index) in beds" :key="index" class="flex flex-col items-center w-[30%] gap-5"
                         @dragover="allowDrop" @dragleave.self="dargleave" @drop="drop">
                         <svg :id="'name'+index" class=" bg-site-text-grey p-2 bg-opacity-65" v-if=" index > 2 && index < 6 " width="194" height="111" viewBox="0 0 194 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path :id="'name'+index" d="M24.8125 93.6562L14.5 99.125V107.328C14.5 108.053 14.8622 108.749 15.5068 109.262C16.1515 109.774 17.0258 110.062 17.9375 110.062H31.6875C32.5992 110.062 33.4735 109.774 34.1182 109.262C34.7628 108.749 35.125 108.053 35.125 107.328V99.125L24.8125 93.6562ZM169.188 93.6562L158.875 99.125V107.328C158.875 108.053 159.237 108.749 159.882 109.262C160.526 109.774 161.401 110.062 162.312 110.062H176.062C176.974 110.062 177.849 109.774 178.493 109.262C179.138 108.749 179.5 108.053 179.5 107.328V99.125L169.188 93.6562Z" fill="#8D65C5"/>
                            <path :id="'name'+index" d="M21.375 44.4375C21.3745 43.7461 21.7033 43.0802 22.2951 42.5739C22.887 42.0675 23.6981 41.7584 24.565 41.7086C24.7282 41.7033 24.8911 41.6924 25.0531 41.6758L48.875 38.9688L72.9375 41.7031H97V60.8438L62.625 63.5781L24.8125 60.8438C23.9008 60.8438 23.0265 60.5557 22.3818 60.0429C21.7372 59.5301 21.375 58.8346 21.375 58.1094V44.4375Z" fill="#E1D8EC"/>
                            <path :id="'name'+index" d="M21.375 8.89062C21.375 6.71502 20.2885 4.62852 18.3545 3.09014C16.4206 1.55175 13.7975 0.6875 11.0625 0.6875C8.32746 0.6875 5.70443 1.55175 3.77046 3.09014C1.83649 4.62852 0.75 6.71502 0.75 8.89062V93.6562C0.75 95.1067 1.47433 96.4977 2.76364 97.5232C4.05295 98.5488 5.80164 99.125 7.625 99.125H186.375C188.198 99.125 189.947 98.5488 191.236 97.5232C192.526 96.4977 193.25 95.1067 193.25 93.6562V60.8438H21.375V8.89062Z" fill="#533566"/>
                            <path :id="'name'+index" d="M33.4062 22.5625C30.2154 22.5625 27.1552 23.5708 24.8989 25.3656C22.6426 27.1604 21.375 29.5947 21.375 32.1329V38.9688C21.375 39.694 21.7372 40.3895 22.3818 40.9023C23.0265 41.4151 23.9008 41.7032 24.8125 41.7032H72.9375C73.8492 41.7032 74.7235 41.4151 75.3682 40.9023C76.0128 40.3895 76.375 39.694 76.375 38.9688V37.6016C76.375 32.4282 71.3494 29.3985 64.7769 28.1133C64.493 28.0592 64.211 27.999 63.9312 27.9329C60.8512 27.1836 41.3331 22.5461 33.4062 22.5625ZM100.438 33.4782C97.7025 33.4782 95.0794 34.3424 93.1455 35.8808C91.2115 37.4192 90.125 39.5057 90.125 41.6813V63.5782C90.125 64.3034 90.4872 64.9989 91.1318 65.5117C91.7765 66.0245 92.6508 66.3125 93.5625 66.3125H189.812C190.724 66.3125 191.599 66.0245 192.243 65.5117C192.888 64.9989 193.25 64.3034 193.25 63.5782V52.6188C193.25 47.5424 190.715 42.6739 186.202 39.0843C181.69 35.4948 175.569 33.4782 169.188 33.4782H100.438Z" fill="#3F5FFF"/>
                        </svg>
                        <svg :id="'name'+index" v-else width="242" height="184" viewBox="0 0 242 184" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path :id="'name'+index" d="M52.6553 157.608H16.7335C16.7335 157.608 7.12908 78.9766 16.7335 78.9766C26.3378 78.9766 45.0739 84.8991 45.0739 84.8991C49.6303 86.1784 52.6553 89.4703 52.6553 93.1647V157.608Z" fill="#A65F3E"/>
                            <path :id="'name'+index" d="M230.485 151.555H24.5394V84.7972C24.5394 81.5772 21.0984 78.9609 16.8634 78.9609C12.6284 78.9609 9.1875 81.5772 9.1875 84.7972V178.091H20.5312L29.6062 164.32H212.43L221.505 178.091H232.848V153.337C232.83 152.36 231.79 151.555 230.485 151.555Z" fill="#C87D5E"/>
                            <path :id="'name'+index" d="M25.9948 137.986H43.5398V119.427C38.5107 119.183 33.3872 120.089 29.3034 122.302C22.8942 125.796 24.5957 132.049 24.539 137.339C24.539 137.339 25.1062 137.597 25.9948 137.986ZM227.743 155.782L30.797 155.926C27.98 155.926 25.2953 154.804 25.2953 152.591C25.2953 152.591 226.704 151.484 228.991 151.484C231.279 151.484 232.81 151.556 232.81 153.166C232.81 154.747 232.508 155.782 227.743 155.782Z" fill="#784D30"/>
                            <path :id="'name'+index" d="M208.856 153.725L28.0934 153.869C25.2764 153.869 24.5391 151.785 24.5391 149.398V138.028C24.5391 136.375 26.1272 135.023 28.0745 135.023H207.173C210.917 135.023 213.961 137.597 213.961 140.773V149.398C213.942 151.785 211.673 153.725 208.856 153.725Z" fill="#E0F7FA"/>
                            <path :id="'name'+index" d="M212.41 164.32H221.485V178.092L212.41 164.32ZM29.5867 164.32H20.5117V178.092L29.5867 164.32Z" fill="#784D30"/>
                            <path :id="'name'+index" d="M51.6716 135.053C30.1941 135.053 26.375 126.485 26.375 126.485C26.375 126.485 33.0867 117.041 51.1611 117.041C69.2355 117.041 78.613 125.494 79.1612 128.311C80.3334 134.377 73.1491 135.053 51.6716 135.053Z" fill="#E0F7FA"/>
                            <path :id="'name'+index" d="M26.375 126.486C27.8875 129.246 33.5783 135.054 51.6716 135.054H64.282L72.5062 127.104C72.5062 127.104 67.0045 129.218 51.18 129.563C40.4223 129.793 31.1205 128.47 26.375 126.486Z" fill="#94D1E0"/>
                            <path :id="'name'+index" d="M224.776 153.87C230.259 153.87 233.398 149.802 232.188 145.217C228.199 130.051 222.394 122.102 207.118 122.102H101.564C86.6096 122.102 73.5265 127.852 69.7831 139.352C67.9492 144.958 67.382 149.055 67.5521 153.87H224.776Z" fill="#3DAAE0"/>
                            <path :id="'name'+index" d="M227.67 154.66C232.681 154.66 232.813 151.397 232.302 147.976C230.582 136.476 217.839 134.449 211.052 134.449H84.7013C84.7013 134.449 81.8843 137.626 80.5798 144.555C79.2941 151.484 80.6554 154.66 80.6554 154.66H227.67Z" fill="#188AD6"/>
                            <path :id="'name'+index" d="M84.663 139.352C88.4442 127.852 101.679 122.102 116.804 122.102H94.1161C78.9911 122.102 65.7567 127.852 61.9755 139.352C59.2719 147.56 80.8817 150.852 84.663 139.352Z" fill="#B0E0FF"/>
                            <path :id="'name'+index" d="M82.7516 154.661C82.7138 149.242 83.4511 137.627 89.52 131.546C89.52 131.546 83.6969 130.698 77.0419 130.684C69.1769 130.684 66.8703 131.23 66.8703 131.23C64.2234 133.789 63.1647 135.758 61.9925 139.352C61.0661 142.14 60.4422 146.41 60.1208 151.556C60.0263 153.238 61.8035 154.647 64.0155 154.647H82.7516V154.661Z" fill="#7DBBE3"/>
                        </svg>
                        <p :id="'name'+index" class="text-2xl text-center font-semibold">رقم السرير : 3</p>
                        <p :id="'name'+index" class="text-2xl text-center font-semibold"
                            :class="index % 2 == 0 ? 'text-green-800' : 'text-red-800'">
                            <span :id="'name'+index" v-if="index % 2 == 0">متاح</span>
                            <span :id="'name'+index" v-if="index % 2 != 0">غير متاح</span>
                        </p>
                    </div>
                </div>
                <div class="w-full flex justify-between items-center my-8">
                    <div class="flex items-center bg-site-blue text-white w-[40%] py-2 px-5 gap-24">
                        <ACIcon />
                        <p class="text-3xl font-semibold ">التكييف</p>
                    </div>
                    <div class="flex items-center bg-site-blue text-white w-[40%] py-2 px-5 gap-24">
                        <ACIcon />
                        <p class="text-3xl font-semibold ">التكييف</p>
                    </div>
                </div>
                <hr>
                <div class="flex items-center justify-end">
                    <button  class="bg-site-blue w-fit text-white rounded-xl p-4 flex items-center my-8">
                        <span class="font-bold text-xl px-16 py-1">تأكيد</span>
                    </button>
                </div>
            </div>
        <hr>
        <div class="w-full flex justify-between text-2xl font-bold px-10 mt-20 mb-10">
            <button @click="$emit('preStep')" class=" text-[#CECFD9]">
                السابق
            </button>
            <button @click="$emit('nextStep')" class=" text-site-blue">
                تأكيد التوزيع
            </button>
        </div>
    </div>
</template>

<script setup>
import ACIcon from '../../icon/ACIcon.vue';
import DoorIcon from '../../icon/DoorIcon.vue';
import SmallBedIcon from '../../icon/SmallBedIcon.vue';
import BedIcon from '../../icon/BedIcon.vue';
import StepperComponent from '../../StepperComponent.vue';
import Select from 'primevue/select';
import { ref } from 'vue';
import SearchComponent from '../../Base/SearchComponent.vue';

const emit = defineEmits(['nextStep','preStep'])
defineProps({
    type: {default: 'التوزيع اليدوي'},
})

const beds = ref([{text: ''},{text: ''},{text: ''},{text: ''},{text: ''},{text: ''},{text: ''},{text: ''},{text: ''},])

function drag(ev) {
    ev.dataTransfer.setData('name',ev.target.dataset.name)
}
function drop(ev) {
    ev.preventDefault()
    let data = ev.dataTransfer.getData("name")
    document.querySelector('span#'+ev.target.id).textContent = data

    document.getElementsByClassName(ev.target.id)[0].classList.remove('bg-gray-300')
}
function allowDrop(ev) {
    ev.preventDefault()
    let el = document.getElementsByClassName(ev.target.id)
    el[0].classList.add('bg-gray-300')
}
function dargleave(ev) {
    ev.preventDefault()
    let el = document.getElementsByClassName(ev.target.id)
    el[0].classList.remove('bg-gray-300')
}

</script>

<style scoped>

</style>