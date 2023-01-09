<template>
  <app-header></app-header>
  <router-view></router-view>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AppHeader from "@/components/AppHeader.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Swiper,
    SwiperSlide,
    AppHeader,
  },
};
</script>

<style scoped></style>
