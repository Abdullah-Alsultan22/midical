<template>
  <div id="TimeLine" class="timeline">
    <div class="container">
      <h2>TimeLine for Campany</h2>
      <p>
        Temmam Pharma represents and aims to be the agent of major and minor
        multinational pharmaceutical industries worldwide
      </p>
      <div class="lines">
        <div class="main-line"></div>
        <div class="details">
          <div class="data-bott">
            <div class="cercal-one "></div>
            <div class="bor">
              <div class="con-bott-one">
                <img class="one" src="../assets/global/timlin.svg" alt="">
                <div class="number">1999</div>
                <div class="name">expansion</div>
              </div>
            </div>
          </div>
          <div class="data-top">
            <div class="cercal-tow"></div>
            <div class="bor">
              <div class="con-top">
                <img class="tow" src="../assets/global/timlin.svg" alt="">
              <div class="number">2005</div>
              <div class="name">Trust and commitment</div>
            </div>
           </div>
          </div>
          <div class="data-bott">
            <div class="cercal-three"></div>
            <div class="bor">
              <div class="con-bott-three">
                <img class="three" src="../assets/global/timlin.svg" alt="">
              <div class="number">2010</div>
              <div class="name">Competitiveness</div></div>
            </div>
          </div>
          <div class="data-top">
            <div class="bor">
              <div class="con-top-four">
                <img class="four" src="../assets/global/timlin.svg" alt="">
              <div class="number">2015</div>
              <div class="name">continuity</div>
              </div>
            </div>
            <div class="cercal-four"></div>
          </div>
          <div class="data-bott-fiv">
            <div class="cercal-five"></div>
            <div class="bor">
              <div class="con-bott-five">
                <img class="five" src="../assets/global/timlin.svg" alt="">
              <div class="number-fiv">2022</div>
              <div class="name">Temmam Pharma Establishment</div>
            </div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeLine",
};
</script>

<style>
/* 
 .timeline {
  padding: 0 5%;
  margin-bottom: 100px;
}
.timeline h2 {
  color: #2f6044;
  font-weight: bold;
  text-align: center;
  font-size: 30px;
}
.timeline .container {
  font-weight: bold;
  text-align: center;
  margin-top: 5%;
  position: relative;
}
.timeline .container p {
  text-align: start;
  color: #707070;
  font-size: 18px;
  margin-bottom: 8%;
}
@media (max-width: 1099px) {
    .timeline .container p {
        text-align: center;
    }
}
.timeline .lines {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}

@media (max-width: 1099px) {
    .lines {
        height: auto;
    }
}

.timeline .main-line {
  width: 66%;
  height: 1px;
  background-color: #2cc2bd;
  position: relative;
  left: -60px;
}

@media (max-width: 1099px) {
    .main-line {
        width: 2.5px;
        height: 101%;
        background-color: black;
    }
  }

.timeline .details {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (max-width: 1099px) {
    .details {
        flex-direction: column;
        position: unset;
        transform: none;
    }
}

.timeline .cercal {
  width: 15px;
  height: 15px;
  background-color: #2cc2bd;
  border-radius: 50%;
  position: relative;
  right: -57px;
}
@media (max-width: 1099px) {
    .cercal {
        position: absolute;
        margin-right: -6px;
    }
}
.timeline .data-bott {
  height: 58.5%;
  margin-top: auto;
  position: relative;
}


@media (max-width: 1099px) {
    .data-bott .number {
        margin-right: 13px;
    }
}

@media (max-width: 1099px) {
    .data-bott .name {
        margin-right: 13px;
    }
}

@media (max-width: 1099px) {
    .data-bott {
        width: 2.5px;
        height: 101%;
        background-color:  black;
        direction: rtl;
        padding-bottom: 20px;
    }
}

.timeline .data-bott-fiv {
  position: relative;
    top: 37px;
}
.timeline .data-bott-fiv .number-fiv {
  position: relative;
  right: -57px;
  text-align: start;
  color: #2cc2bd;
}
.timeline .data-top {
  height: 95%;
  margin-top: auto;
  position: relative;
  top: -50px;
}

@media (max-width: 1099px) {
    .data-top {
        width: 2.5px;
        height: 101%;
        background-color: black;
        padding-bottom: 20px;
    }
}

@media (max-width: 1099px) {
    .data-top .number {
        margin-left: 13px;
    }
}

@media (max-width: 1099px) {
    .data-top .name {
        margin-left: 13px;
    }
}

@media (max-width: 1099px) {
    .data-top .cercal {
        position: absolute;
        margin-right: -6px;
        top: 0px;
        left: -7px;
    }
}

.timeline .lines .number {
  color: #2cc2bd;
  font-weight: bold;
  text-align: center;
}


.timeline .lines .name {
  font-weight: bold;
  color: #707070;
  text-align: start;
}

@media (max-width: 1099px) {
    .lines .number {
        margin-right: 20px;
    }
}
.con-bott {
  border: 1px solid #bbd7d675;
  border-radius: 10px;
  background-color: white;
position: relative;
bottom: -9px;
}
.con-bott  .one {
  position: relative;
    top: -15px;
    left: 23px;
    width: 20px;
}
.con-top  .tow{
  transform: rotate(180deg);
    position: relative;
    bottom: -78px;
    left: -22px;
    width: 30px;
}

.con-bott  .three {
  position: relative;
  width: 20px;
  top: -15px;
  
}
.con-top .four{
  transform: rotate(180deg);
    position: relative;
    bottom: -79px;
    width: 31px;
    left: 24px;
}

.con-bott  .five{
  position: relative;
  width: 20px;
  top: -15px;
}

.con-top{
  border: 1px solid #bbd7d675;
    border-radius: 10px;
    background-color: white;
    position: relative;
    top: -9px;
    height: 83px;
}  */
/* //////////////////////////////////////// */


    .timeline {
    padding: 0 5%;
    margin-bottom: 100px;
}

