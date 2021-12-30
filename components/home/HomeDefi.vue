<template>
  <div class="c-HomeDefi">
    <h1>Defi Tools & Examples</h1>
    <div
        @click="$emit('connect')"
        class="flex flex-row w-1/4 justify-center items-center p-3 border-2 text-blue-600 border-blue-600 font-bold hover:text-white hover:bg-blue-600">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="Metamask"
            class="h-5 mr-2">
        Connect to Metamask
    </div>
    <VueSlickCarousel :autoplay="false" :arrows="false" :dot="true">
      <div class="c-HomeDefi--CarouselItem"> Hello</div>
    </VueSlickCarousel>

  </div>
</template>


<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Web3 from 'web3'

import { mapGetters, mapMutations } from 'vuex';

export default {
    components: { VueSlickCarousel },

    data () {
      return {
        errorMessage: ''
      }
    },

    computed: {
      ...mapGetters('web3', ['getInstance']),
      web3 () {
        return this.getInstance
      }
    },

    methods: {
      ...mapMutations('web3', ['registerWeb3Instance']),
      async initWeb3 () {
        // Check for web3 provider
        if (typeof window.ethereum !== 'undefined') {
          try {
            const instance = new Web3(window.ethereum)
            // Get necessary info on your node
            const networkId = await instance.eth.net.getId();
            const coinbase = await instance.eth.getCoinbase();
            const balance = await instance.eth.getBalance(coinbase);
            // Save it to store
            this.registerWeb3Instance({
              networkId,
              coinbase,
              balance
            });
            this.errorMessage = '';
          } catch (error) {
            // User denied account access
            console.error('User denied web3 access', error);
            this.errorMessage = 'Please connect to your Ethereum address on Metamask before connecting to this website';
            return;
          }
        }
        // No web3 provider
        else {
          console.error('No web3 provider detected');
          this.errorMessage = "No web3 provider detected. Did you install the Metamask extension on this browser?";
          return;
        }
      }
    }
}
</script>

<style lang="scss">
  /* carousel overrides */

  .slick-slider{
    max-width: 500px;

  }

  .c-HomeDefi--CarouselItem{
    height: 90%;
    width: 98%!important;
    background-color: transparent;
    border: .1px solid #380036;
    display: flex!important;
    justify-content: center;
    align-items: center;
  }
</style>
