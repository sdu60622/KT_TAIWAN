<template>
  <div id="about">
    <div>
      <Nav></Nav>
    </div>

    <div class="banner">
      <div class="top">
        <img src="../../public/img/banner.jpg">
      </div>
      <div class="text">
        <h1>關於KT</h1>
        <h2>About</h2>
      </div>
    </div>

    <div class="container">
      <div class="row">
      <div class="col-12 mt-4">
        <h2 class="mb-4" style="color:white">關於我們 | <span style="color:#E7C46E">About</span></h2>
          <div style="width:100%;height:1px;background:white" ></div>
      </div>
      <div class="col-xl-7 col-lg-7 col-md-7 col-12 col-sm-12">
        <div class=""> 
          <div class="mt-4">
            <p style="color:white;font-size:1.5rem">品質堅持 ‧ 道道驚喜</p>
          </div>
          <!-- <div >
            <p style="color:white;font-size:1.2rem">嚴謹把關高品質食材、安心油品</p>
          </div> -->
          <div class=" mt-5" style>
            <p style="color:white;font-size:1rem">
              嚴謹把關高品質食材、安心油品<br>
              從選料、設備到製程標準與台灣同步一致，<br>
              要讓每位顧客在泰國就能感受到一吃就懷念的美味，<br>
              享受到原汁原味的的正宗台灣鹽酥雞！
            </p>
          </div>

          <div class="row p-0 mt-5">
          <div class="col-xl-3 col-lg-3 col-md-3 col-12 col-sm-12 text-center" >
            <u-animate-container>
              <u-animate
              name="fadeInUp"
              delay="0s"
              duration="1s"
              :iteration="1"
              :offset="0"
              animateClass="animated"
              :begin="false"
              >
                <img src="../../public/img/sp1.svg" class="pb-2" >
                <h6>INGREDIENTS</h6>
                <h6>嚴選食材</h6>
              </u-animate>
            </u-animate-container>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-3 col-12 col-sm-12 text-center" >
            <u-animate-container>
              <u-animate
              name="fadeInUp"
              delay="0s"
              duration="1s"
              :iteration="1"
              :offset="0"
              animateClass="animated"
              :begin="false"
              >
                <img src="../../public/img/sp2.svg" class="pb-2 "  >
                <h6>Fragrance</h6>
                <h6>茶香四溢</h6>
              </u-animate>
            </u-animate-container>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-3 col-12 col-sm-12 text-center" >
            <u-animate-container>
              <u-animate
              name="fadeInUp"
              delay="0s"
              duration="1s"
              :iteration="1"
              :offset="0"
              animateClass="animated"
              :begin="false"
              >
                <img src="../../public/img/sp3.svg" class="pb-2 text-center" >
                <h6>UNIQUE SAUCE</h6>
                <h6>100%台灣口味</h6>
              </u-animate>
            </u-animate-container>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-3 col-12 col-sm-12 text-center " >
            <u-animate-container>
              <u-animate
              name="fadeInUp"
              delay="0s"
              duration="1s"
              :iteration="1"
              :offset="0"
              animateClass="animated"
              :begin="false"
              >
                <img src="../../public/img/sp4.svg" class="pb-2" >
                <h6>JOIN US</h6>
                <h6>完整加盟體系</h6>
              </u-animate>
            </u-animate-container>
          </div>

        </div>
        </div>
      </div>

      <div class="col-xl-5 col-lg-5 col-md-5 col-12 col-sm-12 mt-4 mb-4">
        <div class=""> 
          <img src="../../public/img/logo.png" style="height:50vh">
        </div>
      </div>

      </div>
      
    </div>
    

  </div>
</template>

<script>
import Nav from '../components/Nav.vue'

export default {
  components: {
    Nav
  }

}
</script>

<style>
h6{
  color: white;
}
</style>