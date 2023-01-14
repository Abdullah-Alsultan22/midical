<template>

  <div id="team" class="min-container">
    <div class="hed"><h2>About Our Team</h2></div>
    <swiper
      :modules="modules"
      :slides-per-view="2"
      :space-between="10"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange">
      <swiper-slide>
        <div data-aos="zoom-in-right" class="card">
          <img class="img-meet" src="../assets/global/teem.png" alt="" />
          <div>
            <div class="comm">,,</div>
            <h3>Tota</h3>
            <p>
              Temmam Pharma represents and aims to be the agent of major and
              minor multinational pharma ceutical industries worldwide and
              partner .<br />
              <a href="https://www.facebook.com/"> View his page </a>
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div data-aos="zoom-in-left" class="card">
          <img class="img-meet" src="../assets/global/teem.png" alt="" />
          <div>
            <div class="comm">,,</div>
            <h3>Tota</h3>
            <p>
              Temmam Pharma represents and aims to be the agent of major and
              minor multinational pharma ceutical industries worldwide and
              partner .<br />
              <a href="https://www.facebook.com/"> View his page </a>
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img class="img-meet" src="../assets/global/teem.png" alt="" />
          <div>
            <div class="comm">,,</div>
            <h3>Tota</h3>
            <p>
              Temmam Pharma represents and aims to be the agent of major and
              minor multinational pharma ceutical industries worldwide and
              partner .<br />
              <a href="https://www.facebook.com/"> View his page </a>
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img class="img-meet" src="../assets/global/teem.png" alt="" />
          <div>
            <div class="comm">,,</div>
            <h3>Tota</h3>
            <p>
              Temmam Pharma represents and aims to be the agent of major and
              minor multinational pharma ceutical industries worldwide and
              partner .<br/>
              <a href="https://www.facebook.com/"> View his page </a>
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

export default {
  name: "OurTeam",
  components: {
    Swiper,
    SwiperSlide,
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

<style>
.min-container{
  margin-top: 100px;
}
.hed h2 {
  color: #2f6044;
  font-weight: bold;
  text-align: center;
  font-size: 30px;
  margin-top: 45px;
}
@media (max-width: 768px) {
  .hed h2  {
    margin-top: 90%;
font-size: 28px;
  }
}
.card {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 62px;

 
}
@media (max-width: 768px) {
  .card  {
    display: flex;
    margin-left: -4px;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 19px;
  }
}

.card p {
  color: #5b5858;
  font-weight: bold;
  text-align: start;
  width: 73%;
}
@media (max-width: 768px) {
  .card p   {
    width: 100%;
    margin-right: 11px;
  }
}
.card .img-meet {
  width: 30%;
  height: 20%;
  margin-right: 20px;
}

@media (max-width: 768px) {
  .card .img-meet  {
    width: 65%;
   margin-right: 14px;
   position: relative;
   top: 90px
  }
}
.card h3 {
  color: #2f6044;
  text-align: start;
  font-weight: bold;
  margin-top: 0px;
  margin-right: -26px;
}

.card .comm {
  font-family: Hanimation Arabic;
  font-size: 122px;
  letter-spacing: -23px;
  color: #2f6044;
  padding-bottom: 35px;
  margin-left: -12px;
}
.min-container{
    margin-bottom: 80px;

  }
.min-container .card .slide {
  width: 100%;
  height: 100vh;
}

.min-container> div > .swiper-pagination {
    text-align: center;
    margin-bottom: -12px !important;
 
}
.line {
    border-bottom: 1px solid #e2e2e2de;
    width: 100%;
}
</style>
