import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import DefaultHeader from "../components/layouts/DefaultHeader.vue";
import DefaultFooter from "../components/layouts/DefaultFooter.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "hello",
      components: {
        header: DefaultHeader,
        body: HelloWorld,
        footer: DefaultFooter,
      },
    },
  ],
});

export default router;
