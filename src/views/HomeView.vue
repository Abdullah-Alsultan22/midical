<template>
  <div id="home" class="home" >
    <div class="min-title">
      <div class="form">
        <swiper 
          :modules="modules"
          :slides-per-view="1"
          :space-between="100"
          :pagination="{ clickable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange">
          <swiper-slide>
            <div class="slide">
              <h2>
                We at Jubran Pharma are committed to working with partners to
                lead the healthcare industry in Yemen with the highest
                standards.
              </h2>
              <p>
                We at Jubran Pharma are committed to working with partners to
                lead the healthcare industry in Yemen with the highest
                standards.
              </p>
              <button>Explore Now</button>
            </div></swiper-slide>

          <swiper-slide
            ><div>
              <h2>
                We at Jubran Pharma are committed to working with partners to
                lead the healthcare industry in Yemen with the highest
                standards.
              </h2>
              <p>
                We at Jubran Pharma are committed to working with partners to
                lead the healthcare industry in Yemen with the highest
                standards.
              </p>
              <button>Explore Now</button>
            </div></swiper-slide>

          <swiper-slide
            ><div>
              <h2>
                We at Jubran Pharma are committed to working with partners to
                lead the healthcare industry in Yemen with the highest
                standards.
              </h2>
              <p>
                We at Jubran Pharma are committed to working with partners to
                lead the healthcare industry in Yemen with the highest
                standards.
              </p>
              <button>Explore Now</button>
            </div></swiper-slide>
        </swiper>
     
          <img src="@/assets/global/dr1.png" alt="" />
        
      </div>
    </div>
    
<MediCal/>
  <about-view />
  <div class="line"></div>
  <OurTeam/>
  <div class="line"></div>
  <OurStrategy/>
  <div class="line"></div>
  <ourpartners/>
  <div class="line"></div>
  </div>
  <TimeLine/>
<AppFooter/>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import AboutView from "@/views/AboutView.vue";
import MediCal from "@/views/MediCal.vue";
import OurTeam from "@/views/OurTeam.vue"
import OurStrategy from "@/views/OurStrategy.vue";
import ourpartners from "@/views/ourpartners.vue";
import OurPartners from "@/views/OurPartners.vue";
import TimeLine from "@/views/TimeLine.vue";
import AppFooter from "@/components/AppFooter.vue";
import "swiper/css/pagination";
import "swiper/css";

// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Swiper,
    SwiperSlide,
    MediCal,
    AboutView,
    OurTeam,
    OurStrategy,
    ourpartners,
    OurPartners,
    TimeLine,
    AppFooter,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination],
    };
  },
};
</script>

<style scoped>
.home .min-title {
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  width: 100%;
  height: 400px;
  background-color: #cefbf9;
}

.home .form h2 {
  font-size: 25px;
  font-weight: bold;
  color: #2f6044;
}
@media (max-width: 768px) {
  .home .form h2 {
    font-size: 18px;
  }
}
.home .form p {
  font-size: 15px;
  color: #2f6044;
}
@media (max-width: 768px) {
  .home .form p {
  display: none;
  }
}
.home .min-title .title {
  width: 50%;
  color: #2f6044;
  margin: 20px 0;
  padding: 48px;
  text-align: start;
}

.home .form button {
  border-radius: 10px;
  border: 1px solid #2f6044;
  color: #2f6044;
  background-color: #cefbf9;
  height: 30px;
  padding: 5px;
  margin: 20px 0;
  font-weight: bolder;
}

.home .min-title .form {
  width: 50%;
  position: absolute;
}

.home .min-title .form img {
  width: 400px;
  margin: auto;
  margin-right: 0;
  position: relative;
  left: -560px;
    top: -335px;
}
@media (max-width: 768px) {
  .home .min-title .form img{
    width: 185px;
    left: -184px;
    top: -334px;
  }
}
.bullets span.active {
  background-color: #33f7ed;
  border-color: #2f6044;
}


.slide {
  width: 100%;
  height: 50vh;
  font: bold;
}
</style>
