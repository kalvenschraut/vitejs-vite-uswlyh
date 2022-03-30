import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Quasar, Loading } from 'quasar';
import 'quasar/dist/quasar.css';

const app = createApp(App);

app.use(router);
app.use(Quasar, { plugins: { Loading } });
app.mount('#app');