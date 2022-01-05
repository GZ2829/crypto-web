<template>
  <div class="c-HomeDefi">
    <h1>Defi Tools & Examples</h1>
    <MetaMask/>
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

import MetaMask from '~/snippets/MetaMask.vue'

import { mapGetters, mapMutations } from 'vuex';

export default {
    components: { VueSlickCarousel, MetaMask },

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
