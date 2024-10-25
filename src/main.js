import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import PrimeVue from "primevue/config";
import Select from 'primevue/select';
import Dialog from 'primevue/dialog';

import { register } from 'swiper/element/bundle';
register();
const app = createApp(App);
app.component("select", Select);
app.component("Dialog", Dialog);
app.use(PrimeVue, {
  unstyled: true
});


/* import 'vuetify/styles' */
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })
app.use(router)
app.use(vuetify)
app.mount('#app')
