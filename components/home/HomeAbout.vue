<template>
<div class="c-HomeAbout">

  <div class="c-HomeAbout--outerBox">

  <div class="c-HomeAbout--textBox">
    <h1>Let it be said...</h1>
    <p>It stands to reason we are heading to an uncertain age.
      The effects of an archaic system
       have trickled down to its citizens. Our current financial
        and tech structures are too corrupted and seek to serve a self-percived elite class.
       Therefore, it is in my knowledge of those failures that I seek to pursue a future in decentralized/web3 technology.
        Web3 being the decentralized web, an internet where people are the master of their information, of their money and their voice.</p>
        <p>
          When I began my interest in programming and web work, it was for the soke purpose of making money. I had no desire to introduce
           apps that put people in control of their finances. I had light investments in crypto currencies and enjoyed the idea of crypto. However,
            it wasn't until I was introduced to defi that I began to invision a new future that gave ordinary individuals a way to make and secure wealth.
             When I discovered solidity, I realized I could do more then just try to get ahead of the curve; I could use my knowledge of web development to help build the very
              future I envisioned.

        </p>
        <h5>Signed,</h5>
        <h2>Gregory Zucchero</h2>
      </div>

      <VueSlickCarousel :autoplay="true" :arrows="false">
        <div class="c-HomeAbout--CarouselItem"><p class="c-HomeAbout--CarouselText">4 years Dev-ops experience</p></div>
        <div class="c-HomeAbout--CarouselItem"><p class="c-HomeAbout--CarouselText">2.5 years Professional experience</p></div>
        <div class="c-HomeAbout--CarouselItem"><p class="c-HomeAbout--CarouselText">1 year Solidity/Smart Contract experience</p></div>
      </VueSlickCarousel>

    </div>

</div>
</template>


<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components: { VueSlickCarousel },
}
</script>

<style lang="scss">
  /* carousel overrides */

  .slick-slider{
    max-width: 500px;

  }

  .c-HomeAbout--CarouselText{
    font-size: 32px;
    color: white;
    max-width: 80%;
    font-family: Objectivity-Regular;
    text-align: center;
  }

  .c-HomeAbout--CarouselItem{
    height: 300px;
    width: 98%!important;
    background-color: transparent;
    border: .1px solid #380036;
    display: flex!important;
    justify-content: center;
    align-items: center;
  }
</style>
