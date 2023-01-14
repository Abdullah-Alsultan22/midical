import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../aos-master/demo/css/styles.css";
import "../src/assets/styles.css";
import aos from "aos";
import "aos/dist/aos.css";

createApp({
  render: () => h(App),
  mounted() {
    aos.init();
  },
})
  .use(router)
  .use(store)
  .mount("#app");
