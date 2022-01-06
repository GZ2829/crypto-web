import Web3 from 'web3'

const web3 = {
    namespaced: true,

    state: () => ({
        web3: {
            networkId: null,
            coinbase: null,
            balance: null,
        },
    }),

    getters: {
        getInstance: (state) => {
            return state.web3
        },
    },

    mutations: {
        registerWeb3Instance (state, payload) {
            console.log('registerWeb3instance Mutation being executed', payload)
            let result = payload
            let web3Copy = state.web3
            web3Copy.coinbase = result.coinbase
            web3Copy.networkId = result.networkId
            web3Copy.balance = parseInt(result.balance, 10)
            state.web3 = web3Copy
        },
    },

    actions: {
      async initWeb3 () {
        // Check for web3 provider
        if (typeof window.ethereum !== 'undefined') {
          try {
            const instance = new Web3(window.ethereum)
            // const accounts = await instance.getAccounts

            console.log(instance.eth)
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

export default web3
