<template>

  <div  id="medical" class="mediCal" >
    <div class="line"></div>
    <div  class="container">
      <h2>Welcome to Medical Pharma</h2>
      <p>
     

        Medical Pharma represents and aims to be the agent of major and minor
        multinational pharmaceutical industries worldwide and partner with
        international NGOs in the country to pave the way for better access for
        Yemeni patients.
      </p>
    </div>
    <div class="min-count">
      <div class="count">
        <div class="box">
          <img data-aos="zoom-in-right" src="../assets/global/100.svg" />
          <div class="number">100</div>
          <p>Agent</p>
        </div>

        <div class="box">
          <img data-aos="zoom-in-right" src="../assets/global/700.svg" />
          <div class="number">700</div>
          <p>Branch</p>
        </div>
        <div class="box">
          <img data-aos="zoom-in-left" src="../assets/global/20.svg" />
          <div class="number">20</div>
          <p>Client</p>
        </div>
        <div class="box">
          <img data-aos="zoom-in-left" src="../assets/global/9000.svg" />
          <div class="number">9000</div>
          <p>Employee</p>
        </div>
      </div>
    </div>
  </div>
  <about-view />
  <div class="line"></div>
  <OurTeam/>
  <div class="line"></div>
  <OurStrategy/>
  <div class="line"></div>
  <ourpartners/>
  <div class="line"></div>

  <TimeLine/>
<AppFooter/>
</template>

<script>

export default {
  name: "MediCal",
  
};
</script>

<style>
.mediCal {
  padding: 0 5%;
  margin: 30px 20px;
}

.mediCal .container h2 {
    color: #2f6044;
    font-weight: bold;
    text-align: center;
    font-size: 30px;
    margin-top: 45px;
}
@media (max-width: 768px) {
  .mediCal .container h2 {
    font-size: 15px;
  }
}

.mediCal .container p {
  text-align: center;
  color: #5b5858;
  margin: 0px;
  font-size: 15px;
  font-weight: bold;
}
@media (max-width: 768px) {
  .mediCal .container p {
    font-size: 10px;
  }
}

.mediCal .count {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.mediCal .count .box {
  padding: 50px;
  text-align: center;
  font-weight: bold;
}

@media (max-width: 768px) {
  .mediCal .count .box  {
    padding: 0px;
    text-align: center;
  font-weight: bold;
  }
}

.mediCal .count .box .number {
    font-size: 25px;
    font-weight: bold;
    margin: 0 0 20px;
    color: #2cc2bd;
}

.mediCal .count .box p {
  font-size: 13px;
    /* font-weight: bold; */
    color: #5b5858
}

.mediCal .count .box img {
  width: 100px;
  height: 100px;
  margin: 0px auto 20px;
  border: 1px solid #2f6044;
  border-radius: 50%;
}

.line {
  border-bottom: 0.5px solid rgb(204, 204, 204);
  width: 100%;
}
</style>
