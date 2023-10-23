import { createApp } from "vue";
import "./assets/App.scss";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.mount("#app");
