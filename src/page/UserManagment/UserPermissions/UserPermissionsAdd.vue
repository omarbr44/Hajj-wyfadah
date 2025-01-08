<template>
    <div class="w-[80%] bg-[#f9f9f9]">
        <div>
            <div class="rtl-d px-10 pt-28">
                <h1 class="text-xl font-bold text-site-blue mb-5">إضافة نوع مستخدم جديد</h1>
                <div class="w-full p-4 border border-[#DADADA] rounded-2xl flex flex-wrap gap-4 gap-y-10">
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">اسم نوع المستخدم <span class="text-red-500">*</span></p>
                        <input 
                        type="text" 
                        class="w-full relative bg-[#f9f9f9] border border-[#BDBDBD] p-2 rounded-xl"
                        placeholder="ادخل اسم لمستخدم هذه الصلاحيات">
                        <p v-if="requestConditions?.error?.name_ar" class="text-red-500 mt-1">{{ requestConditions.error.name_ar }}</p>
                    </div>
                    <div class="w-[48%]">
                        <p class="text-black font-semibold w-[50%] mb-3">الوصف<span class="text-red-500">*</span></p>
                        <textarea
                        class="rules-section w-full bg-white border border-[#BDBDBD] py-2 px-5 rounded-3xl h-32"
                        placeholder="ادخل وصف لنوع المستخدم"
                        v-model="searchFilter"
                        >
                        </textarea>
                        <p v-if="requestConditions?.error?.info_branch" class="text-red-500 mt-1">{{ requestConditions.error.info_branch }}</p>
                    </div>
                </div>
                <hr>
                <h1 class="text-xl font-bold text-site-blue mb-5">الاذونات</h1>
                <hr>
                <h1 class="text-xl font-bold text-site-blue mb-5">الأوذنات المرتبطة بالمواقع</h1>
                <hr>
                <div class="flex">
                    <div class="flex gap-2 items-center justify-center w-[30%]">
                        <div class="checkbox-wrapper-6">
                            <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                            <label class="tgl-btn" for="cb1-6" />
                        </div>
                        <p class="font-semibold text-[#008093]">countries</p>
                    </div>
                    <div class="flex gap-2 items-center justify-center w-[30%]">
                        <div class="checkbox-wrapper-6">
                            <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                            <label class="tgl-btn" for="cb1-6" />
                        </div>
                        <p class="font-semibold text-[#008093]">cities</p>
                    </div>
                    <div class="flex gap-2 items-center justify-center w-[30%]">
                        <div class="checkbox-wrapper-6">
                            <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                            <label class="tgl-btn" for="cb1-6" />
                        </div>
                        <p class="font-semibold text-[#008093]">sites</p>
                    </div>
                </div>
                <hr>
                <h1 class="text-xl font-bold text-site-blue mb-5">الأوذنات المرتبطة بمصادقة المستخدمين</h1>
                <hr>
                <div class="flex justify-center">
                    <div class="flex gap-2 items-center justify-center w-[30%]">
                        <div class="checkbox-wrapper-6">
                            <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                            <label class="tgl-btn" for="cb1-6" />
                        </div>
                        <p class="font-semibold text-[#008093]">roles</p>
                    </div>
                    <div class="flex gap-2 items-center justify-center w-[30%]">
                        <div class="checkbox-wrapper-6">
                            <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                            <label class="tgl-btn" for="cb1-6" />
                        </div>
                        <p class="font-semibold text-[#008093]">users</p>
                    </div>
                </div>
                <hr>
                <h1 class="text-xl font-bold text-site-blue mb-5">الأوذنات المرتبطة بالباصات</h1>
                <hr>
                <div class="">
                    <div class="flex">
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">cancelAuto
                                DistributionBuses</p>
                        </div>
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">auto
                                DistributionBuses</p>
                        </div>
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">
                                distributionBuses</p>
                        </div>
                    </div>
                    <div class="flex mt-16">
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">busModels
                                </p>
                        </div>
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">busModels
                                </p>
                        </div>
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">
                                busMarks</p>
                        </div>
                    </div>
                </div>
                <hr>
                <h1 class="text-xl font-bold text-site-blue mb-5">الأوذنات المرتبطة بالخيام</h1>
                <hr>
                <div class="">
                    <div class="flex">
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">distributionTents
                                </p>
                        </div>
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">tents
                                </p>
                        </div>
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">
                                tenttypes</p>
                        </div>
                    </div>
                    <div class="flex justify-center mt-16">
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">cancelAutoDistributionTents
                                </p>
                        </div>
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">autoDistributionTents
                                </p>
                        </div>
                    </div>
                </div>
                <hr>
                <h1 class="text-xl font-bold text-site-blue mb-5">الأوذنات المرتبطة بالتقارير و الوثائق</h1>
                <hr>
                <div class="">
                    <div class="flex">
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">Report Tents

                                </p>
                        </div>
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">Report buses

                                </p>
                        </div>
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">
                                cards</p>
                        </div>
                    </div>
                    <div class="flex justify-center mt-16">
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">Report direct to site
                                </p>
                        </div>
                    </div>
                </div>
                <hr>
                <h1 class="text-xl font-bold text-site-blue mb-5">الأوذنات المرتبطة بالتواصل</h1>
                <hr>
                <div class="">
                    <div class="flex">
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">privateSMS
                                </p>
                        </div>
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">notification

                                </p>
                        </div>
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">
                                liveBroadcasts</p>
                        </div>
                    </div>
                    <div class="flex justify-center mt-16">
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">sms Programs
                                </p>
                        </div>
                        <div class="flex gap-2 items-center justify-center w-[30%]">
                            <div class="checkbox-wrapper-6">
                                <input v-model="aa" class="tgl tgl-light" id="cb1-6" type="checkbox"/>
                                <label class="tgl-btn" for="cb1-6" />
                            </div>
                            <p class="font-semibold text-[#008093]">public cards
                                </p>
                        </div>
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

const togglePasswordButton = ref(null)
const toggleRePasswordButton = ref(null)
const passwordVisible = ref(false)
const rePasswordVisible = ref(false)
const togglePassword = () => {  

    if (togglePasswordButton.value.type === "password") {
        togglePasswordButton.value.type = "text";
        passwordVisible.value = true
    } else {
        togglePasswordButton.value.type = "password";
        passwordVisible.value = false
    }
}
const toggleRePassword = () => {  

    if (toggleRePasswordButton.value.type === "password") {
        toggleRePasswordButton.value.type = "text";
        rePasswordVisible.value = true
    } else {
        toggleRePasswordButton.value.type = "password";
        rePasswordVisible.value = false
    }
}
</script>

<style>

</style>