.timeline .container {
    color: #2CC2BD;
    font-weight: bold;
    text-align: center;
    margin-top: 5%;
    position: relative;
}


.timeline .container p {
    text-align: start;
    color: #707070;
    font-size: 20px;
    margin-top: 10%;
    margin-bottom: 10%;
    text-align: center;
}

@media (max-width: 1099px) {
    .timeline .container p {
        text-align: center;
    }
}

.lines {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
}

@media (max-width: 1099px) {
    .lines {
        height: auto;
    }
}

.main-line {
    width: 85%;
    height: 2.5px;
    background-color:  #2CC2BD;
}

@media (max-width: 1099px) {
    .main-line {
        width: 2.5px;
        height: 101%;
        background-color: #2CC2BD;
    }
}

.details {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
}

@media (max-width: 1099px) {
    .details {
        flex-direction: column;
        position: unset;
        transform: none;
    }
}

.cercal-one {
  width: 15px;
    height: 15px;
    background-color: #2CC2BD;
    border-radius: 50%;
    position: relative;
    left: 0px;
    top: 0px;
}
@media (max-width: 1099px) {
  .cercal-one {
    width: 15px;
    height: 15px;
    background-color: #2CC2BD;
    border-radius: 50%;
    position: relative;
    left: 5px;
    top: 0px;
    }
}


.cercal-tow{
  width: 15px;
    height: 15px;
    background-color: #2CC2BD;
    border-radius: 50%;
    position: relative;
    left: 70px;
    top: 37px;
}

@media (max-width: 1099px) {
  .cercal-tow{
    width: 15px;
    height: 15px;
    background-color: #2CC2BD;
    border-radius: 50%;
    position: relative;
    left: -6px;
    top: -12px;
    }
}


.cercal-three{
  width: 15px;
    height: 15px;
    background-color:#2CC2BD;
    border-radius: 50%;
    position: relative;
    left: 58px;
    top: 0px;
}
@media (max-width: 1099px) {
  .cercal-three{
    width: 15px;
    height: 15px;
    background-color: #2CC2BD;
    border-radius: 50%;
    position: relative;
    left: 7px;
    top: 0px;
    }
}


.cercal-four{
  width: 15px;
    height: 15px;
    background-color: #2CC2BD;
    border-radius: 50%;
    position: relative;
    left: 80px;
    top: -48px;
}
@media (max-width: 1099px) {
  .cercal-four{
    width: 15px;
    height: 15px;
    background-color: #2CC2BD;
    border-radius: 50%;
    position: relative;
    left: -5px;
    top: -67px;
    }
}

.cercal-five{
  width: 15px;
    height: 15px;
    background-color: #2CC2BD;
    border-radius: 50%;
    position: relative;
    left: 226px;
    top: 41px;
}
@media (max-width: 1099px) {
  .cercal-five {
    width: 15px;
    height: 15px;
    background-color: #2CC2BD;
    border-radius: 50%;
    position: relative;
    left: 70px;
    top: -1px;
    }
}


@media (max-width: 1099px) {
    .cercal {
        position: absolute;
        margin-right: -6px;
    }
}

.data-bott {
    height: 58.5%;
    margin-top: auto;
    position: relative;
}



@media (max-width: 1099px) {
    .data-bott .number {
        margin-right: 13px;
    }
}

@media (max-width: 1099px) {
    .data-bott .name {
        margin-right: 13px;
    }
}

