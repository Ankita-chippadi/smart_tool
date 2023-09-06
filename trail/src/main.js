
import { createApp } from 'vue'; // Import createApp from Vue 3

import App from './App.vue';
import CanvasJSChart from '@canvasjs/vue-charts'



const app = createApp(App); // Create a new Vue app instance
app.use(CanvasJSChart)
app.mount('#app');  