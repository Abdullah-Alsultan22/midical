<template>
      
    <div class="ourpartners"  id="ourpartners">
     
         <h2>OurPartners </h2>
         
        <div class="box-imgs">
            <div class="img">
                <img src="../assets/global/1.png" alt="">
            </div>
            <div class="img">
                <img src="../assets/global/1 (1).png" alt="">
            </div>
            <div class="img">
                <img src="../assets/global/1 (2).png" alt="">
            </div>
            <div class="img">
                <img src="../assets/global/1 (3).png" alt="">
            </div>
            <div class="img">
             <img src="../assets/global/1 (4).png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
name:"ourpartners",
}
</script>

<style>

.ourpartners{

    margin-bottom: 10%;
    margin-top: 80px;

}

.ourpartners h2{
    color: #2f6044;
  font-weight: bold;
  text-align: center;
  font-size: 30px;
}
.box-imgs{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap
}
.ourpartners img{
    width: 150px;
    height: 150px;
    border:1px solid #2f6044;
    border-radius: 50%;
}

</style>