import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate'

import PrimeVue from "primevue/config";
import Select from 'primevue/select';
import Dialog from 'primevue/dialog';
import InputOtp from 'primevue/inputotp';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import { register } from 'swiper/element/bundle';
register();

const pinia = createPinia()
pinia.use(createPersistedState())

const app = createApp(App);
app.use(pinia);

app.component("select", Select);
app.component("Dialog", Dialog);
app.component("InputOtp", InputOtp);
app.use(PrimeVue, {
  unstyled: true
});


/* import 'vuetify/styles' */
import { createVuetify } from 'vuetify'
import { VOtpInput } from 'vuetify/components/VOtpInput'

const vuetify = createVuetify({
  components: {
    VOtpInput,
  },
  })
app.use(router)
app.use(vuetify)
app.component('VueDatePicker', VueDatePicker);
app.mount('#app')
