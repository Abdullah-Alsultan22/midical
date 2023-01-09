<template>  <div class="line"></div>
     <div class="OurStrategy" id="Strategy">
   
   <div class="container">
       <h3>Our Strategy</h3>
       <p>Temmam Pharma represents and aims to be the agent of major and minor
multinational pharmaceutical industries worldwide and partner with
international NGOs in the country to pave the way for better access for.<br>
Temmam Pharma represents and aims to be the agent of major and minor
multinational pharmaceutical industries worldwide and partner with
international NGOs in the country to pave the way for better access for.<br>
Temmam Pharma represents and aims to be the agent of major and minor
multinational pharmaceutical industries worldwide and partner with
international NGOs in the country to pave the way for better access for.
       </p>
       <img src="../assets/global/dr2.png" alt="">
   </div>
</div>
</template>

<script>
export default {
name:"OurStrategy",
}
</script>

<style>

.OurStrategy {
    position: relative;
    padding: 0px 5%;
    margin-top: 100px;
}

.OurStrategy .container h3 {
    font-weight: bold;
    text-align: center;
    color: #2F6044;
    font-size: 30px;
}


.OurStrategy .container p {
    position: relative;
    height: 302px;
    text-align: start;
    color: #707070;
    font-size: 21px;
    width: 55%;
    font-weight: bold;
    right: -40%;
    margin-top: 10%;
    top: -75px;
}

@media (max-width: 768px) {
    .OurStrategy .container p  {
        position: relative;
    height: 300px;
    text-align: start;
    color: #707070;
    font-size: 15px;
    width: 100%;
    font-weight: bold;
    right: 0%;
    margin-top: 70%;
  }
}
  .OurStrategy .container img {
    position: absolute;
    bottom: 0px;
    width: 40%;
    height: 100%;
    left: -20px;
    object-fit: contain;
}
@media (max-width: 768px) {
    .OurStrategy .container img {
        position: absolute;
    bottom: 32%;
    width: 43%;
    left: 105px;
}
  }

.line {
    border-bottom: 1px solid #e2e2e2de;
    width: 100%;
}
</style>