@media (max-width: 1099px) {
    .data-bott {
        width: 2.5px;
        height: 101%;
        background-color: #2CC2BD;
        direction: rtl;
        padding-bottom: 20px;
    }
}

.data-top {
    height: 95%;
    margin-top: auto;
    position: relative;
}

@media (max-width: 1099px) {
    .data-top {
        width: 2.5px;
        height: 101%;
        background-color: #2CC2BD;
        padding-bottom: 20px;
    }
}

@media (max-width: 1099px) {
    .data-top .number {
        margin-left: 13px;
    }
}

@media (max-width: 1099px) {
    .data-top .name {
        margin-left: 13px;
    }
}

@media (max-width: 1099px) {
    .data-top .cercal {
        position: absolute;
        margin-right: -6px;
        top: 0px;
        left: -7px;
    }
}

.lines .number {
    color: #2CC2BD;
    font-weight: bold;
    text-align: start;
    text-align: center;
}

@media (max-width: 1099px) {
    .lines .number {
        margin-right: 20px;
    }
}

.lines .name {
    font-weight: bold;
    color: #707070;
    text-align: start;
}
.con-top{
  border: 1px solid #bbd7d675;
    border-radius: 10px;
    background-color: white;
    position: relative;
    top: -71px;
    height: 83px;
    left: -7px;
    
}
@media (max-width: 1099px) {
  .con-top  {
    border: 1px solid #bbd7d675;
    border-radius: 15px;
    background-color: white;
    position: relative;
    top: -71px;
    height: 115px;
    left: 19px;
    width: 165px;
    }
}

.con-bott-one {
  position: relative;
    left: -32px;
    border: 1px solid #bbd7d675;
    border-radius: 10px;
    background-color: white;
    top: 10px;
} 
@media (max-width: 1099px) {
  .con-bott-one  {
    position: relative;
    left: -32px;
    border: 1px solid #bbd7d675;
    border-radius: 10px;
    background-color: white;
    top: -19px;
    width: 100px;
    }
}
.one{
  width: 25px;
    position: relative;
    top: -17px;
}

  @media (max-width: 1099px) {
  .one  {
    width: 29px;
    position: relative;
    top: 0px;
    rotate: 90deg;
    left: 60px;
    z-index: -1;
    }
}
.tow{
  rotate: 180deg;
    position: relative;
    top: 79px;
    width: 20px;
    left: -2px;
}
@media (max-width: 1099px) {
  .tow  {
    rotate: 270deg;
    position: relative;
    top: 35px;
    width: 34px;
    left: -81px;
    z-index: -1;
}
    }


.con-bott-three{
  position: relative;
    left: -1px;
    border: 1px solid #bbd7d675;
    border-radius: 10px;
    background-color: white;
    top: 10px;
}

@media (max-width: 1099px) {
  .con-bott-three  {
    position: relative;
    left: -16px;
    border: 1px solid #bbd7d675;
    border-radius: 10px;
    background-color: white;
    top: -19px;
    width: 161px;
}
    }

.three{
  width: 25px;
    position: relative;
    top: -17px;
}
@media (max-width: 1099px) {
  .three  {
    width: 31px;
    position: relative;
    top: -3px;
    rotate: 90deg;
    left: 85px;
    z-index: -1;
    }
}

.con-top-four{
  position: relative;
    top: -60px;
    left: 49px;
    border: 1px solid #bbd7d675;
    border-radius: 10px;
    background-color: white;
}
@media (max-width: 1099px) {
  .con-top-four  {
    position: relative;
    left: 25px;
    border: 1px solid #bbd7d675;
    border-radius: 10px;
    background-color: white;
    top: -18px;
    width: 161px;
    
    }
}

.four{
  rotate: 180deg;
    position: relative;
    top: 72px;
    width: 31px;
}
@media (max-width: 1099px) {
  .four  {
    rotate: 268deg;
    position: relative;
    top: 30px;
    width: 38px;
    left: -85px;
    z-index: -1;
    }
}


.con-bott-five{
  position: relative;
    left: 112px;
    top: 44px;
    border: 1px solid #bbd7d675;
    border-radius: 10px;
    background-color: white;
    top: 50px;
}
@media (max-width: 1099px) {
  .con-bott-five {
    position: relative;
    left: -97px;
    top: 44px;
    border: 1px solid #bbd7d675;
    border-radius: 10px;
    background-color: white;
    top: -48px;
    width: 152px;
    }
}

.five{    width: 25px;
    position: relative;
    top: -17px;
    }
    @media (max-width: 1099px) {
      .five {
        position: relative;
    top: 25px;
    rotate: 90deg;
    left: 82px;
    width: 33px;
    z-index: -1;
}
    }

   
</style>
