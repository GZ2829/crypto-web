<template>
  <div>
    <HomeHero/>
    <HomeAbout/>
    <HomeDefi/>
  </div>
</template>

<script>
export default {

  async initWeb3 () {
      // Check for web3 provider
      if (typeof window.ethereum !== 'undefined') {
        try {
          const instance = new Web3(window.ethereum)
          // Get necessary info on your node
          const networkId = await instance.eth.net.getId();
          const coinbase = await instance.eth.getCoinbase();
          const balance = await instance.eth.getBalance(coinbase)
          // Save it to store
          this.registerWeb3Instance({
            networkId,
            coinbase,
            balance
          })
        } catch (error) {
          // User denied account access
          console.error('User denied web3 access', error);
          return;
        }
      }
      // No web3 provider
      else {
        console.error('No web3 provider detected');
        return;
      }
    }
    
}
</script>
