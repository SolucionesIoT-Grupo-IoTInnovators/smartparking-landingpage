import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import preset from "@/shared/styles/preset.js";
import loadAppStyles from "@/shared/styles/load.app.styles.js";


import PrimeVue from 'primevue/config';
import Vue3Marquee from 'vue3-marquee'

import Button from "primevue/button";
import Card from "primevue/card";
import Divider from "primevue/divider";

import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import InputMask from 'primevue/inputmask';
import Password from "primevue/password";
import Textarea from "primevue/textarea";
import Checkbox from "primevue/checkbox";

import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Dialog from "primevue/dialog";
import ProgressSpinner from "primevue/progressspinner";
import Galleria from 'primevue/galleria';
import FloatLabel from "primevue/floatlabel";
import SpeedDial from 'primevue/speeddial';

import {MotionPlugin} from "@vueuse/motion";
import ToggleButton from "primevue/togglebutton";
import Rating from "primevue/rating";
import {ConfirmationService, ConfirmDialog} from "primevue";
import {ColorPicker, DatePicker, Drawer, Select} from "primevue";

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
    theme: {preset, options: {darkModeSelector: 'uwu'}}
});
app.use(router)
app.use(ToastService)
app.use(ConfirmationService)
app.use(MotionPlugin);
app.use(Vue3Marquee);
app.component('Dropdown', Select)
app.component('Select', Select)
app.component('Button', Button)
app.component('Card', Card)
app.component('Divider', Divider)
app.component('InputText', InputText)
app.component('InputNumber', InputNumber)
app.component('InputMask', InputMask)
app.component('Calendar', DatePicker)
app.component('DatePicker', DatePicker)
app.component('Password', Password)
app.component('Textarea', Textarea)
app.component('Checkbox', Checkbox)
app.component('Toast', Toast)
app.component('Dialog', Dialog)
app.component('ProgressSpinner',ProgressSpinner)
app.component('Galleria', Galleria)
app.component('FloatLabel', FloatLabel)
app.component('SpeedDial', SpeedDial)
app.component('Sidebar',Drawer)
app.component('Drawer', Drawer)
app.component('ToggleButton', ToggleButton)
app.component('Rating', Rating)
app.component('ColorPicker', ColorPicker)
app.component('ConfirmDialog', ConfirmDialog)
app.mount('#app')